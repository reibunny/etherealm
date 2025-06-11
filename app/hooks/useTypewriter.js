"use client";

import { useState, useEffect } from "react";

const useTypewriter = (text, speed = 100) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeoutId);
        } else {
            setAnimationComplete(true);
        }
    }, [currentIndex, text, speed]);

    return {
        displayText,
        animationComplete,
        resetAnimation: () => {
            setDisplayText("");
            setCurrentIndex(0);
            setAnimationComplete(false);
        },
    };
};

export default useTypewriter;
