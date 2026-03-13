"use client";

import { ScrollAnimation } from "./ScrollAnimation";
import { Microscope } from "lucide-react";

export default function Experience() {
    return (
        <section id="research" className="w-full py-24 bg-[#0F172A]/30 border-t border-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="mb-16">
                        <h2 className="text-sm font-mono text-[#22D3EE] uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-[#22D3EE]"></span> Journey
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-100">
                            Research & Experience
                        </h3>
                    </div>
                </ScrollAnimation>

                <div className="max-w-3xl space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#1E293B] before:to-transparent">

                    <ScrollAnimation delay={0.1} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#1E293B] bg-[#020617] group-hover:border-[#22D3EE] text-slate-500 group-hover:text-[#22D3EE] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-colors duration-300 z-10 mx-auto absolute left-0 md:left-1/2 -ml-5 md:ml-0">
                            <Microscope className="w-5 h-5" />
                        </div>
                        {/* Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-[#1E293B] bg-[#020617] shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-shadow duration-300 group-odd:mr-0 group-even:ml-auto md:group-odd:mr-auto ml-16 md:ml-0">
                            <time className="font-mono text-[#8B5CF6] text-sm mb-2 block">Present</time>
                            <h4 className="text-xl font-heading font-medium text-slate-200 mb-1">Research Intern</h4>
                            <p className="text-sm text-slate-400 mb-4 font-mono">SCAAI Pune</p>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Currently working on <strong>Adversarial Attacks in Computer Vision for Healthcare</strong>.
                            </p>
                            <ul className="text-sm text-slate-500 font-mono list-disc list-inside space-y-1">
                                <li>Studying adversarial vulnerabilities in medical imaging models</li>
                                <li>Designing experiments to test model robustness</li>
                                <li>Improving reliability of AI systems used in healthcare applications</li>
                            </ul>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.2} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mt-12 md:mt-0">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#1E293B] bg-[#020617] group-hover:border-[#22D3EE] text-slate-500 group-hover:text-[#22D3EE] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-colors duration-300 z-10 mx-auto absolute left-0 md:left-1/2 -ml-5 md:ml-0">
                            <Microscope className="w-5 h-5" />
                        </div>
                        {/* Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-[#1E293B] bg-[#020617] shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-shadow duration-300 group-odd:mr-0 group-even:ml-auto md:group-odd:mr-auto ml-16 md:ml-0">
                            <time className="font-mono text-[#22D3EE] text-sm mb-2 block">Completed (Summer)</time>
                            <h4 className="text-xl font-heading font-medium text-slate-200 mb-1">Machine Learning Intern</h4>
                            <p className="text-sm text-slate-400 mb-4 font-mono">AIQSS</p>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Worked on machine learning and deep learning projects using Python. Gained practical experience in model training, dataset preprocessing, and evaluation metrics.
                            </p>
                            <ul className="text-sm text-slate-500 font-mono list-disc list-inside space-y-1">
                                <li>Neural Networks</li>
                                <li>Dataset Preprocessing</li>
                                <li>Model Evaluation</li>
                            </ul>
                        </div>
                    </ScrollAnimation>


                </div>
            </div>
        </section>
    );
}
