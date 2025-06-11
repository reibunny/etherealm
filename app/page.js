"use client";

import Image from "next/image";
import useTypewriter from "./hooks/useTypewriter";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
    const [isHovered, setIsHovered] = useState(false);

    const { displayText: reiText, animationComplete: reiComplete } =
        useTypewriter("rei", 100);

    const { displayText: alysonText, resetAnimation: resetAlysonAnimation } =
        useTypewriter("alyson", 100);

    useEffect(() => {
        if (!isHovered) {
            resetAlysonAnimation();
        }
    }, [isHovered, resetAlysonAnimation]);

    return (
        <section className="flex items-center justify-center min-h-screen px-4">
            <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-3xl text-center">
                <div>
                    {/* <Image
                        src="/logo.svg"
                        alt="My logo"
                        width={160}
                        height={160}
                        className="mx-auto mb-10"
                    /> */}
                    <h1
                        className="text-7xl mb-4"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {" "}
                        <div className="group inline-block font-sans transition-all ease-in-out duration-75">
                            {" "}
                            hi! i&apos;m{" "}
                            {!isHovered ? (
                                <>
                                    <span className="text-primary font-bold">
                                        {reiText}
                                    </span>

                                    {!reiComplete && (
                                        <span className="animate-blink">|</span>
                                    )}
                                </>
                            ) : (
                                <>
                                    <span className="text-primary font-bold">
                                        {alysonText}
                                    </span>

                                    {!alysonText.length === "alyson".length && (
                                        <span className="animate-blink">|</span>
                                    )}
                                </>
                            )}
                        </div>
                    </h1>
                    <h2 className="text-3xl mb-7">
                        a computer science student
                    </h2>
                </div>
                <Link href="/home">
                    <button className="text-bold rounded px-10 py-3 bg-primary">
                        Get Started
                    </button>
                </Link>
                <Footer />
            </div>
        </section>
    );
}
