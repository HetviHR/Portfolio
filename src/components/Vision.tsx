"use client";

import { ScrollAnimation } from "./ScrollAnimation";
import { Brain, Sparkles, Cpu } from "lucide-react";

export default function Vision() {
    return (
        <section id="vision" className="w-full py-24 bg-[#0F172A]/30 border-t border-b border-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-mono text-accent uppercase tracking-wider mb-2">
                            Vision
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-100">
                            Why I Build AI
                        </h3>
                    </div>
                </ScrollAnimation>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <ScrollAnimation delay={0.1}>
                        <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-sans">
                            <p>
                                <strong className="text-slate-200">Artificial intelligence</strong> has
                                the potential to transform how humans interact with technology. My
                                goal is to build intelligent systems that can understand complex data
                                such as images, patterns, and natural language.
                            </p>
                            <p>
                                I am particularly interested in <strong className="text-accent">deep learning</strong>,{" "}
                                <strong className="text-accent">computer vision</strong>, and next-generation
                                AI systems that can solve real-world challenges. From image
                                processing to predictive modeling, I enjoy diving deep into
                                the underlying mathematics and model architectures.
                            </p>
                            <p>
                                In the long term, I aim to build an AI company that develops impactful
                                technologies and contributes to the future of intelligent computing.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6 mt-10">
                            <div className="p-4 bg-[#0F172A] border border-[#1E293B] rounded-lg">
                                <Brain className="w-8 h-8 text-accent mb-3" />
                                <h4 className="font-heading font-semibold text-slate-200 mb-1">Deep Learning</h4>
                                <p className="text-sm text-slate-500">CNNs, LSTMs, and Generative AI</p>
                            </div>
                            <div className="p-4 bg-[#0F172A] border border-[#1E293B] rounded-lg">
                                <Cpu className="w-8 h-8 text-secondary mb-3" />
                                <h4 className="font-heading font-semibold text-slate-200 mb-1">Computer Vision</h4>
                                <p className="text-sm text-slate-500">Image Processing & Denoising</p>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.2} className="relative h-[500px] flex justify-center items-center">
                        {/* Visual AI Brain Illustration Concept */}
                        <div className="relative w-full h-full max-w-sm mx-auto flex justify-center items-center bg-[#020617] rounded-3xl border border-[#1E293B] shadow-[0_0_50px_rgba(139,92,246,0.15)] overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent z-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="z-10 text-center space-y-4">
                                <Sparkles className="w-16 h-16 text-highlight mx-auto animate-pulse" />
                                <p className="font-mono text-accent text-sm">&lt;Visionary_AI /&gt;</p>
                            </div>
                            {/* Decorative grid */}
                            <div
                                className="absolute inset-0 z-0 opacity-20"
                                style={{
                                    backgroundImage: "radial-gradient(circle at center, #22D3EE 1px, transparent 1px)",
                                    backgroundSize: "20px 20px",
                                }}
                            />
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
