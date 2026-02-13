import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SocialResponsibility from "@/components/SocialResponsibility";
import LinksSection from "@/components/LinksSection";
import Environment from "@/components/Environment";
import Publications from "@/components/Publications";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <SocialResponsibility />
      <LinksSection />
      <Environment />
      <Publications />
      <BlogSection />
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
