"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full py-8 bg-[#020617] border-t border-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm font-mono text-slate-500">
                        © 2026 Hetvi Radadiya
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a
                        href="https://github.com/HetviHR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-white transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hetvi-radadiya-74580128a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-[#0A66C2] transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
