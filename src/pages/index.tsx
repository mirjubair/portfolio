import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Additional from "@/components/Additional";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mir Jubair Ul Rehman — Portfolio</title>
        <meta name="description" content="Portfolio of Mir Jubair Ul Rehman" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100">
        <Navbar />
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="additional"><Additional /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </main>
    </>
  );
}
