import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="p-8 bg-[#ffb2e1] text-stone-800 rounded-t-3xl mt-6">
      <div className="flex flex-col items-center gap-6">
        <img 
          src="https://linkbioinsta.com/wp-content/uploads/2026/03/Logo_Doll-Palace-Beauty-SPA_Danbury-ct.jpeg" 
          alt="Logo Doll Palace Beauty SPA" 
          className="w-24 h-24 rounded-full border-2 border-white shadow-lg"
          referrerPolicy="no-referrer"
        />
        
        <div className="text-center space-y-2">
          <p className="font-semibold">Doll Palace Beauty SPA</p>
          <p className="text-sm">Danbury, CT</p>
          <p className="text-sm font-medium">+1 (203) 739-9429</p>
        </div>

        <div className="w-full border-t border-black/10 pt-6 text-center">
          <p className="font-bold mb-3">{t('paymentMethods')}</p>
          <p className="text-sm">{t('paymentMethodsText')}</p>
        </div>

        <p className="text-xs text-stone-600 mt-4">© 2026 Doll Palace Beauty SPA</p>
      </div>
    </footer>
  );
}
