declare module './components/Typewriter' {
  interface TypewriterProps {
    words: string[];
    loop?: boolean;
    typeSpeed?: number;
    deleteSpeed?: number;
    delayBetweenWords?: number;
  }
  
  const Typewriter: React.FC<TypewriterProps>;
  export default Typewriter;
}
