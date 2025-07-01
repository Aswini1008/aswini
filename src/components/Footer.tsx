import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Aswini</h3>
            <p className="text-slate-400">
              Passionate full-stack developer focused on crafting clean UI and scalable backend solutions. Let's build something great!
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-slate-200">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-pink-400 transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-slate-200">Let's Connect</h4>
            <p className="text-slate-400 mb-2">
              Open to internships, collabs, and freelance work.
            </p>
            <a
              href="mailto:smaswini006@gmail.com"
              className="text-pink-400 hover:underline block mb-4"
            >
              smaswini006@gmail.com
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/aravinthbalu15"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-lg hover:bg-pink-600/20 transition"
              >
                <Github className="w-5 h-5 text-slate-300 hover:text-pink-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/aravinth-kumar-858851281"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-lg hover:bg-pink-600/20 transition"
              >
                <Linkedin className="w-5 h-5 text-slate-300 hover:text-pink-400" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-slate-800 pt-6 gap-4">
          <p className="text-sm text-slate-400 text-center sm:text-left">
            © 2025 Aswini. Designed & built with 💖 using React + Tailwind CSS.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 text-sm text-pink-400 border border-pink-500 rounded-md hover:bg-pink-600/10 transition"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
