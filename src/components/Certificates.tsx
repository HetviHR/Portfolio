"use client";

import { ScrollAnimation } from "./ScrollAnimation";
import { Award, ExternalLink } from "lucide-react";

export default function Certificates() {
    const certifications = [
        { name: "Advanced Learning Algorithm", org: "Coursera" },
        { name: "Build RAG Applications: Get Started", org: "Coursera / DeepLearning.AI" },
        { name: "Supervised Machine Learning", org: "Coursera" },
        { name: "Generative AI: Intro and Applications", org: "IBM" },
        { name: "Developing AI Applications with Python & Flask", org: "IBM" },
        { name: "Vector Databases for RAG: An Intro", org: "DeepLearning.AI" },
    ];

    return (
        <section id="certificates" className="w-full py-24 bg-[#020617] border-t border-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="mb-16 text-center">
                        <h2 className="text-sm font-mono text-[#22D3EE] uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
                            <span className="w-8 h-[1px] bg-[#22D3EE]"></span> Continuous Learning
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-100 flex items-center justify-center gap-4">
                            <Award className="w-10 h-10" /> Certifications
                        </h3>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, i) => (
                        <ScrollAnimation key={i} delay={0.05 * i} className="h-full">
                            <div className="h-full bg-[#0F172A] border border-[#1E293B] rounded-xl p-6 shadow-lg hover:border-[#22D3EE]/50 transition-colors flex flex-col justify-between group">
                                <div>
                                    <h4 className="text-lg font-heading font-medium text-slate-200 mb-2 leading-tight">
                                        {cert.name}
                                    </h4>
                                    <p className="text-sm font-mono text-slate-500 mb-4">{cert.org}</p>
                                </div>
                                <div className="flex justify-between items-center border-t border-[#1E293B] pt-4 mt-auto">
                                    <span className="text-xs text-slate-600 font-mono tracking-widest uppercase">Verified</span>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
