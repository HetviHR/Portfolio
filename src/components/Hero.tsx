"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-[#020617]">
            {/* Background gradients and particles */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#8B5CF6]/20 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#22D3EE]/20 blur-[120px]" />
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: "radial-gradient(circle at center, #22D3EE 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Col */}
                <div className="flex flex-col space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-[#22D3EE] font-mono text-sm sm:text-base tracking-wider mb-3">
                            Building Intelligent Systems
                        </h2>
                        <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-heading font-bold leading-tight mb-4 text-[#E2E8F0]">
                            Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6]">Hetvi Radadiya.</span>
                        </h1>
                        <h3 className="text-2xl sm:text-3xl text-slate-300 font-medium font-heading">
                            AI & Machine Learning Developer<br />
                            Computer Vision Researcher<br />
                            IEEE Student Leader
                        </h3>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-400 leading-relaxed max-w-xl font-sans"
                    >
                        I build intelligent systems using deep learning, computer vision, and
                        data-driven technologies. My work focuses on developing AI models for
                        real-world applications including healthcare imaging, satellite data
                        analysis, and computer vision systems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center bg-[#22D3EE] text-[#020617] px-6 py-3 border border-transparent text-base font-medium rounded-md hover:bg-[#38BDF8] hover:scale-105 transition-all duration-200 gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                        >
                            View Projects <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="https://github.com/HetviHR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-transparent border border-[#1E293B] text-slate-300 px-6 py-3 text-base font-medium rounded-md hover:border-[#8B5CF6] hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-200 gap-2"
                        >
                            <Github className="w-5 h-5" /> GitHub
                        </a>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center bg-[#0F172A] border border-[#1E293B] text-white px-6 py-3 text-base font-medium rounded-md hover:bg-[#1E293B] hover:text-white transition-all duration-200 gap-2"
                        >
                            <Mail className="w-5 h-5" /> Contact
                        </Link>
                    </motion.div>
                </div>

                {/* Right Col / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="hidden lg:flex items-center justify-center relative h-[600px]"
                >
                    {/* AI/Network placeholder visualization */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute w-72 h-72 bg-[#22D3EE]/20 rounded-full blur-[80px] animate-pulse" />
                        <div className="absolute w-[400px] h-[400px] border border-[#8B5CF6]/30 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute w-[300px] h-[300px] border border-[#22D3EE]/40 rounded-full animate-[spin_7s_linear_infinite_reverse]" />
                        <div className="absolute w-[200px] h-[200px] border border-[#38BDF8]/50 rounded-full animate-[spin_5s_linear_infinite]" />
                        <div className="z-10 w-48 h-48 rounded-full border-2 border-[#22D3EE] shadow-[0_0_30px_rgba(34,211,238,0.5)] overflow-hidden relative">
                            <Image
                                src="/Details/HR_Photo.jpg"
                                alt="Hetvi Radadiya"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
