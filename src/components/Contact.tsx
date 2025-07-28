import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const newErrors = {
      name: name ? '' : 'Name is required',
      email: email ? (isValidEmail(email) ? '' : 'Enter a valid email') : 'Email is required',
      message: message ? '' : 'Message is required',
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some((err) => err !== '')) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://getform.io/f/allzgora', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast({
          title: '✅ Message sent!',
          description: "I'll get back to you soon. Thanks for reaching out!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({ title: '❌ Error!', description: 'Something went wrong. Try again later.' });
      }
    } catch (error) {
      toast({ title: '❌ Submission failed', description: 'Network issue or server error.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="py-20 bg-slate-900/60 backdrop-blur-md">
      <div className="section-container max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Get in Touch</h2>
          <p className="text-lg text-slate-400">Have an idea or opportunity? Let’s talk.</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label htmlFor="name" className="text-sm text-slate-300">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-slate-800 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label htmlFor="email" className="text-sm text-slate-300">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="bg-slate-800 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label htmlFor="message" className="text-sm text-slate-300">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="bg-slate-800 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white text-lg py-3 transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            className="lg:col-span-5 p-8 bg-slate-800 rounded-xl shadow-xl border border-slate-700 space-y-6"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white">Let’s Collaborate</h3>
            <p className="text-slate-400">
              I’m Aswini, a full-stack developer passionate about design and backend logic.
              Always open to freelance, collaborations, or tech convos!
            </p>
            <div className="space-y-4">
              <a href="mailto:smaswini006@gmail.com" className="text-pink-400 hover:underline block">
                smaswini006@gmail.com
              </a>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Aswini1008"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-slate-700 p-2 rounded-md hover:bg-pink-600/20 transition"
                >
                  <Github className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/aswini-sm-97292629a"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-slate-700 p-2 rounded-md hover:bg-pink-600/20 transition"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
