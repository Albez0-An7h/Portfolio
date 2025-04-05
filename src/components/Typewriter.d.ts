import React from 'react';

interface TypewriterProps {
  words: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  cursorStyle?: string;
}

declare const Typewriter: React.FC<TypewriterProps>;
export default Typewriter;
