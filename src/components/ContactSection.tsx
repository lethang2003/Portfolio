"use client";

import React, { useState } from 'react';
import GlitchText from "@/components/GlitchText";
import SpotlightCard from "@/components/SpotlightCard";
import { Phone, Mail, MapPin, Github, Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import BlurText from './BlurText';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage(result.message || 'Email đã được gửi thành công!');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || 'Có lỗi xảy ra khi gửi email.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Không thể kết nối đến server. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "0343.690.062",
      href: "tel:0343690062",
      color: "text-green-400"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "hntn3221@gmail.com",
      href: "mailto:hntn3221@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "lethang2003",
      href: "https://github.com/lethang2003",
      color: "text-purple-400"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "553 alley, 30/4 street, Ninh Kieu district, Cantho city",
      href: "https://maps.google.com/?q=553+alley+30/4+street+Ninh+Kieu+district+Cantho+city",
      color: "text-red-400"
    }
  ];

  return (
    <section className="relative py-20 px-4 max-w-7xl mx-auto">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none delay-1000"></div>

      {/* Header */}
      <div className="relative flex flex-col justify-center items-center z-10 text-center mb-20">
        <BlurText
          text="Contact Me"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-5xl md:text-6xl font-bold mb-6 text-center tracking-tight"
        />
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Let&apos;s collaborate and create something amazing together. I&apos;m always excited to work on new projects and challenges.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              Contact Information
            </h3>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <SpotlightCard
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:scale-105"
                spotlightColor="rgba(147, 51, 234, 0.1)"
              >
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-6 text-left"
                >
                  <div className={`${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-gray-200 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </a>
              </SpotlightCard>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50">
            <h4 className="text-xl font-semibold text-white mb-4">Available for</h4>
            <div className="flex flex-wrap gap-3">
              {['Full-time', 'Part-time', 'Freelance', 'Contract'].map((type) => (
                <span
                  key={type}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-200"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative">
          <SpotlightCard
            className="p-8 mt-[83px]"
            spotlightColor="rgba(59, 130, 246, 0.1)"
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Send size={28} className="text-blue-400" />
              Send Message
            </h3>

            {/* Status Message */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                submitStatus === 'success' 
                  ? 'bg-green-500/20 border border-green-500/30 text-green-200' 
                  : 'bg-red-500/20 border border-red-500/30 text-red-200'
              }`}>
                {submitStatus === 'success' ? (
                  <CheckCircle size={20} className="text-green-400" />
                ) : (
                  <AlertCircle size={20} className="text-red-400" />
                )}
                <span className="text-sm font-medium">{statusMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={20} className="text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={20} className="text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Your Email"
                />
              </div>

              {/* Subject Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MessageSquare size={20} className="text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Subject"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  placeholder="Your Message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </SpotlightCard>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-bounce delay-1000"></div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-3 text-gray-400">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <span className="text-sm font-medium">Let&apos;s build something great together</span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;