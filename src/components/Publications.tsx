"use client";

import { ScrollAnimation } from "./ScrollAnimation";
import { BookOpen } from "lucide-react";

export default function Publications() {
    return (
        <section id="publications" className="w-full py-24 bg-[#020617] border-t border-[#1E293B]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="mb-16 text-center">
                        <h2 className="text-sm font-mono text-[#8B5CF6] uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
                            <span className="w-8 h-[1px] bg-[#8B5CF6]"></span> Academic
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-100">
                            Publications
                        </h3>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.1}>
                    <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-8 hover:border-[#8B5CF6]/50 transition-colors duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <BookOpen className="w-32 h-32 text-[#8B5CF6]" />
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] text-xs font-mono rounded-full border border-[#8B5CF6]/20">
                                        Conference Paper
                                    </span>
                                </div>
                                <h4 className="text-2xl font-heading font-bold text-slate-200">
                                    TACNET: SAR Image Despeckling Architecture
                                </h4>
                                <p className="text-slate-400 leading-relaxed font-sans">
                                    Proposed a deep learning architecture for <strong>Synthetic Aperture Radar (SAR) image despeckling</strong> to improve image quality and reduce speckle noise.
                                </p>
                                <div className="pt-4">
                                    <a href="https://ieeexplore.ieee.org/abstract/document/11398216" className="inline-flex items-center text-sm font-mono text-[#22D3EE] hover:text-[#38BDF8] transition-colors">
                                        Read Paper Placeholder →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
