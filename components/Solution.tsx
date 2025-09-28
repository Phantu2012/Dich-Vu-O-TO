import React from 'react';
import { solutionPillars } from '../constants';
import type { SolutionPillar } from '../types';

const PillarCard: React.FC<{ pillar: SolutionPillar }> = ({ pillar }) => {
    const Icon = pillar.icon;
    return (
        <div className="bg-slate-800 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border border-slate-700">
             <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-600/10 text-orange-500 mb-5">
                <Icon className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-3">{pillar.title}</h3>
            <p className="text-slate-400 leading-relaxed">{pillar.description}</p>
        </div>
    );
}

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            GIẢI PHÁP TOÀN DIỆN ĐƯỢC ĐÚC KẾT TỪ 12 NĂM THỰC CHIẾN
          </h2>
          <p className="text-lg text-slate-400">
            Tôi không mang đến những lý thuyết sách vở. Tôi mang đến những giải pháp đã được kiểm chứng qua thực tế, được đúc kết sau 12 năm làm việc ở mọi vị trí, từ người trực tiếp thực thi đến người quản lý chiến lược. Đây là cách chúng ta sẽ cùng nhau tạo ra sự thay đổi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionPillars.map((pillar, index) => (
            <PillarCard key={index} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;