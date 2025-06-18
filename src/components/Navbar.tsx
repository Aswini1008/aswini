import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll handling
  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;

    setScrolled(currentScroll > 50);
    setShowNavbar(currentScroll < lastScrollY || currentScroll < 100);
    setLastScrollY(currentScroll);

    // Scroll spy logic
    const sections = navItems.map(item => document.querySelector(item.href));
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(navItems[i].href.slice(1)); // remove #
          break;
        }
      }
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent tracking-wide"
        >
         Aravinth 
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`relative text-sm sm:text-base font-medium transition-all group ${
                activeSection === item.href.slice(1)
                  ? 'text-purple-400'
                  : 'text-slate-300 hover:text-purple-400'
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-purple-400 transition-all duration-300 ${
                  activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden text-slate-300 hover:text-white transition"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-4/5 max-w-xs h-full bg-slate-900/95 backdrop-blur-lg p-6 z-50 md:hidden"
          >
            <div className="flex flex-col space-y-6 mt-16">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'text-purple-400'
                      : 'text-slate-200 hover:text-purple-400'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
