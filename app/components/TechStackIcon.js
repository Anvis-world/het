'use client'

import React from 'react';
import Image from 'next/image';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group relative">
      <div className="flex flex-col items-center justify-center p-6 bg-white/5 dark:bg-white/5 light:bg-black/5 backdrop-blur-lg rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 transition-all duration-300 hover:scale-105 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 hover:border-purple-500/50">
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative w-12 h-12 flex items-center justify-center">
            <Image
              src={`/${TechStackIcon}`}
              alt={Language}
              width={48}
              height={48}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
        
        <h3 className="text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 text-center group-hover:text-white dark:group-hover:text-white light:group-hover:text-gray-900 transition-colors duration-300">
          {Language}
        </h3>
        
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default TechStackIcon;