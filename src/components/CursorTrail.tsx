import { useEffect, useState } from 'react';

interface TrailDot {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Add a new dot to the trail
    const dotCount = 12; // Number of dots in trail
    const createDot = () => {
      return {
        id: Date.now(),
        x: mousePosition.x,
        y: mousePosition.y,
        opacity: 0.8,
        size: Math.random() * 4 + 2
      };
    };

    // Update the trail
    setTrail(prevTrail => {
      // Add new dot at the beginning
      const newTrail = [createDot(), ...prevTrail];
      
      // Keep only the latest dots
      if (newTrail.length > dotCount) {
        return newTrail.slice(0, dotCount);
      }
      
      return newTrail;
    });

    // Fade out the dots over time
    const fadeInterval = setInterval(() => {
      setTrail(prevTrail => 
        prevTrail.map(dot => ({
          ...dot,
          opacity: dot.opacity > 0 ? dot.opacity - 0.08 : 0
        })).filter(dot => dot.opacity > 0)
      );
    }, 50);

    return () => {
      clearInterval(fadeInterval);
    };
  }, [mousePosition]);

  return (
    <>
      {trail.map((dot, index) => (
        <div
          key={dot.id}
          className="cursor-trail"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            opacity: dot.opacity,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            transform: `scale(${1 - index * 0.05})`,
            filter: `hue-rotate(${index * 5}deg)`,
            backgroundColor: index % 2 === 0 ? 'rgba(120, 160, 131, 0.3)' : 'rgba(80, 114, 123, 0.3)'
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
