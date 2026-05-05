import About from "@/components/site/About";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/Hero";
import Loader from "@/components/site/Loader";
import Navbar from "@/components/site/Navbar";
import Portfolio from "@/components/site/Portfolio";
import Services from "@/components/site/Services";
import Testimonials from "@/components/site/Testimonials";
import WhyUs from "@/components/site/WhyUs";

const Index = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
