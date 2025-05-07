import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiKofi, SiNexusmods } from 'react-icons/si';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAnimation from '@hooks/useAnimation';
import useScroll from '@hooks/useScroll';
import useNavigation from '@hooks/useNavigation';
import { footerLinks, socialLinksInfo } from '@data/navigation';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { fadeInUp, hoverScale } = useAnimation();
  const { scrollToSection } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const { handleNavClick } = useNavigation({
    scrollToSection,
    navigate,
    isHomePage,
  });

  const socialLinks = [
    {
      ...socialLinksInfo[0], // GitHub
      icon: <FaGithub size={22} />,
    },
    {
      ...socialLinksInfo[1], // Nexus Mods
      icon: <SiNexusmods size={22} />,
    },
    {
      ...socialLinksInfo[2], // Ko-fi
      icon: <SiKofi size={22} />,
    },
  ];

  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div {...fadeInUp(0)} className="mb-6 md:mb-0">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Exouth.dev
            </span>
          </motion.div>

          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 md:mb-0"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                {...hoverScale(1.1)}
                className="text-gray-400 hover:text-white transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full"
                aria-label={social.ariaLabel}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {currentYear} Exouth. All rights reserved.</p>

          <div className="mt-4 flex justify-center">
            <Link
              to="/legal-notice"
              className="text-gray-500 hover:text-gray-300 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1"
            >
              Legal Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
