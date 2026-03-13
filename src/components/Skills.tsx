"use client";

import { ScrollAnimation } from "./ScrollAnimation";

const skillCategories = [
    {
        title: "AI & Machine Learning",
        skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Neural Networks", "Image Processing"],
    },
    {
        title: "Programming",
        skills: ["Python", "C++", "SQL", "JavaScript"],
    },
    {
        title: "Frameworks",
        skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn"],
    },
    {
        title: "Tools",
        skills: ["GitHub", "Linux", "MongoDB", "Jupyter Notebook"],
    },
    {
        title: "Core Computer Science",
        skills: ["Operating Systems", "DBMS", "Algorithms", "Computer Networks"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="w-full py-24 bg-[#0F172A]/80 border-t border-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="mb-16">
                        <h2 className="text-sm font-mono text-[#22D3EE] uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-[#22D3EE]"></span> Technology Stack
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-100">
                            Skills & Expertise
                        </h3>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <ScrollAnimation key={index} delay={0.1 * index} className="h-full">
                            <div className="h-full p-6 bg-[#020617] border border-[#1E293B] rounded-xl shadow-lg hover:border-[#8B5CF6]/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300">
                                <h4 className="text-xl font-heading font-medium text-slate-200 mb-6 pb-2 border-b border-[#1E293B]">
                                    {category.title}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center px-3 py-1 bg-[#0F172A] border border-[#1E293B] text-slate-300 text-sm font-mono rounded-md hover:text-[#22D3EE] hover:border-[#22D3EE]/30 transition-all duration-200 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
