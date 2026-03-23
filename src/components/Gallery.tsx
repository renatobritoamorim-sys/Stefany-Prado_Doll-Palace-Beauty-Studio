import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const images = [
  "https://linkbioinsta.com/wp-content/uploads/2026/03/7_Doll-Palace-Beauty-SPA_Danbury-ct.jpeg",
  "https://linkbioinsta.com/wp-content/uploads/2026/03/6_Doll-Palace-Beauty-SPA_Danbury-ct.jpeg",
  "https://linkbioinsta.com/wp-content/uploads/2026/03/5_Doll-Palace-Beauty-SPA_Danbury-ct.jpeg",
  "https://linkbioinsta.com/wp-content/uploads/2026/03/4_Doll-Palace-Beauty-SPA_Danbury-ct.jpeg",
  "https://linkbioinsta.com/wp-content/uploads/2026/03/3_Doll-Palace-Beauty-SPA_Danbury-ct.jpeg",
  "https://linkbioinsta.com/wp-content/uploads/2026/03/2_Doll-Palace-Beauty-SPA_Danbury-ct.jpeg",
  "https://linkbioinsta.com/wp-content/uploads/2026/03/1_Doll-Palace-Beauty-SPA_Danbury-ct.jpeg",
  "https://linkbioinsta.com/wp-content/uploads/2026/03/4_Lash-Design_Stefany-Prado_Doll-Palace-Beauty-SPA_Danbury-ct.jpeg",
  "https://linkbioinsta.com/wp-content/uploads/2026/03/3_Lash-Design_Stefany-Prado_Doll-Palace-Beauty-SPA_Danbury-ct.jpeg",
  "https://linkbioinsta.com/wp-content/uploads/2026/03/2_Lash-Design_Stefany-Prado_Doll-Palace-Beauty-SPA_Danbury-ct.jpeg",
  "https://linkbioinsta.com/wp-content/uploads/2026/03/1_Lash-Design_Stefany-Prado_Doll-Palace-Beauty-SPA_Danbury-ct.jpeg"
];

export default function Gallery() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [Autoplay({ delay: 1000, stopOnInteraction: false })]);

  return (
    <section className="pr-6 my-6 overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((src, i) => (
          <div key={i} className="flex-[0_0_70%] min-w-0 pl-4">
            <img src={src} alt={`Gallery ${i}`} className="rounded-2xl shadow-md h-64 w-full object-cover" referrerPolicy="no-referrer" />
          </div>
        ))}
      </div>
    </section>
  );
}
