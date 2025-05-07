import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import Hero from '@components/layout/Hero';
import AboutMe from '@components/profile/AboutMe';
import ProjectsSection from '@components/projects/ProjectsSection';
import ContactSection from '@components/contact/ContactSection';
import useScroll from '@hooks/useScroll';
import useWindowSize from '@hooks/useWindowSize';
import useResponsivePadding from '@hooks/useResponsivePadding';
import { getPageMetadata } from '@data/seo';

const Home = () => {
  useScroll();
  const windowSize = useWindowSize();
  const [isLoaded, setIsLoaded] = useState(false);
  const { sectionPadding, containerPadding } = useResponsivePadding();
  const { scrollToSection } = useScroll();

  const seoMetadata = getPageMetadata();

  useEffect(() => {
    if (windowSize.isClient) {
      setIsLoaded(true);
    }
  }, [windowSize.isClient]);

  useEffect(() => {
    if (isLoaded) {
      const scrollTarget = sessionStorage.getItem('scrollTarget');
      if (scrollTarget) {
        setTimeout(() => {
          scrollToSection(scrollTarget);
          sessionStorage.removeItem('scrollTarget');
        }, 100);
      }
    }
  }, [isLoaded, scrollToSection]);

  return (
    <>
      <Helmet>
        <title>{seoMetadata.title}</title>
        {seoMetadata.meta.map((meta, index) => (
          <meta key={`meta-${index}`} {...meta} />
        ))}
        <html {...seoMetadata.htmlAttributes} />
      </Helmet>

      <main className="w-full" id="main-content">
        {isLoaded && <Hero />}

        <section className={`${sectionPadding} relative`} aria-label="Content area">
          <div className="absolute inset-0 backdrop-blur-sm bg-gray-900/10 border-t border-gray-800/30"></div>

          <div className={`container mx-auto ${containerPadding} relative z-10`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <AboutMe />
              <ProjectsSection />
              <ContactSection />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
