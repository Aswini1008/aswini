import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const texts = ['Web Developer', 'Java Developer', 'Problem Solver'];

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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white px-4 md:px-0 relative"
    >
      <div className="max-w-6xl w-full text-center z-10 py-20 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          Hi, I'm <span className="text-pink-500">Aswini</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-2xl md:text-3xl text-pink-300"
        >
          <span>I’m a </span>
          <span className="font-semibold">{currentText}</span>
          <span className="animate-blink ml-1">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
        >
          Full-stack developer with a knack for building scalable, efficient, and user-friendly web applications using React, Java, and modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/Aswini_Resume.pdf"
            download
            className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md"
          >
            Download Resume
          </a>

          <Button
            size="lg"
            className="bg-white text-pink-600 border-2 border-pink-500 hover:bg-pink-100 px-6 py-3 text-lg font-medium"
          >
            <User className="w-5 h-5 mr-2" />
            <a href="#about">About Me</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="mt-16"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center text-pink-300 hover:text-white"
          >
            <span className="text-sm mb-1">Scroll to explore</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-pink-500/10 rounded-full w-[400px] h-[400px] blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 transform bg-purple-600/10 rounded-full w-[300px] h-[300px] blur-2xl" />
      </div>
    </section>
  );
};

export default Hero;
