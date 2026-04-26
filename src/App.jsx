import { useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatSetsUs from './components/WhatSetsUs';
import Portfolio from './components/Portfolio';
import SuccessStories from './components/SuccessStories';
import Services from './components/Services';
import CommunicationModel from './components/CommunicationModel';
import Process from './components/Process';
import MediaAnalytics from './components/MediaAnalytics';
import FilmEntertainment from './components/FilmEntertainment';
import Clients from './components/Clients';
import Director from './components/Director';
import CTA from './components/CTA';
import Footer from './components/Footer';

import './App.css';

export default function App() {
  useScrollReveal();

  // Cursor glow effect (desktop only)
  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    if (!isFine) return;

    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', move, { passive: true });
    return () => {
      document.removeEventListener('mousemove', move);
      if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatSetsUs />
        <Portfolio />
        <SuccessStories />
        <Services />
        <CommunicationModel />
        <Process />
        <MediaAnalytics />
        <FilmEntertainment />
        <Clients />
        <Director />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
