import { useEffect, useState } from "react";
import  styles from "./TypingText.module.css";

interface TypingProps {
  text: string[];
  speed?: number;
  finalDelay?: number;
}

export const TypingText = ({ text, speed = 100, finalDelay= 400 }: TypingProps) => {
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
        setTimeout(() => {
          setIsDeleting(true);
        },finalDelay);
        return;
      }

      if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        return;
      }

      if (isDeleting && charIndex === 0) {
        setTimeout(() => {
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % text.length);
        },finalDelay);
        return;
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentText, speed, text.length]);

  return (
    <span className={styles.wrapper}>
      <span className={styles.text}>{displayText}</span>
      <span className={styles.cursor}></span>
    </span>
  );
};
