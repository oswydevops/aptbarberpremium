
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Fixed: Imported CONTACT_INFO and CARD_NUMBER instead of non-existent WHATSAPP_NUMBER
import { GALLERY, CONTACT_INFO, CARD_NUMBER } from '../constants';

const Home: React.FC = () => {
  const handleHeroBooking = () => {
    const message = encodeURIComponent("Hola! He visto su web y me gustaría reservar una cita.");
    // Fixed: Used CONTACT_INFO.whatsappNumber from constants
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard && CARD_NUMBER) {
      navigator.clipboard.writeText(CARD_NUMBER).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {
        // ignore copy errors silently
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-[1280px] px-4 md:px-10 py-6 md:py-10">
        <div className="relative min-h-[560px] flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden rounded-3xl bg-slate-900 group">
          {/* Background with zoom effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("/public/images/hero.jpg")` 
            }}
          />
          
          <div className="relative z-10 flex flex-col gap-6 text-center max-w-[800px] animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="mx-auto bg-primary/20 backdrop-blur-md px-4 py-1 rounded-full border border-primary/30 w-fit mb-2">
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.3em]">Corte & Estilo Premium</span>
            </div>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
              Bienvenido a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-blue-600">tu barbería</span>
            </h1>
            <p className="text-slate-200 text-lg md:text-2xl font-medium leading-relaxed max-w-[600px] mx-auto opacity-90">
              Estilo y precisión en cada corte. Tu imagen, perfeccionada por profesionales en un ambiente único.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <button 
                onClick={handleHeroBooking}
                className="flex min-w-[200px] items-center justify-center gap-3 rounded-2xl h-14 px-8 bg-primary hover:bg-blue-600 text-white text-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-900/40"
              >
                <img src="/icons/whatsapp.svg" alt="WhatsApp" className="size-7 object-contain invert" />
                Reservar Ahora
              </button>
              <Link to="/servicios" className="flex min-w-[200px] items-center justify-center gap-3 rounded-2xl h-14 px-8 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white text-lg font-bold border border-white/20 transition-all">
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>  
          
        
        {/* Policy Notification Card */}
        <div className="relative -mt-16 px-4 md:px-10 flex justify-center z-10 flex items-center">
          <div className="w-full max-w-3xl bg-surface-dark/95 dark:bg-[#1a2632]/95 backdrop-blur-md border border-[#233748] rounded-xl shadow-2xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                <img src="/icons/transfermovil-logo.svg" alt="Transfermovil" className="size-10 object-contain" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white text-lg font-bold">Política de Reservas</p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  Para usted reservar un turno deberá pagar un monto de <span className="text-white font-semibold">200 CUP</span> en caso de no asistir a su cita, el monto no será reembolsado. Muchas gracias
                </p>
              </div>
            </div>
            <div className="w-full md:w-auto flex flex-col items-stretch md:items-end gap-2 bg-[#111a22] p-4 rounded-lg border border-[#233748]">
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Tarjeta a transferir</span>
              <div className="flex items-center justify-between gap-3">
                <span className="text-white font-mono text-lg tracking-wider">{CARD_NUMBER}</span>
                <button 
                  onClick={handleCopy}
                  className="text-primary hover:text-white transition-all p-1 active:scale-90" 
                  title="Copy to clipboard"
                >
                  <span className="material-symbols-outlined text-xl">
                    {copied ? 'check_circle' : 'content_copy'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full max-w-[1280px] px-4 md:px-10 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-[600px]">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Portafolio</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Nuestros Cortes</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg">
              Nuestros trabajos más recientes reflejan el detalle que ponemos en cada cliente. Descubre tu próximo estilo.
            </p>
          </div>
          <Link to="/servicios" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group">
            Ver todos los servicios 
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY.map((item, idx) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden rounded-3xl cursor-pointer aspect-[4/5] shadow-lg hover:shadow-2xl transition-all duration-500 ${
                idx % 3 === 0 ? 'lg:scale-105' : ''
              }`}
            >
              <div 
                className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url("${item.imageUrl}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-center text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="w-full bg-slate-900 py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="size-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white text-3xl">verified_user</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Experiencia</h3>
            <p className="text-slate-400">Barbero con experiencia en estilos clásicos y modernos.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="size-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white text-3xl">chair</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Comodidad</h3>
            <p className="text-slate-400">Ambiente relajante.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="size-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white text-3xl">acute_relax</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Precisión</h3>
            <p className="text-slate-400">Nos tomamos el tiempo necesario para asegurar que cada detalle sea perfecto.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
