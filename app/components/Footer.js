import React from "react";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <section className="absolute bottom-0">
            <div className="inline-flex gap-4">
                <Link href="/contact">
                    <Mail
                        size={40}
                        className="stroke-primary"
                        strokeWidth={2}
                        absoluteStrokeWidth
                    />
                </Link>

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
