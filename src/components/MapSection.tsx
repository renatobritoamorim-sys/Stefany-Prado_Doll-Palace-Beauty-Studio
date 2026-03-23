import { MapPin, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function MapSection() {
  const { t } = useTranslation();
  return (
    <section className="p-6 my-6">
      <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">Localização</h2>
      <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-md">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.645773971024!2d-73.46436352509224!3d41.40349849499748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7ff610232a7a1%3A0x1d8fa5a97cacb328!2s17%20Downs%20St%2C%20Danbury%2C%20CT%2006810!5e0!3m2!1sen!2sus!4v1773956340530!5m2!1sen!2sus" 
          className="w-full h-full border-0" 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Doll Palace Beauty SPA"
        ></iframe>
      </div>
      <a 
        href="https://www.google.com/maps/dir/?api=1&destination=17+Downs+St,Danbury,CT+06810" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-4 w-full max-w-xs mx-auto bg-[#F06FA3] text-white py-3 rounded-full font-semibold shadow-md hover:bg-opacity-90 flex items-center justify-center gap-2"
      >
        <MapPin size={20} /> {t('getDirections')}
      </a>
      <a 
        href="https://g.page/r/CQNZyuEl0AqJEBM/review" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-4 w-full max-w-xs mx-auto bg-white text-[#B8862B] border border-[#B8862B] py-3 rounded-full font-semibold shadow-md hover:bg-stone-50 flex items-center justify-center gap-2"
      >
        <Star size={20} /> {t('rateUsOnGoogle')}
      </a>
    </section>
  );
}
