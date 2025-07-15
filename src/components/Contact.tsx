"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Copy, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { toast } from "sonner"

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      toast('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const copyToClipboard = (value: string, message: string) => {
    navigator.clipboard.writeText(value);
    toast(message);
  };

  return (
    <section
      id="contact"
      className="w-full py-16 min-h-[70vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Vibrant blurred background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-3xl max-h-3xl opacity-20 blur-3xl rounded-full z-0" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center relative drop-shadow-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 animate-gradient-move">
            Get In Touch
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-emerald-400/20 transition-all duration-300 p-6">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-white font-sora bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Send Me a Message
                </CardTitle>
                <p className="text-gray-300 text-sm">Let&apos;s discuss your next project or just say hello!</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:ring-emerald-400/20 transition-all duration-300 font-semibold"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-300 font-semibold"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300 min-h-[120px] resize-none font-semibold"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 px-6"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-blue-400/20 transition-all duration-300 p-6">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-white font-sora bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Contact Information
                </CardTitle>
                <p className="text-gray-300 text-sm">Get in touch through any of these channels</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-emerald-500/20 border border-emerald-400/30">
                    <Mail className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 font-medium">afarrukh302@gmail.com</p>
                    <p className="text-gray-300 text-sm">Email Address</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard('afarrukh302@gmail.com', 'Email address copied to clipboard.')}
                    className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10 font-semibold"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-blue-500/20 border border-blue-400/30">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 font-medium">+92 346 822 4143</p>
                    <p className="text-gray-300 text-sm">Phone Number</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard('+92 346 822 4143', 'Phone number copied to clipboard.')}
                    className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 font-semibold"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-purple-500/20 border border-purple-400/30">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 font-medium">Pakistan, PK</p>
                    <p className="text-gray-300 text-sm">Location</p>
                  </div>
                </motion.div>

                <div className="pt-2">
                  <p className="text-gray-300 font-medium mb-4">Follow me on social media</p>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:text-white hover:bg-emerald-400/20 hover:border-emerald-400/30 transition-all duration-300 font-semibold"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                    <motion.a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:text-white hover:bg-blue-400/20 hover:border-blue-400/30 transition-all duration-300 font-semibold"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                    <motion.a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:text-white hover:bg-purple-400/20 hover:border-purple-400/30 transition-all duration-300 font-semibold"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Twitter className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;