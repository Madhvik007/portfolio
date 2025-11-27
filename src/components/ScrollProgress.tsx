"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const currentScroll = window.scrollY;
            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setScrollProgress(Number((currentScroll / scrollHeight).toFixed(2)) * 100);
            }
        };

        window.addEventListener("scroll", updateScrollProgress);

        return () => {
            window.removeEventListener("scroll", updateScrollProgress);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-2 z-[60] bg-transparent pointer-events-none">
            <div
                className="h-full bg-[var(--color-secondary)] transition-all duration-100 ease-out border-b-2 border-black"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
}
