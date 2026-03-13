"use client";

import { ScrollAnimation } from "./ScrollAnimation";
import { Brain, MapPin, Search } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="w-full py-24 bg-[#0F172A]/30 border-t border-b border-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="mb-16">
                        <h2 className="text-sm font-mono text-[#22D3EE] uppercase tracking-wider mb-2">
                            Vision
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-100">
                            About Me
                        </h3>
                    </div>
                </ScrollAnimation>

                <div className="grid md:grid-cols-5 gap-16 items-start">
                    <ScrollAnimation delay={0.1} className="md:col-span-3 space-y-6 text-lg text-slate-400 leading-relaxed font-sans">
                        <p>
                            Hello! I&apos;m <strong className="text-slate-200">Hetvi Radadiya</strong>, a Computer Science student and AI enthusiast based in <strong className="text-slate-200"><MapPin className="inline w-4 h-4 mr-1 text-[#8B5CF6]" />Surat, Gujarat, India</strong>.
                        </p>
                        <p>
                            I am passionate about building intelligent systems using <strong className="text-[#22D3EE]">deep learning, computer vision, and machine learning</strong>. My work focuses on developing AI solutions that can analyze images, learn patterns from complex data, and solve real-world problems.
                        </p>
                        <p>
                            I am currently working as a <strong className="text-slate-200">Research Intern at SCAAI Pune</strong>, where I am exploring <strong className="text-[#8B5CF6]">adversarial attacks in computer vision for healthcare applications</strong>. My research focuses on understanding vulnerabilities in deep learning models used in medical imaging systems and designing more robust AI systems.
                        </p>
                        <p>
                            I have also worked on satellite image processing and developed deep learning architectures for <strong className="text-slate-200">SAR image despeckling</strong>.
                        </p>
                        <p>
                            My long-term goal is to build innovative AI technologies and contribute to the advancement of intelligent systems.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-10">
                            <div className="p-4 bg-[#0F172A] border border-[#1E293B] rounded-lg">
                                <Brain className="w-8 h-8 text-[#22D3EE] mb-3" />
                                <h4 className="font-heading font-semibold text-slate-200 mb-1">Deep Learning</h4>
                                <p className="text-sm text-slate-500">CNNs, LSTMs, and Generative AI</p>
                            </div>
                            <div className="p-4 bg-[#0F172A] border border-[#1E293B] rounded-lg">
                                <Search className="w-8 h-8 text-[#8B5CF6] mb-3" />
                                <h4 className="font-heading font-semibold text-slate-200 mb-1">AI Research</h4>
                                <p className="text-sm text-slate-500">Adversarial Attacks & robustness</p>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.2} className="md:col-span-2 relative h-[500px] flex justify-center items-center">
                        {/* Minimalistic Photo Frame container */}
                        <div className="relative w-full aspect-[4/5] max-w-sm mx-auto flex justify-center items-center bg-[#020617] rounded-3xl border border-[#38BDF8]/20 shadow-[0_0_50px_rgba(139,92,246,0.15)] overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" />
                            <Image
                                src="/Details/Hetvi_Photo.jpg"
                                alt="Hetvi Radadiya"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 z-0 grayscale-[20%]"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        {/* Decorative background grid */}
                        <div
                            className="absolute inset-0 z-[-1] opacity-30"
                            style={{
                                backgroundImage: "radial-gradient(circle at center, #22D3EE 1px, transparent 1px)",
                                backgroundSize: "20px 20px",
                            }}
                        />
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
