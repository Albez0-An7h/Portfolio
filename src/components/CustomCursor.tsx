import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type CursorType = 'default' | 'hover' | 'click';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState<CursorType>('default');
  
  useEffect(() => {
    // Handle mouse movement
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Handle mouse down (click)
    const mouseDown = () => {
      setCursorType('click');
    };
    
    // Handle mouse up (release)
    const mouseUp = () => {
      setCursorType('default');
    };
    
    // Track hoverable elements
    const handleHoverStart = () => {
      setCursorType('hover');
    };
    
    const handleHoverEnd = () => {
      setCursorType('default');
    };

    // Add event listeners
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    
    // Add event listeners for hoverable elements (links, buttons, etc.)
    const hoverableElements = document.querySelectorAll('a, button, [role="button"]');
    
    hoverableElements.forEach(element => {
      element.addEventListener('mouseenter', handleHoverStart);
      element.addEventListener('mouseleave', handleHoverEnd);
    });
    
    // Style the body to hide the default cursor
    document.body.style.cursor = 'none';
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      
      hoverableElements.forEach(element => {
        element.removeEventListener('mouseenter', handleHoverStart);
        element.removeEventListener('mouseleave', handleHoverEnd);
      });
      
      // Restore default cursor
      document.body.style.cursor = 'auto';
    };
  }, []);
  
  // Different styling based on cursor type
  const getOuterCursorVariants = (type: CursorType) => {
    switch (type) {
      case 'hover':
        return {
          scale: 1.5,
          backgroundColor: 'rgba(120, 160, 131, 0.3)',
          mixBlendMode: 'difference' as const,
          border: '1px solid rgba(120, 160, 131, 0.6)',
        };
      case 'click':
        return {
          scale: 0.8,
          backgroundColor: 'rgba(120, 160, 131, 0.5)',
          mixBlendMode: 'difference' as const,
        };
      default:
        return {
          scale: 1,
          backgroundColor: 'rgba(120, 160, 131, 0.2)',
          mixBlendMode: 'normal' as const,
          border: '1px solid rgba(120, 160, 131, 0.3)',
        };
    }
  };
  
  const getInnerCursorVariants = (type: CursorType) => {
    switch (type) {
      case 'hover':
        return {
          scale: 0.5,
          backgroundColor: '#78A083',
        };
      case 'click':
        return {
          scale: 2,
          backgroundColor: '#50727B',
        };
      default:
        return {
          scale: 1,
          backgroundColor: '#78A083',
        };
    }
  };
  
  const outerCursorStyle = getOuterCursorVariants(cursorType);
  const innerCursorStyle = getInnerCursorVariants(cursorType);

  return (
    <>
      <motion.div 
        className="custom-cursor outer-cursor"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          ...outerCursorStyle
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5
        }}
      />
      <motion.div 
        className="custom-cursor inner-cursor"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          ...innerCursorStyle
        }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 700,
          mass: 0.1
        }}
      />
    </>
  );
};

export default CustomCursor;
