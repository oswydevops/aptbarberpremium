
import React from 'react';
import { SERVICES, CONTACT_INFO } from '../constants';

const Services: React.FC = () => {
  const bookNow = (serviceName: string) => {
    const msg = encodeURIComponent(`Hola! Me interesa reservar el servicio de: ${serviceName}. ¿Qué horarios tienen disponibles?`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="w-full flex flex-col items-center">
      <section className="w-full max-w-[1280px] px-4 md:px-10 py-16 md:py-24">
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">Tarifa de Precios</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Servicios & Precios</h1>
          <p className="text-slate-500 text-xl max-w-[700px]">Los mejores servicios de barbería en un solo lugar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div key={s.id} className="group bg-white dark:bg-card-dark p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-primary transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{s.name}</h3>
                <p className="text-slate-500 text-xl italic mb-8 leading-relaxed">{s.description}</p>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Precio</span>
                  <span className="text-3xl font-black">${s.price}</span>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner de reserva rápida */}
      <section className="w-full py-20 px-4">
        <div className="max-w-[1280px] mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white flex flex-col items-center gap-8 shadow-2xl shadow-primary/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 size-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter relative z-10">¿Cansado de parecer un ovejo?</h2>
          <p className="text-xl italic opacity-80 max-w-[600px] relative z-10">Agenda tu cita ahora y vive la experiencia APT Barber.</p>
          <button 
            onClick={() => bookNow("Cita General")}
            className="flex items-center justify-center gap-4 bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform relative z- animate-bounce"
          >
            <img src="/icons/whatsapp.svg" alt="WhatsApp" className="size-10 object-contain opacity-60" />
            WHATSAPP
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
