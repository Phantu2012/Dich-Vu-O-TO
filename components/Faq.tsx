import React, { useState } from 'react';
import type { FaqItem } from '../types';
import { faqItems } from '../constants';
import { ChevronDownIcon } from './Icons';

interface AccordionItemProps {
    item: FaqItem;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-slate-800">
            <h2>
                <button
                    type="button"
                    className="flex justify-between items-center w-full py-5 font-semibold text-left text-slate-100"
                    onClick={onClick}
                    aria-expanded={isOpen}
                >
                    <span className="text-lg">{item.question}</span>
                    <ChevronDownIcon
                        className={`w-6 h-6 shrink-0 transition-transform duration-200 text-slate-400 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </button>
            </h2>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="pb-5 pr-4 text-slate-400">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            CÂU HỎI THƯỜNG GẶP
          </h2>
        </div>
        <div className="space-y-4">
            {faqItems.map((item, index) => (
                <AccordionItem
                    key={index}
                    item={item}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;