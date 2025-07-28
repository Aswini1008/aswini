import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = useMemo(() => [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].href) as HTMLElement | null;
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-800/100 backdrop-blur-md shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6 sm:px-10">
        {/* Logo */}
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="text-2xl font-bold gradient-text cursor-pointer"
        >
          Aswini<span className="text-pink-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-slate-300 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href.substring(1)}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className={`transition-colors hover:text-pink-400 ${
                activeSection === link.href.substring(1)
                  ? 'text-pink-400 font-semibold'
                  : ''
              } cursor-pointer`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900 border-t border-slate-700"
          >
            <div className="flex flex-col items-center py-4 space-y-4 text-slate-300">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href.substring(1)}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-100}
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-pink-400 transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-pink-400 font-semibold'
                      : ''
                  } cursor-pointer`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
