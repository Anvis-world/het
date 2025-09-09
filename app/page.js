'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import AnimatedBackground from './components/Background'
import Home from './components/Home' 
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import WelcomeScreen from './components/WelcomeScreen'

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portfolio />
          <Contact />
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center dark:border-gray-600" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                © 2025{" "}
                <a href="#" className="hover:underline">
                  Portfolio™
                </a>
                . All Rights Reserved.
              </span>
            </center>
          </footer>
        </>
      )}
    </>
  )
}