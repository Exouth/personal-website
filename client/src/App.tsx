import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Hero from '@components/layout/Hero';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import AboutMe from '@components/profile/AboutMe';
import ProjectsSection from "@components/projects/ProjectsSection";
import ContactSection from '@components/contact/ContactSection';
import useScroll from '@hooks/useScroll';
import useWindowSize from '@hooks/useWindowSize';
import useResponsivePadding from '@hooks/useResponsivePadding';

export default function App() {
  useScroll();
  const windowSize = useWindowSize();
  const [isLoaded, setIsLoaded] = useState(false);
  const { sectionPadding, containerPadding } = useResponsivePadding();

  useEffect(() => {
    if (windowSize.isClient) {
      setIsLoaded(true);
    }
  }, [windowSize.isClient]);

  return (
    <>
      <Helmet>
        <title>Exouth.dev | Developer, Security Enthusiast, Game Modder</title>
        <meta name="description" content="Website of Exouth - Developer, Security Enthusiast, and Game Modder. Learn more about my projects." />
        <meta name="keywords" content="Developer, Programmer, Security, Cybersecurity, Reverse Engineering, Game Modding, Mods, Skyrim Mods, C++, C#, JavaScript, TypeScript, Portfolio" />
        <meta property="og:title" content="Exouth.dev" />
        <meta property="og:description" content="Website of Exouth - Developer, Security Enthusiast, and Game Modder. Learn more about my projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exouth.dev" />
        <meta property="og:image" content="https://exouth.dev/favicon.svg" />
        <html lang="en" />
      </Helmet>

      <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
        <Navbar />
        
        <main className="w-full" id="main-content">
          {isLoaded && <Hero />}
          
          <section 
            className={`${sectionPadding} bg-gray-900/30`}
            aria-label="Content area"
          >
            <div className={`container mx-auto ${containerPadding}`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <AboutMe />
                <ProjectsSection />
                <ContactSection />
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}