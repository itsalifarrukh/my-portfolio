"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Copy,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Send,
  HelpCircle,
  Star,
  Smile,
} from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

// Types
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SUBJECTS = [
  "General Inquiry",
  "Project Proposal",
  "Collaboration",
  "Feedback",
  "Other",
];

const FAQS = [
  { q: "How quickly do you respond?", a: "I usually reply within 24 hours." },
  {
    q: "Are you available for freelance work?",
    a: "Yes, I am open to freelance and contract opportunities.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "MERN stack, TypeScript, Next.js, and modern UI/UX.",
  },
];

const TESTIMONIALS = [
  {
    name: "Jane Doe",
    text: "Farrukh is a fantastic developer! Highly recommended.",
    icon: <Star className="text-yellow-400" />,
  },
  {
    name: "John Smith",
    text: "Great communication and top-notch code quality.",
    icon: <Smile className="text-emerald-400" />,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: SUBJECTS[0],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | {
    type: "success" | "error";
    message: string;
  }>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    try {
      const response = await axios.post("/api/contact", formData);
      const result = response.data;
      if (result.success) {
        setFormStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: SUBJECTS[0], message: "" });
      } else {
        setFormStatus({
          type: "error",
          message: result.error || "Failed to send message.",
        });
        toast.error(result.error || "Failed to send message.");
      }
    } catch (error) {
      console.error(error, "Error while sending message");
      setFormStatus({ type: "error", message: "Failed to send message." });
      toast.error("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (value: string, message: string) => {
    navigator.clipboard.writeText(value);
    toast(message);
  };

  return (
    <main className="relative min-h-[100vh] py-20 px-2 flex flex-col items-center justify-start overflow-x-hidden">
      {/* Vibrant background accent shapes */}
      <div className="absolute -z-10 left-1/2 top-0 -translate-x-1/2 w-[90vw] h-[90vw] max-w-5xl max-h-[60vh] opacity-30 blur-3xl rounded-full bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 animate-gradient-move" />
      <div className="absolute -z-10 right-0 bottom-0 w-80 h-80 bg-gradient-to-tr from-purple-600/40 via-blue-500/30 to-emerald-400/30 rounded-full blur-2xl animate-float" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center drop-shadow-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-clip-text mt-20 text-transparent bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 animate-gradient-move">
            Contact Me
          </span>
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
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
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-emerald-400/20 transition-all duration-300 p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-white font-sora bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
                  <Send className="w-6 h-6 animate-float" /> Send Me a Message
                </CardTitle>
                <p className="text-gray-300 text-sm">
                  Let&apos;s discuss your next project or just say hello!
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Name
                    </label>
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
                    <label className="text-sm font-medium text-gray-300">
                      Email
                    </label>
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
                    <label className="text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300 font-semibold rounded-md py-2 px-3"
                      required
                    >
                      {SUBJECTS.map((subject) => (
                        <option
                          key={subject}
                          value={subject}
                          className="text-black"
                        >
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300 min-h-[120px] resize-none font-semibold"
                      required
                    />
                  </div>
                  {formStatus && (
                    <div
                      className={`rounded-lg px-4 py-3 text-center font-semibold text-base mb-2 transition-all duration-300 ${
                        formStatus.type === "success"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 animate-float"
                          : "bg-red-500/20 text-red-300 border border-red-400/30 animate-blink"
                      }`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 px-6 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5 animate-float" />
                    {isSubmitting ? "Sending..." : "Send Message"}
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
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-blue-400/20 transition-all duration-300 p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-white font-sora bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 animate-float" /> Contact
                  Information
                </CardTitle>
                <p className="text-gray-300 text-sm">
                  Get in touch through any of these channels
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email */}
                <motion.div
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-emerald-500/20 border border-emerald-400/30">
                    <Mail className="h-5 w-5 text-emerald-400 animate-float" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 font-medium">
                      afarrukh302@gmail.com
                    </p>
                    <p className="text-gray-300 text-sm">Email Address</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      copyToClipboard(
                        "afarrukh302@gmail.com",
                        "Email address copied to clipboard."
                      )
                    }
                    className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10 font-semibold"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </motion.div>
                {/* Phone */}
                <motion.div
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-blue-500/20 border border-blue-400/30">
                    <Phone className="h-5 w-5 text-blue-400 animate-float" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 font-medium">
                      +92 346 822 4143
                    </p>
                    <p className="text-gray-300 text-sm">Phone Number</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      copyToClipboard(
                        "+92 346 822 4143",
                        "Phone number copied to clipboard."
                      )
                    }
                    className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 font-semibold"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </motion.div>
                {/* Location */}
                <motion.div
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-purple-500/20 border border-purple-400/30">
                    <MapPin className="h-5 w-5 text-purple-400 animate-float" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 font-medium">Pakistan, PK</p>
                    <p className="text-gray-300 text-sm">Location</p>
                  </div>
                </motion.div>
                {/* Socials */}
                <div className="pt-2">
                  <p className="text-gray-300 font-medium mb-4">
                    Follow me on social media
                  </p>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://github.com/itsalifarrukh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:text-white hover:bg-emerald-400/20 hover:border-emerald-400/30 transition-all duration-300 font-semibold"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Github className="h-5 w-5 animate-float" />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/itsalifarrukh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:text-white hover:bg-blue-400/20 hover:border-blue-400/30 transition-all duration-300 font-semibold"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Linkedin className="h-5 w-5 animate-float" />
                    </motion.a>
                    <motion.a
                      href="https://twitter.com/itsalifarrukh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:text-white hover:bg-purple-400/20 hover:border-purple-400/30 transition-all duration-300 font-semibold"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Twitter className="h-5 w-5 animate-float" />
                    </motion.a>
                  </div>
                </div>
                {/* Direct Chat Buttons */}
                <div className="pt-6">
                  <p className="text-gray-300 font-medium mb-4">Direct Chat</p>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://wa.me/923468224143"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-green-500/20 border border-green-400/30 text-green-400 hover:text-white hover:bg-green-500/40 hover:border-green-400/50 transition-all duration-300 font-semibold flex items-center gap-2"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {/* WhatsApp SVG */}
                      <svg
                        className="w-5 h-5 animate-float"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A12.07 12.07 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.69.97.99-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.92 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                      </svg>
                      <span className="hidden md:inline-block">WhatsApp</span>
                    </motion.a>
                    <motion.a
                      href="https://t.me/yourtelegramusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-blue-400/20 border border-blue-400/30 text-blue-400 hover:text-white hover:bg-blue-400/40 hover:border-blue-400/50 transition-all duration-300 font-semibold flex items-center gap-2"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {/* Telegram SVG */}
                      <svg
                        className="w-5 h-5 animate-float"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9.04 16.62l-.39 3.47c.56 0 .8-.24 1.09-.53l2.62-2.49 5.44 3.98c1 .55 1.72.26 1.97-.92l3.58-16.7c.32-1.48-.54-2.06-1.5-1.7L2.2 9.13c-1.45.56-1.43 1.36-.25 1.72l4.6 1.44 10.7-6.74c.5-.32.96-.14.58.18z" />
                      </svg>
                      <span className="hidden md:inline-block">Telegram</span>
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto mt-12 mb-16 w-full">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <motion.div
                key={faq.q}
                className="rounded-xl bg-white/10 border border-white/10 p-6 text-white shadow-lg backdrop-blur-xl hover:shadow-emerald-400/20 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <HelpCircle className="w-5 h-5 text-blue-400 animate-float" />
                  <span className="font-semibold text-lg">{faq.q}</span>
                </div>
                <p className="text-gray-200 text-base pl-8">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Testimonials / Why Contact Me Section */}
        <section className="max-w-3xl mx-auto mb-12 w-full">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Why Contact Me?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.name}
                className="rounded-xl bg-white/10 border border-white/10 p-6 text-white shadow-lg backdrop-blur-xl hover:shadow-blue-400/20 transition-all duration-300 flex flex-col items-start gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-2">
                  {t.icon}
                  <span className="font-semibold text-lg">{t.name}</span>
                </div>
                <p className="text-gray-200 text-base pl-8">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
