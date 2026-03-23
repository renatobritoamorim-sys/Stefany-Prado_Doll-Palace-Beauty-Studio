import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Phone, BookOpen, Share2 } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import MapSection from './components/MapSection';
import BusinessHours from './components/BusinessHours';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import TrainingSection from './components/TrainingSection';

export default function App() {
  const { t } = useTranslation();
  const shareUrl = "https://stefany-prado.vercel.app/";

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Doll Palace Beauty SPA',
          url: shareUrl,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copiado!');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-black font-sans">
      <LanguageSwitcher />
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[80vh] flex flex-col items-center justify-end pb-16 p-6 text-center"
        style={{
          backgroundImage: `url('https://linkbioinsta.com/wp-content/uploads/2026/03/8_Stefany-Prado_Doll-Palace-Beauty-SPA_Danbury-ct.jpg'), linear-gradient(to top, #D9A6C4, transparent)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
      </motion.section>

      {/* Action Buttons Section */}
      <section className="flex flex-col gap-4 items-center py-6 bg-stone-50">
        <a href="http://wa.me/+12037399429" className="bg-[#F06FA3] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-opacity-90 flex items-center gap-2 w-full max-w-xs justify-center">
          <MessageCircle size={20} /> WhatsApp
        </a>
        <a href="sms:+12037399429" className="bg-[#F06FA3] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-opacity-90 flex items-center gap-2 w-full max-w-xs justify-center">
          <MessageCircle size={20} /> SMS
        </a>
        <a href="https://booksy.com/en-us/610741_doll-palace_brows-lashes_15270_danbury" target="_blank" rel="noopener noreferrer" className="bg-[#F06FA3] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-opacity-90 flex items-center gap-2 w-full max-w-xs justify-center">
          <BookOpen size={20} /> {t('bookNow')}
        </a>
        <div className="mt-4">
          <img 
            src="https://linkbioinsta.com/wp-content/uploads/2026/03/Logo_Doll-Palace_Beauty-Studio.jpeg" 
            alt="Logo Doll Palace Beauty Studio" 
            className="w-28 h-28 rounded-full border-2 border-white shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Floating Call Button */}
      <a href="tel:+12037399429" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 z-50">
        <Phone size={18} />
      </a>

      <main className="p-6 max-w-2xl mx-auto">
        <About />
        <Services />
        <TrainingSection />
        <Gallery />
        <FAQ />
        <MapSection />
        <BusinessHours />

        {/* Share Section */}
        <section className="p-6 bg-white rounded-2xl my-6 text-center shadow-md">
          <h2 className="text-xl font-semibold text-[#D4AF37] mb-4">Compartilhe nosso Link</h2>
          <div className="flex justify-center mb-4">
            <QRCodeSVG value={shareUrl} size={150} />
          </div>
          <button 
            onClick={handleShare}
            className="w-full max-w-xs mx-auto bg-[#F06FA3] text-white py-3 rounded-full font-semibold shadow-md hover:bg-opacity-90 flex items-center justify-center gap-2"
          >
            <Share2 size={20} /> Compartilhar Link Bio
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
