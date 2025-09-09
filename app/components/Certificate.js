'use client'

import React from 'react';
import Image from 'next/image';
import { Award, ExternalLink } from 'lucide-react';

const Certificate = ({ ImgSertif }) => {
  return (
    <div className="group relative">
      <div className="overflow-hidden rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 backdrop-blur-lg border border-white/10 dark:border-white/10 light:border-black/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <Image
            src={ImgSertif || "/Photo.png"}
            alt="Certificate"
            width={400}
            height={300}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium text-sm">Certificate</span>
              </div>
              
              <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default Certificate;