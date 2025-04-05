import { useState, useEffect, useRef } from 'react';

const Typewriter = ({ 
  words = [], 
  loop = true, 
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 1500,
  cursorStyle = "default" // New prop to support different cursor styles
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  
  // For cursor blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(blinkInterval);
  }, []);
  
  useEffect(() => {
    if (words.length === 0) return;
    
    const currentWord = words[wordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentWord.substring(0, text.length + 1));
        setIsTyping(true);
        
        // If word is complete, start deleting after delay
        if (text === currentWord) {
          setIsTyping(false);
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Deleting
        setText(currentWord.substring(0, text.length - 1));
        setIsTyping(true);
        
        // If deleted, move to next word
        if (text === '') {
          setIsDeleting(false);
          setIsTyping(false);
          setWordIndex((prevIndex) => {
            if (prevIndex === words.length - 1) {
              return loop ? 0 : prevIndex;
            }
            return prevIndex + 1;
          });
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, loop, typeSpeed, deleteSpeed, delayBetweenWords]);
  
  // Determine cursor class based on state and prop
  const getCursorClass = () => {
    if (cursorStyle === "command") return "cursor command-cursor";
    if (isTyping) return "cursor animate-pulse";
    return "cursor";
  };
  
  return (
    <span className="typewriter">
      {text}
      <span 
        className={getCursorClass()}
        style={{ 
          opacity: cursorVisible ? 1 : 0,
          transition: 'all 0.15s ease'
        }}
      ></span>
    </span>
  );
};

export default Typewriter;
