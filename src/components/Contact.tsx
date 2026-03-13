"use client";

import { ScrollAnimation } from "./ScrollAnimation";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulate form submission
        setTimeout(() => {
            setFormStatus("success");
        }, 1500);
    };

    return (
        <section id="contact" className="w-full py-24 bg-[#0F172A]/80 border-t border-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-mono text-[#8B5CF6] uppercase tracking-wider mb-2">
                            Contact & Collaboration
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-100 mb-6">
                            Let&apos;s Build Intelligent Systems Together
                        </h3>
                        <p className="max-w-xl mx-auto text-slate-400 text-lg">
                            I am always interested in collaborating on AI research, projects, and innovative ideas.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <ScrollAnimation delay={0.1}>
                        <div className="bg-[#020617] border border-[#1E293B] p-8 rounded-2xl h-full shadow-lg">
                            <h4 className="text-2xl font-heading font-medium text-slate-200 mb-8">
                                Get In Touch
                            </h4>
                            <div className="space-y-6">

                                <div className="flex items-center gap-4 text-slate-400">
                                    <div className="w-12 h-12 flex items-center justify-center bg-[#0F172A] rounded-full border border-[#1E293B]">
                                        <span className="font-mono text-xl text-[#22D3EE]">#</span>
                                    </div>
                                    <div>
                                        <span className="block text-sm font-mono text-slate-500 mb-1">Name</span>
                                        <span className="text-base text-slate-200">Hetvi Radadiya</span>
                                    </div>
                                </div>

                                <a href="mailto:hetvihradadiya@gmail.com" className="flex items-center gap-4 text-slate-400 hover:text-[#22D3EE] transition-colors group">
                                    <div className="w-12 h-12 flex items-center justify-center bg-[#0F172A] rounded-full group-hover:bg-[#22D3EE]/10 border border-[#1E293B] group-hover:border-[#22D3EE]/30 transition-all">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-mono text-slate-500 mb-1">Email</span>
                                        <span className="text-base text-slate-200 break-all">hetvihradadiya@gmail.com</span>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-slate-400 group">
                                    <div className="w-12 h-12 flex items-center justify-center bg-[#0F172A] rounded-full border border-[#1E293B] transition-all">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-mono text-slate-500 mb-1">Location</span>
                                        <span className="text-base text-slate-200">Surat, Gujarat, India</span>
                                    </div>
                                </div>

                                <a href="https://github.com/HetviHR" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
                                    <div className="w-12 h-12 flex items-center justify-center bg-[#0F172A] rounded-full group-hover:bg-white/10 border border-[#1E293B] group-hover:border-white/30 transition-all">
                                        <Github className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-mono text-slate-500 mb-1">GitHub</span>
                                        <span className="text-base text-slate-200">github.com/HetviHR</span>
                                    </div>
                                </a>

                                <a href="https://www.linkedin.com/in/hetvi-radadiya-74580128a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-[#0A66C2] transition-colors group">
                                    <div className="w-12 h-12 flex items-center justify-center bg-[#0F172A] rounded-full group-hover:bg-[#0A66C2]/10 border border-[#1E293B] group-hover:border-[#0A66C2]/30 transition-all">
                                        <Linkedin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-mono text-slate-500 mb-1">LinkedIn</span>
                                        <span className="text-base text-slate-200 break-all">linkedin.com/in/hetvi-radadiya-74580128a/</span>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Contact Form */}
                    <ScrollAnimation delay={0.2}>
                        <form onSubmit={handleSubmit} className="bg-[#020617] border border-[#1E293B] p-8 rounded-2xl h-full shadow-lg flex flex-col space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-mono text-slate-400 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-[#0F172A] border border-[#334155] rounded-md px-4 py-3 text-slate-200 focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all duration-200 placeholder:text-slate-600 font-sans"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-mono text-slate-400 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-[#0F172A] border border-[#334155] rounded-md px-4 py-3 text-slate-200 focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all duration-200 placeholder:text-slate-600 font-sans"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-mono text-slate-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full bg-[#0F172A] border border-[#334155] rounded-md px-4 py-3 text-slate-200 focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all duration-200 placeholder:text-slate-600 font-sans resize-none"
                                    placeholder="Hello, let's build something..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={formStatus !== "idle"}
                                className="w-full bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] hover:brightness-110 text-white font-medium py-3 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center shadow-[0_0_20px_rgba(139,92,246,0.3)] mt-auto"
                            >
                                {formStatus === "idle" && "Send Message"}
                                {formStatus === "submitting" && "Sending..."}
                                {formStatus === "success" && "Message Sent!"}
                            </button>
                        </form>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
