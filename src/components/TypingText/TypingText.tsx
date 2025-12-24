import { useEffect, useState } from "react";
import "./TypingText.module.css";

interface TypingProps {
  text: string[];
  speed?: number;
}

export const TypingText = ({ text, speed = 100 }: TypingProps) => {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = text[currentTextIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {

      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(prev => prev + currentText[charIndex]);
        setCharIndex(prev => prev + 1);
        return;
      }

      if (!isDeleting && charIndex === currentText.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        return;
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex(prev => (prev + 1) % text.length);
        return;
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentText, speed, text.length]);

  return (
    <span>
      {displayText}
      <span className="cursor">_</span>
    </span>
  );
};
