import type { Metadata } from "next";
import en from "../locales/en.json";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Works from "../components/Works";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
};

export default function EnHome() {
  return (
    <>
      <Header t={en} locale="en" />
      <main>
        <Hero t={en} />
        <About t={en} />
        <Works t={en} />
        <Testimonials t={en} />
        <Contact t={en} />
      </main>
      <Footer t={en} />
    </>
  );
}
