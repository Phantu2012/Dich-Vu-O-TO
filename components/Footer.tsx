import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-white">Phan Anh Tú</h3>
        <p className="mb-6">Chuyên Gia Dịch Vụ Ô Tô Thực Chiến</p>
        
        <div className="flex justify-center items-center space-x-6 mb-8">
          <a href="tel:0979153480" className="hover:text-orange-500 transition-colors">0979 153 480</a>
          <span>&bull;</span>
          <a href="http://tuvandichvu.phan-anhtu.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">tuvandichvu.phan-anhtu.com</a>
        </div>
        
        <div className="flex justify-center mb-8">
          <a href="https://www.linkedin.com/in/phan-anh-tu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-orange-500 transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Phan Anh Tú. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;