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

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
          title: 'Message sent successfully!',
          description: "I'll get back to you soon. Thanks for reaching out!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({ title: 'Error!', description: 'Something went wrong. Try again later.' });
      }
    } catch (error) {
      toast({ title: 'Submission failed', description: 'Network issue or server error.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="section-container max-w-5xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Contact Me</h2>
          <p className="text-lg text-slate-400">Let’s connect! Send me a message below.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {['name', 'email', 'message'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="text-sm text-slate-300 capitalize">{field}</label>
                {field !== 'message' ? (
                  <Input
                    id={field}
                    name={field}
                    type={field === 'email' ? 'email' : 'text'}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Your ${field}`}
                    className="bg-slate-800 text-white border-slate-600"
                  />
                ) : (
                  <Textarea
                    id={field}
                    name={field}
                    rows={5}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder="Your message"
                    className="bg-slate-800 text-white border-slate-600"
                  />
                )}
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-3"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-effect p-8 rounded-xl border border-slate-600 shadow-lg hover:shadow-pink-700/30 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">Let’s Collaborate</h3>
            <p className="text-slate-400">I'm Aswini – a passionate developer. Looking for exciting collaborations or just want to say hi?</p>

            <div className="space-y-4">
              <a
                href="https://github.com/Aswini1008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/aswini-sm-97292629a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition"
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
