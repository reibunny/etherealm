import React from "react";

import { CircleX } from "lucide-react";
import useScrollOnShow from "../hooks/useScrollOnShow";

export default function Contact({ show, onClose }) {
    const contactSectionRef = useScrollOnShow(show);

    return (
        show && (
            <section id="contact-section" ref={contactSectionRef} className="">
                <div id="btns">
                    <button onClick={onClose}>
                        <CircleX />
                    </button>
                </div>
                <div id="content">Contact</div>
            </section>
        )
    );
}
