import { useEffect, useState } from "react";
import styles from "./TypingText.module.css";
import { normalizeValue } from "../../utils/normalizeCssValue";

interface TypingProps {
    text: string[];
    speed?: number;
    finalDelay?: number;
    loop?: boolean;
    showCursor?: boolean;
    textSize?: string | number;
}

export const TypingText = ({
    text,
    speed = 100,
    finalDelay = 400,
    loop = false,
    textSize = "2rem",
}: TypingProps) => {
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const currentText = text[currentTextIndex];
    const normalizedTextSize = normalizeValue(textSize);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentText.length) {
                    setDisplayText((prev) => prev + currentText[charIndex]);
                    setCharIndex((prev) => prev + 1);
                    return;
                }

                if (charIndex === currentText.length && loop === true) {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, finalDelay);
                    return;
                }
            }

            if (isDeleting) {
                if (charIndex > 0) {
                    setDisplayText(currentText.slice(0, charIndex - 1));
                    setCharIndex((prev) => prev - 1);
                    return;
                }

                if (isDeleting && charIndex === 0) {
                    setTimeout(() => {
                        setIsDeleting(false);
                        setCurrentTextIndex((prev) => (prev + 1) % text.length);
                    }, finalDelay);
                    return;
                }
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentText, speed, text.length]);

    return (
        <span
            className={styles.wrapper}
            style={
                {
                    "--textSize": `${normalizedTextSize}`,
                } as React.CSSProperties
            }
        >
            <span className={styles.text}>{displayText}</span>
            <span className={styles.cursor}></span>
        </span>
    );
};
