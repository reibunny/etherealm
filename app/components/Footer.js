import React from "react";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer({ onShowContact }) {
    return (
        <section className="fixed bottom-0 left-0 right-0 w-full text-center">
            <div className="inline-flex gap-4">
                <button onClick={onShowContact}>
                    <Mail
                        size={40}
                        className="stroke-primary"
                        strokeWidth={2}
                        absoluteStrokeWidth
                    />
                </button>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/reibunny"
                >
                    <Github
                        size={40}
                        className="stroke-primary"
                        strokeWidth={2}
                        absoluteStrokeWidth
                    />
                </a>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/alyson-rezaire/"
                >
                    <Linkedin
                        size={40}
                        className="stroke-primary"
                        strokeWidth={2}
                        absoluteStrokeWidth
                    />
                </a>
            </div>
        </section>
    );
}
