"use client";

import { ScrollAnimation } from "./ScrollAnimation";
import { Users } from "lucide-react";

export default function Leadership() {
    return (
        <section id="leadership" className="w-full py-24 bg-[#020617] border-t border-[#1E293B]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="mb-16 text-center">
                        <h2 className="text-sm font-mono text-[#22D3EE] uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
                            <span className="w-8 h-[1px] bg-[#22D3EE]"></span> Community
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-100">
                            Leadership
                        </h3>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.1}>
                    <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-8 hover:border-[#22D3EE]/50 transition-colors duration-300 relative overflow-hidden group shadow-xl">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Users className="w-32 h-32 text-[#22D3EE]" />
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 bg-[#22D3EE]/10 text-[#22D3EE] text-xs font-mono rounded-full border border-[#22D3EE]/20">
                                        IEEE Leadership
                                    </span>
                                </div>
                                <h4 className="text-2xl font-heading font-bold text-slate-200">
                                    IEEE Student Chapter Roles
                                </h4>
                                <ul className="text-slate-300 font-sans list-disc list-inside space-y-2 mt-4 ml-2">
                                    <li><strong>Secretary</strong> – IEEE Computer Society Student Chapter, CHARUSAT SB</li>
                                    <li><strong>Former Treasurer</strong> – IEEE Women in Engineering (WIE), CHARUSAT SB</li>
                                    <li><strong>IEEE Member</strong></li>
                                </ul>
                                <p className="text-slate-400 leading-relaxed font-sans mt-4 pt-4 border-t border-[#1E293B]/50">
                                    Actively involved in organizing technical events, workshops, and activities that promote innovation, collaboration, and knowledge sharing within the IEEE student community.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
