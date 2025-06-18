// src/components/Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
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

    const newErrors: typeof errors = {
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
          title: 'Message sent successfully!',
          description: "I'll get back to you soon. Thanks for reaching out!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: 'Error!',
          description: 'Something went wrong. Please try again later.',
        });
      }
    } catch (error) {
      toast({
        title: 'Submission failed',
        description: 'Network issue or something went wrong.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Contact Me</h2>
          <p className="text-lg text-slate-400">Let’s connect! Send me a message below.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm text-slate-300">Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-slate-800 text-white border-slate-600"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="text-sm text-slate-300">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-slate-800 text-white border-slate-600"
                placeholder="Your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-slate-300">Message</label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-slate-800 text-white border-slate-600"
                placeholder="Your message"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-800 rounded-2xl p-8 space-y-6 border border-slate-600"
          >
            <h3 className="text-2xl font-semibold text-white">Let’s Collaborate</h3>
            <p className="text-slate-400">Looking for a developer, collaborator, or just want to connect?</p>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/aravinthbalu15"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-300 hover:text-white"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/aravinth-kumar-858851281"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-300 hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
