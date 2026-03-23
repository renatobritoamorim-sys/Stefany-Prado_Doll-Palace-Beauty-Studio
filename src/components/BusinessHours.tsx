import { Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function BusinessHours() {
  const { t } = useTranslation();
  return (
    <section className="p-6 my-6 bg-stone-100 rounded-2xl text-center">
      <Clock className="mx-auto text-[#D4AF37] mb-2" size={32} />
      <h2 className="text-2xl font-semibold text-[#D4AF37]">{t('businessHours')}</h2>
      <p className="text-stone-700 mt-2 font-medium">{t('businessHoursText')}</p>
    </section>
  );
}
