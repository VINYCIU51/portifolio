import gsap from "gsap";
import { useEffect, useRef } from "react";
import styles from "./FadeReveal.module.css";
import { normalizeValue } from "../../utils/normalizeCssValue";

interface FadeProps {
    color?: string;
    width?: string | number;
    height?: string | number;
    duration?: number;
}

export const FadeReveal = ({
    color = "#0f0f0f",
    width = "105%",
    height = "105%",
    duration = 3,
}: FadeProps) => {
    const fadeRef = useRef<HTMLDivElement>(null);
    const normalizedWidth = normalizeValue(width);
    const normalizedHeight = normalizeValue(height);

    const gradient = `linear-gradient(
            to right,
            ${color}FF 80%,
            ${color}D9 90%,
            ${color}00 100%
        )`;

    useEffect(() => {
        if (!fadeRef.current) return;

        gsap.fromTo(
            fadeRef.current,
            { x: 0, opacity: 1 },
            {
                x: "-100%",
                duration,
                ease: "power4.out",
            }
        );
    }, [duration]);

    return (
        <div
            ref={fadeRef}
            className={styles.fade}
            style={
                {
                    "--gradient": `${gradient}`,
                    "--width": `${normalizedWidth}`,
                    "--height": `${normalizedHeight}`,
                } as React.CSSProperties
            }
        />
    );
};
