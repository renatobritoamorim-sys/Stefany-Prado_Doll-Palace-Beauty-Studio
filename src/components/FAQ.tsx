import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqData = t('faqData', { returnObjects: true }) as { q: string, a: string }[];

  return (
    <section className="p-6 bg-[#F06FA3] rounded-2xl my-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">{t('faq')}</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-2 border-b border-white/20">
          <button 
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="flex justify-between w-full py-3 text-left font-medium text-white"
          >
            {item.q}
            <ChevronDown className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden text-black pb-3"
              >
                {item.a}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}
