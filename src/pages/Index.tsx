import About from "@/components/site/About";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/Hero";
import Loader from "@/components/site/Loader";
import Marquee from "@/components/site/Marquee";
import Navbar from "@/components/site/Navbar";
import Portfolio from "@/components/site/Portfolio";
import SectionReveal from "@/components/site/SectionReveal";
import Services from "@/components/site/Services";
import Testimonials from "@/components/site/Testimonials";
import WhyUs from "@/components/site/WhyUs";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4, ease: "easeInOut" }}
      >
        <Hero />
        <Marquee text="Branding · Digital · Social · Web · SEO" />
        <SectionReveal><About /></SectionReveal>
        <SectionReveal><Services /></SectionReveal>
        <Marquee text="Selected Work — 2019 / 2026" invert />
        <SectionReveal><Portfolio /></SectionReveal>
        <SectionReveal><WhyUs /></SectionReveal>
        <SectionReveal><Testimonials /></SectionReveal>
        <Marquee text="Let's make something quietly remarkable" />
        <SectionReveal><Contact /></SectionReveal>
      </motion.main>
      <Footer />
    </>
  );
};

export default Index;
