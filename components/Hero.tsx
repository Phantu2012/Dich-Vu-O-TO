import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-24 lg:py-40">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-3/5 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-slate-100">
              QUY TRÌNH TỐT NHƯNG NHÂN SỰ YẾU? <br className="hidden md:block"/>NHÂN SỰ GIỎI NHƯNG QUY TRÌNH RỐI?
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto lg:mx-0">
              Giải pháp từ Phan Anh Tú - Chuyên gia với 12 năm kinh nghiệm thực chiến từ vị trí Cố vấn Dịch vụ lên Giám đốc, thấu hiểu gốc rễ mọi vấn đề để mang lại sự tăng trưởng thực chất.
            </p>
            <a 
              href="#solution" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition duration-300 inline-block shadow-lg shadow-orange-600/20 transform hover:scale-105"
            >
              TÌM HIỂU GIẢI PHÁP THỰC TẾ
            </a>
          </div>
          <div className="lg:w-2/5 flex justify-center lg:justify-end">
            <div className="w-80 h-96 lg:w-96 lg:h-[480px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/400/550" 
                alt="Chân dung chuyên gia Phan Anh Tú" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;