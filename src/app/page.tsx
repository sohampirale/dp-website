import Header from "./components/header";
import HeroSection from "./components/home/hero-section";
import ServicesSection from "./components/home/services";
import OurClientComponents from "./components/home/our-clients";
import TestimonialsSection from "./components/home/testimonials";
import ContactInfoComponent from "./components/home/contact-info";
import FooterComponent from "./components/footer";
// import Image from "next/image";

export default function Home() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    {
      label: "Get Started",
      href: "#contact",
      type: "primary" as const,
    },
  ];
  return (
    <>
      <Header navItems={navItems} />
      <HeroSection />
      <ServicesSection/>
      <OurClientComponents/>
      <TestimonialsSection/>
      <ContactInfoComponent/>
      <FooterComponent />
    </>
  );
}
