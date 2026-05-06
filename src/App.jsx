import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  ChefHat, 
  Navigation,
  Clock,
  Heart,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const PRODUCT_IMAGES = [
  "https://iili.io/BZADb3b.md.jpg",
  "https://iili.io/BZADZGe.md.jpg",
  "https://iili.io/BZADPu2.md.jpg",
  "https://iili.io/BZADQn9.md.jpg",
  "https://iili.io/BZAbqFa.md.jpg",
  "https://iili.io/BZAbdZP.md.jpg",
  "https://iili.io/BZAbEtS.md.jpg",
  "https://iili.io/BZAmdJf.md.jpg",
  "https://iili.io/BZAbyfn.md.jpg"
];

const REELS = [
  "https://www.facebook.com/reel/970470078671943",
  "https://www.facebook.com/reel/1610857363469089",
  "https://www.facebook.com/reel/1253898303385965"
];

const REVIEWS = [
  {
    name: "Anna K.",
    text: "Najlepsze ciasta w Krakowie! Naturalne składniki czuć w każdym kęsie. Tort na urodziny był przepyszny i piękny.",
    stars: 5
  },
  {
    name: "Marek W.",
    text: "Prawdziwy chleb, taki jak kiedyś u babci. Plac Imbramowski to moje stałe miejsce na zakupy piekarnicze.",
    stars: 5
  },
  {
    name: "Katarzyna S.",
    text: "Rzemieślnicza robotę widać gołym okiem. Prosty skład to dla mnie priorytet, a tutaj mam pewność co jem.",
    stars: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-bakery-gold selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-bakery-cream/80 backdrop-blur-md border-b border-bakery-brown/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ChefHat className="text-bakery-gold w-8 h-8" />
            <span className="font-serif font-bold text-2xl tracking-tighter uppercase">Cukiernia Sowa</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest">
            <button onClick={() => scrollTo('o-nas')} className="hover:text-bakery-gold transition-colors">O nas</button>
            <button onClick={() => scrollTo('produkty')} className="hover:text-bakery-gold transition-colors">Produkty</button>
            <button onClick={() => scrollTo('opinie')} className="hover:text-bakery-gold transition-colors">Opinie</button>
            <button onClick={() => scrollTo('wideo')} className="hover:text-bakery-gold transition-colors">Wideo</button>
            <button onClick={() => scrollTo('kontakt')} className="hover:text-bakery-gold transition-colors">Kontakt</button>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=61566806643149" target="_blank" rel="noreferrer" className="p-2 hover:bg-bakery-brown/5 rounded-full transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/cukiernia_pawel_sowa?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBEwaTJIbjlyTjIyVHZBUlVIYnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR6Grwiy6owJXfdbmqALFJbLtFz3TK9dP5qk7UhGDKcxw7VwUojwtZo6EYImjQ_aem_ClCYjoSYMCg1Kd5kSmf0iQ" target="_blank" rel="noreferrer" className="p-2 hover:bg-bakery-brown/5 rounded-full transition-colors">
              <Instagram size={20} />
            </a>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bakery-cream pt-24 px-4 flex flex-col gap-6 items-center text-xl uppercase font-serif font-bold"
          >
            <button onClick={() => scrollTo('o-nas')}>O nas</button>
            <button onClick={() => scrollTo('produkty')}>Produkty</button>
            <button onClick={() => scrollTo('opinie')}>Opinie</button>
            <button onClick={() => scrollTo('wideo')}>Wideo</button>
            <button onClick={() => scrollTo('kontakt')}>Kontakt</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={PRODUCT_IMAGES[0]} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bakery-cream via-transparent to-bakery-cream" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-bakery-gold font-medium tracking-[0.3em] uppercase text-sm mb-6 block">Domowa rzemieślnicza produkcja</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-8 leading-[0.9]">
              Cukiernia <br />
              <span className="text-bakery-gold italic">Paweł Sowa</span>
            </h1>
            <p className="text-lg md:text-xl text-bakery-brown/70 max-w-2xl mx-auto mb-12 font-light italic">
              CIASTA • TORTY • CHLEB <br />
              Wypiekane z pasją w samym sercu Krakowa. Prosty skład, naturalne składniki i tradycyjne receptury.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => scrollTo('kontakt')}
                className="bg-bakery-brown text-bakery-cream px-10 py-4 rounded-full flex items-center gap-2 hover:bg-bakery-gold transition-all duration-300 font-medium uppercase text-xs tracking-widest group shadow-xl"
              >
                Zamów teraz <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:+48608160450" className="flex items-center gap-2 font-serif text-xl border-b border-bakery-brown/20 pb-1 hover:border-bakery-gold transition-colors">
                <Phone size={20} className="text-bakery-gold" /> +48 608-160-450
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="o-nas" className="py-24 bg-white/50 border-y border-bakery-brown/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-bakery-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Heart className="text-bakery-brown" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4 uppercase">Naturalnie</h3>
            <p className="text-bakery-brown/70 font-light leading-relaxed">Stawiamy na prosty skład i najwyższej jakości, naturalne składniki. Żadnych ulepszaczy.</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-bakery-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Clock className="text-bakery-brown" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4 uppercase">Na zamówienie</h3>
            <p className="text-bakery-brown/70 font-light leading-relaxed">Każdy produkt przygotowujemy świeżo dla Ciebie. Skontaktuj się z nami, aby ustalić szczegóły.</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-bakery-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Navigation className="text-bakery-brown" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4 uppercase">W Krakowie</h3>
            <p className="text-bakery-brown/70 font-light leading-relaxed">Znajdziesz nas w dwóch dogodnych lokalizacjach: Plac Imbramowski oraz ul. Młyńska.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="produkty" className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-bakery-gold font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Nasza oferta</span>
              <h2 className="text-5xl font-serif font-bold mb-6 italic leading-tight">Słodkości i wypieki z naszej pracowni</h2>
              <p className="text-bakery-brown/70 font-light">Nasze produkty to połączenie rzemieślniczego doświadczenia i miłości do wypieków. Od puszystych ciast, przez eleganckie torty, aż po chrupiący chleb na zakwasie.</p>
            </div>
            <div className="flex gap-4">
              <div className="text-right">
                <p className="font-serif text-3xl font-bold">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-bakery-brown/50">Ręczna produkcja</p>
              </div>
              <div className="w-px h-12 bg-bakery-brown/10" />
              <div className="text-right">
                <p className="font-serif text-3xl font-bold">Nature</p>
                <p className="text-[10px] uppercase tracking-widest text-bakery-brown/50">Czysta etykieta</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/5] overflow-hidden bg-bakery-warm rounded-2xl shadow-sm"
              >
                <img 
                  src={img} 
                  alt={`Produkt ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bakery-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-serif italic text-xl">Autentyczny smak Krakowa</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="opinie" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-bakery-gold font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Co mówią nasi klienci</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic leading-tight">Wasze opinie są dla nas najważniejsze</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {REVIEWS.map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-bakery-cream p-8 rounded-3xl border border-bakery-brown/5 relative"
              >
                <div className="flex gap-1 mb-4 text-bakery-gold">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <motion.span 
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >★</motion.span>
                  ))}
                </div>
                <p className="text-bakery-brown/80 font-light italic mb-6 leading-relaxed">"{review.text}"</p>
                <p className="font-serif font-bold uppercase text-sm tracking-widest">— {review.name}</p>
                <div className="absolute top-8 right-8 text-6xl text-bakery-gold/10 font-serif leading-none italic">"</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://www.facebook.com/profile.php?id=61566806643149&sk=reviews" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-bakery-brown font-bold uppercase text-xs tracking-[0.2em] hover:text-bakery-gold transition-colors group"
            >
              Zobacz wszystkie opinie na Facebooku <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Videos / Reels Section */}
      <section id="wideo" className="py-24 bg-bakery-brown text-bakery-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 uppercase">Poczuj ten klimat</h2>
            <p className="text-bakery-cream/60 max-w-xl mx-auto font-light">Zajrzyj za kulisy naszej pracowni i zobacz jak powstają Twoje ulubione wypieki.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REELS.map((url, idx) => {
              const encodedUrl = encodeURIComponent(url);
              const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&t=0`;
              
              return (
                <div key={idx} className="aspect-[9/16] bg-bakery-brown/30 rounded-3xl border border-bakery-cream/10 relative overflow-hidden group shadow-2xl">
                  <iframe 
                    src={embedUrl} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 'none', overflow: 'hidden' }} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="kontakt" className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-5xl font-serif font-bold mb-4 uppercase tracking-tighter italic">Zamówienia i kontakt</h2>
              <p className="text-lg text-bakery-brown/70 mb-12 font-light">Przyjmujemy zamówienia na torty okolicznościowe i większe ilości ciast. Zadzwoń lub napisz do nas!</p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-bakery-warm flex items-center justify-center shrink-0">
                    <Phone className="text-bakery-brown" size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-bakery-brown/50 mb-1 font-bold">Telefon</p>
                    <a href="tel:+48608160450" className="text-2xl font-serif font-bold hover:text-bakery-gold transition-colors">+48 608-160-450</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-bakery-warm flex items-center justify-center shrink-0">
                    <Mail className="text-bakery-brown" size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-bakery-brown/50 mb-1 font-bold">E-mail</p>
                    <a href="mailto:wypiekisowa@gmail.com" className="text-2xl font-serif font-bold hover:text-bakery-gold transition-colors underline decoration-bakery-gold/30">wypiekisowa@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-bakery-warm flex items-center justify-center shrink-0">
                    <MapPin className="text-bakery-brown" size={24} />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-bakery-brown/50 mb-1 font-bold">Adres 1</p>
                      <address className="text-xl font-serif font-bold not-italic">Plac Imbramowski paw. 16, Kraków</address>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-bakery-brown/50 mb-1 font-bold">Adres 2</p>
                      <address className="text-xl font-serif font-bold not-italic">Ul. Młyńska 8, Kraków</address>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-bakery-warm/30 rounded-3xl border border-bakery-brown/5">
                <h4 className="font-serif text-xl font-bold mb-4 uppercase italic">Obserwuj nas</h4>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/profile.php?id=61566806643149" target="_blank" rel="noreferrer" className="flex-1 bg-white p-4 rounded-xl flex items-center justify-center gap-3 hover:shadow-lg transition-all border border-bakery-brown/5 font-bold uppercase text-[10px] tracking-widest">
                    <Facebook size={18} className="text-[#1877F2]" /> Facebook
                  </a>
                  <a href="https://www.instagram.com/cukiernia_pawel_sowa?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBEwaTJIbjlyTjIyVHZBUlVIYnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR6Grwiy6owJXfdbmqALFJbLtFz3TK9dP5qk7UhGDKcxw7VwUojwtZo6EYImjQ_aem_ClCYjoSYMCg1Kd5kSmf0iQ" target="_blank" rel="noreferrer" className="flex-1 bg-white p-4 rounded-xl flex items-center justify-center gap-3 hover:shadow-lg transition-all border border-bakery-brown/5 font-bold uppercase text-[10px] tracking-widest">
                    <Instagram size={18} className="text-[#E4405F]" /> Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-bakery-gold/20 blur-3xl opacity-30 z-0" />
              <div className="relative h-[600px] w-full bg-bakery-warm rounded-3xl overflow-hidden shadow-2xl border border-bakery-brown/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.90842887639!2d19.944947196789546!3d50.08800129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165af0cc9c42c5%3A0xb956427c9898511a!2sPlac%20Imbramowski!5e0!3m2!1spl!2spl!4v1776889145503!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-bakery-cream border-t border-bakery-brown/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <ChefHat className="text-bakery-gold w-6 h-6" />
            <span className="font-serif font-bold text-lg tracking-tighter uppercase">Cukiernia Sowa</span>
          </div>
          <p className="text-bakery-brown/50 text-xs tracking-widest uppercase">© 2026 Cukiernia Paweł Sowa. Kraków.</p>
        </div>
      </footer>
    </div>
  );
}
