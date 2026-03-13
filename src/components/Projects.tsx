"use client";

import { ScrollAnimation } from "./ScrollAnimation";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Image Captioning using CNN + LSTM",
        description:
            "Developed a deep learning system that automatically generates natural language descriptions for images. The system uses convolutional neural networks to extract visual features and LSTM networks to generate captions.",
        dataset: "Flickr8k",
        tech: ["Python", "TensorFlow", "Deep Learning", "NLP"],
        github: "https://github.com/HetviHR",
        demo: "#",
        color: "from-[#22D3EE]/20 to-[#38BDF8]/20",
    },
    {
        title: "SAR Image Despeckling using TACNET",
        description:
            "Built a deep learning model for removing speckle noise from SAR satellite images using the TACNET architecture. Evaluated performance using PSNR and SSIM metrics.",
        dataset: null,
        tech: ["TensorFlow", "Image Processing", "Deep Learning"],
        github: "https://github.com/HetviHR",
        demo: "#",
        color: "from-[#8B5CF6]/20 to-indigo-500/20",
    },
    {
        title: "Sediment Feature Learning Application",
        description:
            "Developed a learning platform that helps students identify sediment features through images and quizzes. The system includes authentication and a MongoDB backend.",
        dataset: null,
        tech: ["JavaScript", "MongoDB", "Node.js", "React"],
        github: "https://github.com/HetviHR",
        demo: "#",
        color: "from-emerald-500/20 to-teal-500/20",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="w-full py-24 bg-[#0F172A] border-t border-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="mb-16">
                        <h2 className="text-sm font-mono text-[#22D3EE] uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-[#22D3EE]"></span> Featured Work
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-100">
                            AI Systems Built
                        </h3>
                    </div>
                </ScrollAnimation>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <ScrollAnimation
                            key={index}
                            delay={0.1}
                            className={`flex flex-col lg:flex-row gap-12 items-center lg:items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image Container */}
                            <div className="w-full lg:w-7/12 relative group rounded-xl overflow-hidden border border-[#1E293B] bg-[#020617] shadow-xl">
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-10 transition-opacity z-10 duration-500`}
                                />
                                <div className="aspect-video w-full flex items-center justify-center p-8 bg-[#0F172A]/50">
                                    <div className="w-full h-full rounded shadow-xl bg-[#020617] border border-[#1E293B] flex flex-col pt-3 px-3">
                                        {/* Mock Browser Header */}
                                        <div className="flex gap-1.5 mb-3 px-1">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                        </div>
                                        {/* Mock App Body */}
                                        <div className="flex-1 w-full rounded-t border-t border-x border-[#1E293B] bg-[#020617] p-4 font-mono text-xs text-slate-400 overflow-hidden relative">
                                            <div className="text-[#22D3EE] mb-2">$ python run_model.py</div>
                                            {project.dataset && <div className="text-slate-500">Loading dataset: {project.dataset}...</div>}
                                            {!project.dataset && <div className="text-slate-500">Loading modules...</div>}
                                            <div className="text-slate-500">Initializing {project.title.split(' ')[0]} architecture...</div>
                                            <div className="text-emerald-400/80 mt-2">Training complete. Evaluating metrics...</div>
                                            <div className="text-slate-500 mt-2">System Ready.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-5/12 flex flex-col space-y-6 lg:z-20">
                                <p className="font-mono text-[#8B5CF6] text-sm">Featured AI Project</p>
                                <h4 className="text-2xl sm:text-3xl font-heading font-bold text-slate-200">
                                    {project.title}
                                </h4>
                                <div className="bg-[#020617] border border-[#1E293B] shadow-lg rounded-xl p-6 lg:-ml-12 lg:mr-0 z-20 text-slate-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-shadow duration-300">
                                    <p className="leading-relaxed font-sans">{project.description}</p>
                                    {project.dataset && (
                                        <p className="leading-relaxed font-sans text-slate-500 mt-2 text-sm italic">Dataset: {project.dataset}</p>
                                    )}
                                </div>
                                <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-slate-500 z-10">
                                    {project.tech.map((t, i) => (
                                        <li key={i}>{t}</li>
                                    ))}
                                </ul>
                                <div className="flex items-center gap-4 z-10">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-[#22D3EE] transition-colors"
                                    >
                                        <Github className="w-5 h-5" /> Code Repo
                                    </a>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
