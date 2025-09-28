import React from 'react';
import { timelineEvents, testimonials } from '../constants';

const Credibility: React.FC = () => {
  return (
    <section id="credibility" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            12 NĂM KINH NGHIỆM NÓI LÊN TẤT CẢ
          </h2>
        </div>

        {/* Timeline Section */}
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-slate-700 h-full border" style={{ left: '50%' }}></div>
          {timelineEvents.map((event, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-orange-600 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-sm text-white">{index + 1}</h1>
              </div>
              <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4 border border-slate-700">
                <h3 className="mb-3 font-bold text-white text-xl">{event.year} - {event.title}</h3>
                <p className="text-sm leading-snug tracking-wide text-slate-400">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials Section */}
        <div className="mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg border border-slate-700">
                        <p className="text-slate-300 italic mb-6 text-lg">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                            <div>
                                <p className="font-bold text-slate-100">{testimonial.name}</p>
                                <p className="text-sm text-slate-400">{testimonial.title}, {testimonial.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Credibility;