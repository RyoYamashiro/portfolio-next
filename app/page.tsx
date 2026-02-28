import type { Metadata } from "next";
import ja from "./locales/ja.json";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: ja.meta.title,
  description: ja.meta.description,
};

export default function Home() {
  return (
    <>
      <Header t={ja} locale="ja" />
      <main>
        <Hero t={ja} />
        <About t={ja} />
        <Works t={ja} />
        <Testimonials t={ja} />
        <Contact t={ja} />
      </main>
      <Footer t={ja} />
    </>
  );
}
