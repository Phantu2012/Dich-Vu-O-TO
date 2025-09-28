import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Credibility from './components/Credibility';
import CtaForm from './components/CtaForm';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-slate-300">
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Credibility />
        <CtaForm />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;