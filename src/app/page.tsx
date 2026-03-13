import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Certificates from "@/components/Certificates";
import GithubSection from "@/components/GithubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="flex flex-col items-center w-full">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Publications />
            <Skills />
            <Leadership />
            <Certificates />
            <GithubSection />
            <Contact />
            <Footer />
        </main>
    );
}
