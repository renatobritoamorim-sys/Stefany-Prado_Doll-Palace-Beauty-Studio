import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, ChevronDown, MessageCircle } from 'lucide-react';

export default function TrainingSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const trainings = [
    { title: t('training1Title'), desc: t('training1Desc') },
    { title: t('training2Title'), desc: t('training2Desc') },
  ];

  return (
    <section className="p-6 bg-[#F06FA3] rounded-2xl my-6 text-center">
      <BookOpen className="mx-auto text-white mb-2" size={32} />
      <h2 className="text-2xl font-semibold text-white">{t('courses')}</h2>
      <p className="text-white mt-2">{t('coursesText')}</p>

      <div className="mt-6 space-y-4">
        {trainings.map((training, index) => (
          <div key={index} className="bg-white p-4 rounded-xl text-left">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between items-center w-full font-semibold text-[#F06FA3]"
            >
              {training.title}
              <ChevronDown className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === index && (
              <p className="text-sm text-stone-600 mt-2">{training.desc}</p>
            )}
          </div>
        ))}
      </div>

      <p className="text-white text-sm mt-6 mb-2">{t('trainingInfoText')}</p>
      <a
        href="https://wa.me/+12037399429?text=Oi%20Stefany%20!%20Vim%20pelo%20link%20Bio%20do%20instagram%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20treinamentos%20!"
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit mx-auto bg-white text-[#F06FA3] py-2 px-6 rounded-full font-semibold shadow-md hover:bg-stone-50 flex items-center justify-center gap-2 whitespace-nowrap text-sm"
      >
        <MessageCircle size={16} /> {t('trainingInfoButton')}
      </a>
    </section>
  );
}
