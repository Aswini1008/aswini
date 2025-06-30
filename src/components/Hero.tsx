import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, User } from 'lucide-react';
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Interactive Black Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-zinc-900/80 to-gray-950" />

      {/* Floating Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-pink-400/40 rounded-full blur-[1px]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-center max-w-4xl mt-[60px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-sm">
            Hi, I'm <span className="text-pink-500">Aswini</span>
          </h1>

          <div className="text-2xl md:text-3xl text-pink-100 h-16 mb-4 flex justify-center items-center">
            <span className="mr-2">I’m a</span>
            <span className="text-pink-300 min-w-[220px] font-semibold text-left">
              {currentText}
              <span className="animate-blink">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-pink-200 leading-relaxed mb-10 max-w-2xl mx-auto">
            Passionate developer crafting seamless web experiences using React, Java, and the latest technologies. Always building, always improving.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Resume Button */}
          <a
            href="/Aswini_Resume.pdf"
            download
            className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-4 text-lg shadow-lg rounded-lg transition-all text-center font-semibold"
          >
            Download Resume
          </a>

          {/* About Me Button */}
          <Button
            size="lg"
            className="bg-white border-2 border-pink-500 text-pink-600 hover:bg-pink-100 px-8 py-4 text-lg flex items-center gap-2 transition-all shadow-md font-semibold"
          >
            <User className="w-5 h-5" />
            <a href="#about">About Me</a>
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
            className="inline-flex flex-col items-center text-pink-200 hover:text-white transition-colors"
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
