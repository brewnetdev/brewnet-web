import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import InstallationManual from "@/components/InstallationManual";
// import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <PainPoints />
      <Features />
      <HowItWorks />
      <Services />
      <InstallationManual />
      {/* <Pricing /> */}
      <FAQ />
      <Contact />
      <Newsletter />
      <FinalCTA />
      <Footer />
    </>
  );
}
