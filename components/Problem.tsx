import React from 'react';
import type { ProblemCard } from '../types';
import { problemCards } from '../constants';


const Card: React.FC<{ item: ProblemCard }> = ({ item }) => {
    const Icon = item.icon;
    return (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-orange-600/10 transition-shadow duration-300 border border-slate-700">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-600/10 text-orange-500 mb-5">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-100">{item.title}</h3>
            <p className="text-slate-400">{item.description}</p>
        </div>
    );
};


const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            NHẬN RA ĐẠI LÝ CỦA MÌNH TRONG NHỮNG DÒNG NÀY?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {problemCards.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-semibold bg-gray-800 border-l-4 border-orange-600 text-slate-300 p-6 rounded-r-lg">
            Những vấn đề này không thể giải quyết riêng lẻ. Chúng là triệu chứng của sự mất cân bằng nghiêm trọng giữa hai tài sản lớn nhất của bạn: <span className="font-bold text-white">CON NGƯỜI</span> và <span className="font-bold text-white">QUY TRÌNH</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;