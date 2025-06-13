import React from "react";

import {
    CircleX,
    FolderCode,
    Info,
    Link,
    Mail,
    MessageCircleQuestion,
} from "lucide-react";
import useScrollOnShow from "../hooks/useScrollOnShow";

export default function Home({ show, onClose }) {
    const homeSectionRef = useScrollOnShow(show);

    return (
        show && (
            <section id="home-section" ref={homeSectionRef} className="">
                <div id="btns">
                    <button onClick={onClose}>
                        <CircleX />
                    </button>
                </div>
                <div id="content">
                    <Info size={50} strokeWidth={2.5} absoluteStrokeWidth />
                    <Link size={50} strokeWidth={2.5} absoluteStrokeWidth />
                    <FolderCode
                        size={50}
                        strokeWidth={2.5}
                        absoluteStrokeWidth
                    />
                    <MessageCircleQuestion
                        size={50}
                        strokeWidth={2.5}
                        absoluteStrokeWidth
                    />
                    <Mail size={50} strokeWidth={2.5} absoluteStrokeWidth />
                </div>
            </section>
        )
    );
}
