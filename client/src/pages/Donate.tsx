import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import useResponsivePadding from "@hooks/useResponsivePadding";
import { getPageMetadata } from "@data/seo";
import { DonationOptions } from "@components/donate/DonationOptions";
import { PGPKeyDisplay } from "@components/donate/PGPKeyDisplay";
import { CryptoAddressDisplay } from "@components/donate/CryptoAddressDisplay";
import { AnimatedGradientText } from "@ui/magicui/animated-gradient-text";

const Donate = () => {
  const { sectionPadding, containerPadding } = useResponsivePadding();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showPgpKey, setShowPgpKey] = useState(false);
  const [isFirstSelection, setIsFirstSelection] = useState(true);
  const selectedRef = useRef<HTMLDivElement | null>(null);

  const seoMetadata = getPageMetadata({
    description:
      "Support my projects through cryptocurrency donations or Ko-fi. Your contribution helps keep development going!",
  });

  useEffect(() => {
    if (selectedOption && selectedRef.current && isFirstSelection) {
      setTimeout(() => {
        const yOffset = -20;
        const element = selectedRef.current;
        if (element) {
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
          setIsFirstSelection(false);
        }
      }, 100);
    }
  }, [selectedOption, isFirstSelection]);

  return (
    <>
      <Helmet>
        <title>{seoMetadata.title}</title>
        {seoMetadata.meta.map((meta, index) => (
          <meta key={`meta-${index}`} {...meta} />
        ))}
        <html {...seoMetadata.htmlAttributes} />
      </Helmet>

      <main className="w-full flex-grow flex flex-col pt-16" id="donate-page">
        <section
          className={`${sectionPadding} bg-gray-900/30 flex-grow relative overflow-hidden`}
          aria-label="Donation options"
        >
          <div className="absolute inset-0 w-full h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 will-change-opacity contain-strict"
              aria-hidden="true"
            />

            <div
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] will-change-auto"
              aria-hidden="true"
            />
          </div>

          <div
            className={`container mx-auto ${containerPadding} h-full max-w-6xl relative z-10`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <AnimatedGradientText
                  speed={1.5}
                  colorFrom="#818cf8"
                  colorTo="#c084fc"
                  className="text-4xl md:text-5xl font-bold"
                >
                  Support My Work
                </AnimatedGradientText>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Thank you for stopping by! If my work has helped or inspired
                you, even a small donation would mean the world to me. There is
                absolutely no need to donate, but if you really enjoyed my tools
                or mods, I would be incredibly grateful for your support. Your
                contribution helps me spend more time building things and
                bringing new ideas to life.
              </p>
              <p className="text-lg text-gray-300 mt-2">
                Thank you very much :)
              </p>
            </motion.div>

            <DonationOptions
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />

            <PGPKeyDisplay
              showPgpKey={showPgpKey}
              setShowPgpKey={setShowPgpKey}
            />

            <div ref={selectedRef}>
              <AnimatePresence mode="wait">
                {selectedOption && (
                  <CryptoAddressDisplay selectedOption={selectedOption} />
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Donate;
