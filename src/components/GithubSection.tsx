"use client";

import { ScrollAnimation } from "./ScrollAnimation";
import { Github } from "lucide-react";

export default function GithubSection() {
    return (
        <section id="github" className="w-full py-24 bg-[#0F172A]/80 border-t border-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="mb-16">
                        <h2 className="text-sm font-mono text-[#8B5CF6] uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-[#8B5CF6]"></span> Open Source
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-100 flex items-center gap-4">
                            <Github className="w-10 h-10" /> GitHub Activity
                        </h3>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.1}>
                    <div className="bg-[#020617] border border-[#1E293B] rounded-2xl p-6 md:p-10 shadow-lg text-center flex flex-col items-center">
                        <h4 className="text-2xl font-mono text-slate-200 mb-6">@HetviHR</h4>
                        <div className="w-full max-w-4xl overflow-x-auto pb-4">
                            {/* GitHub contribution graph image placeholder / embed */}
                            <img
                                src="https://ghchart.rshah.org/8B5CF6/HetviHR"
                                alt="Hetvi Radadiya's Github Chart"
                                className="mx-auto border border-[#1E293B] p-4 rounded-xl bg-[#0F172A]"
                                loading="lazy"
                            />
                        </div>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                href="https://github.com/HetviHR"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/30 px-6 py-3 text-sm font-mono rounded-md hover:bg-[#8B5CF6]/20 transition-all duration-200"
                            >
                                View Profile
                            </a>
                            <a
                                href="https://github.com/HetviHR?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-transparent text-slate-400 border border-[#1E293B] px-6 py-3 text-sm font-mono rounded-md hover:text-white hover:border-slate-500 transition-all duration-200"
                            >
                                Top Repositories
                            </a>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
