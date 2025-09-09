'use client'

import React from 'react';
import { Github, Linkedin, Mail, Instagram, Twitter } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      color: 'hover:text-gray-900 hover:bg-gray-100'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'hover:text-blue-600 hover:bg-blue-50'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'hover:text-blue-400 hover:bg-blue-50'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      color: 'hover:text-pink-600 hover:bg-pink-50'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contact@example.com',
      color: 'hover:text-red-600 hover:bg-red-50'
    }
  ];

  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-black/10 text-gray-400 dark:text-gray-400 light:text-gray-600 transition-all duration-300 hover:scale-110 hover:border-purple-500/50 ${social.color}`}
            aria-label={social.name}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <IconComponent className="w-5 h-5 relative z-10 group-hover:text-white dark:group-hover:text-white light:group-hover:text-gray-900 transition-colors duration-300" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;