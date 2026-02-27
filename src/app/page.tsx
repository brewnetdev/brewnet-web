import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import InstallationManual from "@/components/InstallationManual";
// import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Services />
      <InstallationManual />
      {/* <Pricing /> */}
      <Contact />
      <Footer />
    </>
  );
}
