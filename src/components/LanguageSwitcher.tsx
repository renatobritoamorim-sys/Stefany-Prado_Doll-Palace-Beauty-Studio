import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'pt', label: '🇧🇷' },
    { code: 'en', label: '🇺🇸' },
    { code: 'es', label: '🇪🇸' },
  ];

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => {
            console.log('Changing language to:', lang.code);
            i18n.changeLanguage(lang.code);
          }}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
            i18n.language === lang.code
              ? 'bg-[#F06FA3] text-white'
              : 'bg-stone-200 text-stone-600 hover:bg-[#F06FA3]/20'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
