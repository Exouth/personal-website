import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { AnimatedGradientText } from '@ui/magicui/animated-gradient-text';
import useAnimation from '@hooks/useAnimation';
import useScroll from '@hooks/useScroll';
import useWindowSize from '@hooks/useWindowSize';
import { useMemo } from 'react';

export default function Hero() {
  const { scrollToSection } = useScroll();
  const { fadeInUp, pulse, hoverScaleOnly } = useAnimation();
  const windowSize = useWindowSize();

  const titleSize = useMemo(() => {
    const sizeMap = {
      xs: 'text-5xl',
      sm: 'text-6xl',
      md: 'text-7xl',
      lg: 'text-8xl',
      xl: 'text-8xl',
      '2xl': 'text-8xl',
    };

    return sizeMap[windowSize.breakpoint];
  }, [windowSize.breakpoint]);

  const subtitleSize = useMemo(() => {
    const sizeMap = {
      xs: 'text-xl',
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-3xl',
      xl: 'text-3xl',
      '2xl': 'text-3xl',
    };

    return sizeMap[windowSize.breakpoint];
  }, [windowSize.breakpoint]);

  const descriptionSize = useMemo(() => {
    const sizeMap = {
      xs: 'text-lg max-w-xl',
      sm: 'text-lg max-w-xl',
      md: 'text-xl max-w-2xl',
      lg: 'text-2xl max-w-3xl',
      xl: 'text-2xl max-w-3xl',
      '2xl': 'text-2xl max-w-3xl',
    };

    return sizeMap[windowSize.breakpoint];
  }, [windowSize.breakpoint]);

  const buttonPadding = useMemo(() => {
    return windowSize.breakpoint === 'xs' || windowSize.breakpoint === 'sm' ? 'px-6' : 'px-8';
  }, [windowSize.breakpoint]);

  const showScrollIndicator = windowSize.height > 700;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      aria-label="Home"
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

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div {...fadeInUp(0)} className="mb-6">
          <h1 className="font-bold mb-4">
            <AnimatedGradientText
              speed={1.5}
              colorFrom="#818cf8"
              colorTo="#c084fc"
              className={`${titleSize} font-bold`}
            >
              Exouth.dev
            </AnimatedGradientText>
          </h1>
          <p className={`${subtitleSize} text-gray-300 font-light`}>
            Developer · Security Enthusiast · Game Modder
          </p>
        </motion.div>

        <motion.p {...fadeInUp(0.2)} className={`${descriptionSize} text-gray-300 mb-12 mx-auto`}>
          Im a developer passionate about security, game modding and building useful things. From
          low-level tools to modern web experiences.
        </motion.p>

        <motion.div {...fadeInUp(0.4)} className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            {...hoverScaleOnly()}
            className={`${buttonPadding} py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 rounded-xl text-lg font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            aria-label="Jump to my projects"
          >
            My Projects
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            {...hoverScaleOnly()}
            className={`${buttonPadding} py-3.5 bg-gray-800/60 backdrop-blur-sm border border-gray-700/60 rounded-xl text-lg font-medium hover:bg-gray-700/60 hover:border-indigo-900/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
            aria-label="Jump to contact section"
          >
            Contact
          </motion.a>
        </motion.div>
      </div>

      {showScrollIndicator && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full p-2"
          onClick={() => scrollToSection('about-me')}
          aria-label="Scroll down to About Me section"
        >
          <motion.div
            {...pulse()}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <FaArrowDown className="text-indigo-400" aria-hidden="true" />
          </motion.div>
        </motion.button>
      )}
    </section>
  );
}
