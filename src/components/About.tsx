import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section className="p-6 bg-white rounded-2xl shadow-sm my-6">
      <h2 className="text-2xl font-semibold text-[#B8862B] mb-4">{t('about')}</h2>
      <p className="text-black leading-relaxed whitespace-pre-line">
        {t('aboutText')}
      </p>
    </section>
  );
}
