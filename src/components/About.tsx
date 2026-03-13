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
                            Hello! I&apos;m <strong className="text-slate-200">Hetvi Radadiya</strong>, a Computer Science student and AI researcher from <strong className="text-slate-200"><MapPin className="inline w-4 h-4 mr-1 text-[#8B5CF6]" />Surat, Gujarat, India</strong>.
                        </p>
                        <p>
                            My focus lies in building intelligent systems using <strong className="text-[#22D3EE]">deep learning and computer vision</strong>. I develop solutions that analyze complex data—ranging from satellite imagery for SAR despeckling to healthcare datasets.
                        </p>
                        <p>
                            Through my research at <strong className="text-slate-200">SCAAI Pune</strong>, I am actively exploring <strong className="text-[#8B5CF6]">adversarial attacks in computer vision</strong> to design more robust and secure medical imaging models. I also gained practical production-level ML experience during my earlier internship at AIQSS.
                        </p>
                        <p>
                            Ultimately, my goal is to build impactful AI technologies that solve critical real-world challenges.
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
                        <div className="relative w-full h-full max-w-sm mx-auto">
                            {/* Primary Image */}
                            <div className="absolute top-0 right-0 w-3/4 aspect-[4/5] bg-[#020617] rounded-3xl border border-[#38BDF8]/20 shadow-[0_0_50px_rgba(139,92,246,0.15)] overflow-hidden group z-10 transition-transform duration-500 hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" />
                                <Image
                                    src="/Details/Hetvi_Photo.jpg"
                                    alt="Hetvi Radadiya"
                                    fill
                                    className="object-cover z-0 grayscale-[20%]"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            {/* Secondary Image */}
                            <div className="absolute bottom-10 left-0 w-3/5 aspect-square bg-[#020617] rounded-3xl border-4 border-[#020617] shadow-xl overflow-hidden group z-20 transition-transform duration-500 hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/10 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" />
                                <Image
                                    src="/Details/HR_Photo.jpg"
                                    alt="Hetvi Radadiya Logo / Alt Photo"
                                    fill
                                    className="object-cover z-0"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
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
