import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { FaChevronDown, FaTimes, FaBars } from "react-icons/fa";
import { AnimatedGradientText } from "@ui/magicui/animated-gradient-text";
import useAnimation from "@hooks/useAnimation";
import useScroll from "@hooks/useScroll";
import useWindowSize from "@hooks/useWindowSize";
import { navigationLinks } from "@data/navigation";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { hoverScale, hoverScaleOnly } = useAnimation();
  const { scrollToSection } = useScroll();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.breakpoint !== 'xs' && windowSize.breakpoint !== 'sm' && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [windowSize.breakpoint, mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    const targetId = href.startsWith('#') ? href.substring(1) : href;
    scrollToSection(targetId);
  }, [mobileMenuOpen, scrollToSection]);

  const isMobile = windowSize.breakpoint === 'xs' || windowSize.breakpoint === 'sm';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-2 shadow-xl" : "bg-black/70 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            {...hoverScaleOnly()}
            className="text-2xl font-bold text-white"
          >
            <AnimatedGradientText
              speed={1}
              colorFrom="#3b82f6"
              colorTo="#ec4899"
            >
              Exouth.dev
            </AnimatedGradientText>
          </motion.a>

          {!isMobile && (
            <div className="flex space-x-8">
              {navigationLinks.map((item) =>
                item.dropdown ? (
                  <motion.div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <motion.a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      {...hoverScale()}
                      className="text-gray-300 hover:text-white transition-colors flex items-center"
                    >
                      {item.name}
                      <motion.span
                        animate={{ rotate: showDropdown ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-1"
                      >
                        <FaChevronDown size={14} />
                      </motion.span>
                    </motion.a>

                    <AnimatePresence>
                      {showDropdown && (
                        <motion.div
                          key="dropdown"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-gray-900 border border-gray-800 text-white rounded-lg shadow-lg origin-top min-w-max"
                        >
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-gray-900"></div>
                          <ul className="py-2 text-center">
                            {item.dropdown.map((dropdown) => (
                              <li key={dropdown.name}>
                                <a
                                  href={dropdown.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(dropdown.href);
                                  }}
                                  className="block px-6 py-3 hover:bg-gray-800 transition-colors duration-200 rounded-md whitespace-nowrap"
                                >
                                  {dropdown.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    {...hoverScale()}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </motion.a>
                )
              )}
            </div>
          )}

          {isMobile && (
            <motion.button
              className="text-white"
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Menu close" : "Menu open"}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gray-900 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navigationLinks.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className="text-gray-200 hover:text-white block py-2 text-lg"
                    >
                      {item.name}
                    </a>
                    {item.dropdown && (
                      <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-700">
                        {item.dropdown.map((dropdown) => (
                          <a
                            key={dropdown.name}
                            href={dropdown.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(dropdown.href);
                            }}
                            className="text-gray-400 hover:text-white block py-2"
                          >
                            {dropdown.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
