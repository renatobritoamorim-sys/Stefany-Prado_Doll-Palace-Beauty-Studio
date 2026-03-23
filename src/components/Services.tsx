import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();
  const [expandedService, setExpandedService] = useState<string | null>("Lash Design");

  const services = t('servicesData', { returnObjects: true }) as { title: string, items: string[] }[];

  return (
    <section className="p-6 bg-white rounded-2xl shadow-sm my-6">
      <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">{t('services')}</h2>
      {services.map((s, i) => (
        <div key={i} className="mb-2 border-b border-stone-200 pb-2">
          <button 
            onClick={() => setExpandedService(expandedService === s.title ? null : s.title)}
            className="flex justify-between items-center w-full text-left font-bold text-[#F06FA3] py-2"
          >
            {s.title}
            {expandedService === s.title ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {expandedService === s.title && (
            <div className="text-stone-700 mt-2 pl-2 space-y-2">
              {s.items.map((item, j) => {
                const isDesignSobrancelhas = 
                  s.title === "Design de Sobrancelhas" || 
                  s.title === "Eyebrow Design" || 
                  s.title === "Diseño de Cejas";
                const isLabios = 
                  s.title === "Lábios" || 
                  s.title === "Lips" || 
                  s.title === "Labios";
                const isBronzeCorpo = 
                  s.title === "Bronze & Corpo" || 
                  s.title === "Tan & Body" || 
                  s.title === "Bronceado y Cuerpo";
                const isCabelo = 
                  s.title === "Cabelo" || 
                  s.title === "Hair" || 
                  s.title === "Cabello";

                if (s.title === "Lash Design" || isDesignSobrancelhas || isLabios || isBronzeCorpo || isCabelo) {
                  const parts = item.split('\n');
                  return (
                    <div key={j} className="whitespace-pre-line">
                      {parts.length > 1 ? (
                        <>
                          <span className="text-lg font-bold text-black">{parts[0]}</span>
                          <br />
                          <span className="text-stone-700">{parts.slice(1).join('\n')}</span>
                        </>
                      ) : (
                        <span className="text-lg font-bold text-black">{item}</span>
                      )}
                    </div>
                  );
                } else {
                  return <div key={j} className="whitespace-pre-line">{item}</div>;
                }
              })}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
