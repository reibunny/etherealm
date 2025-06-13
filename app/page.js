"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";

import useTypewriter from "./hooks/useTypewriter";
import useScrollOnShow from "./hooks/useScrollOnShow";

export default function Main() {
    // Toggle view on each Section logic
    const [activeSectionId, setActiveSectionId] = useState(null);

    const homeSectionRef = useScrollOnShow(activeSectionId === "home");
    const contactSectionRef = useScrollOnShow(activeSectionId === "contact");

    const handleToggleSection = (sectionName) => {
        setActiveSectionId((prevName) =>
            prevName === sectionName ? null : sectionName
        );
    };

    // Display name onHover logic
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

    useEffect(() => {
        if (activeSectionId === null) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            // if (homeSectionRef.current) {
            //     homeSectionRef.current.scrollIntoView({
            //         behavior: "smooth",
            //         block: "start",
            //     });
            // }
        }
    }, [activeSectionId]);

    return (
        <div
            id="outer-wrapper"
            className="flex flex-col max-w-3xl mx-auto w-full"
        >
            <section
                id="landing-section"
                className="flex flex-col items-center justify-center min-h-screen w-full text-center"
            >
                <div
                    id="welcome-text"
                    className="flex flex-col items-center justify-center min-h-screen text-center"
                >
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

                                    {/* {!reiComplete && (
                                        <span className="animate-blink">|</span>
                                    )} */}
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

                    <button
                        className="text-bold rounded px-10 py-3 bg-primary"
                        onClick={() => handleToggleSection("home")}
                    >
                        Get Started
                    </button>
                </div>
            </section>

            <section
                id="home-section"
                ref={homeSectionRef}
                className="min-h-screen w-full p-2"
            >
                <Home
                    show={activeSectionId === "home"}
                    onClose={() => setActiveSectionId(null)}
                />
            </section>

            <section
                id="contact-section"
                ref={contactSectionRef}
                className="min-h-screen w-full p-2"
            >
                <Contact
                    show={activeSectionId === "contact"}
                    onClose={() => setActiveSectionId(null)}
                />
            </section>

            <Footer onShowContact={() => handleToggleSection("contact")} />
        </div>
    );
}
