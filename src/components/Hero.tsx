import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const texts = ["Web Developer", "Java Developer", "Problem Solver"];

  useEffect(() => {
    const typeEffect = () => {
      const fullText = texts[textIndex];

      if (isTyping) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 1500);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsTyping(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(typeEffect, isTyping ? 100 : 50);
    return () => clearTimeout(timer);
  }, [currentText, isTyping, textIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-center max-w-4xl mt-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Hi, I'm <span className="gradient-text">Aravinth Kumar</span>
          </h1>

          <div className="text-2xl md:text-3xl text-slate-300 h-16 mb-4 flex justify-center items-center">
            <span className="mr-2">I’m a</span>
            <span className="gradient-text min-w-[220px] text-left">
              {currentText}
              <span className="animate-blink">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Passionate developer with expertise in React, Java, and modern web technologies.
            I build clean, scalable, and user-friendly digital experiences.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Resume Download Button */}
          <a
            href="/Aravinth_Kumar_Resume.pdf"
            download
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg shadow-lg rounded-lg transition-all text-center"
          >
            Download Resume
          </a>

          {/* Contact Me Button */}
          <Button
            size="lg"
            className="bg-white border-2 border-purple-500 text-purple-600 hover:bg-purple-100 px-8 py-4 text-lg flex items-center gap-2 transition-all shadow-md"
          >
            <Mail className="w-5 h-5" />
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center text-slate-400 hover:text-purple-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
