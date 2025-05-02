import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import useAnimation from "@hooks/useAnimation";
import useResponsivePadding from "@hooks/useResponsivePadding";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaInfoCircle, FaCopyright, FaExternalLinkAlt, FaUserShield } from "react-icons/fa";
import { getPageMetadata } from "@data/seo";

const LegalNotice = () => {
  const { fadeInUp } = useAnimation();
  const { sectionPadding, containerPadding } = useResponsivePadding();
  const navigate = useNavigate();
  
  const seoMetadata = getPageMetadata({
    description: "Legal information for Exouth.dev",
    noindex: true
  });

  const handleContactClick = () => {
    sessionStorage.setItem('scrollTarget', 'contact');
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>{seoMetadata.title}</title>
        {seoMetadata.meta.map((meta, index) => (
          <meta key={`meta-${index}`} {...meta} />
        ))}
        <html {...seoMetadata.htmlAttributes} />
      </Helmet>

      <main className="w-full flex-grow flex flex-col pt-24">
        <section 
          className={`${sectionPadding} bg-gray-900/30 flex-grow`}
          aria-label="Legal Notice"
        >
          <div className={`container mx-auto ${containerPadding} h-full`}>
            <motion.div
              {...fadeInUp(0.1)}
              className="max-w-4xl mx-auto h-full flex flex-col"
            >
              <h1 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-4">Legal Notice</h1>
              
              <div className="space-y-8 flex-grow">
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
                    <FaInfoCircle className="mr-2" />
                    Information according to § 5 DDG
                  </h2>
                  <p className="mb-3">Marcel Dalinger</p>
                  <p className="mb-3">c/o IP-Management #5200</p>
                  <p className="mb-3">Ludwig-Erhard-Str. 18</p>
                  <p className="mb-3">20459 Hamburg</p>
                  <p className="mb-3">Germany</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
                    <FaUserShield className="mr-2" />
                    Responsible for content according to § 18 Sec. 2 MStV
                  </h2>
                  <p className="mb-3">Marcel Dalinger</p>
                  <p className="mb-3">c/o IP-Management #5200</p>
                  <p className="mb-3">Ludwig-Erhard-Str. 18</p>
                  <p className="mb-3">20459 Hamburg</p>
                  <p className="mb-3">Germany</p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <h2 className="text-xl font-semibold text-blue-400 flex items-center">
                      <FaEnvelope className="mr-2" />
                      Contact Information
                    </h2>
                    <button 
                      onClick={handleContactClick}
                      className="ml-3 text-gray-400 hover:text-blue-400 transition-colors focus:outline-none flex items-center bg-gray-800/50 rounded-full px-3 py-1 text-xs"
                      aria-label="Go to contact form"
                    >
                      <FaEnvelope className="mr-1" size={12} />
                      <span>Contacts</span>
                    </button>
                  </div>
                  <p className="mb-3">Email: Exouth@email.de</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
                    <FaCopyright className="mr-2" />
                    Copyright
                  </h2>
                  <p className="mb-3">
                    The content and works on these pages created by the site operator are subject to German copyright law. 
                    Duplication, processing, distribution, and any form of commercialization of such material beyond the scope of the copyright law 
                    shall require the prior written consent of its respective author or creator.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
                    <FaExternalLinkAlt className="mr-2" />
                    External Links
                  </h2>
                  <p className="mb-3">
                    This website contains links to external websites. As the contents of these websites are not under our control, 
                    we cannot assume any liability for such external content. The respective provider or operator of the linked pages 
                    is always responsible for the content of the linked pages.
                  </p>
                </div>
                
                <div className="mt-auto pt-8 border-t border-gray-800 text-center text-gray-500">
                  <p>Last updated: 02.05.2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LegalNotice; 