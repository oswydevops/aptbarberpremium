
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {

  // Configuración de los métodos de pago con rutas a archivos locales en public/icons/
  const paymentMethods = [
    { src: '/icons/cash.svg', label: 'Efectivo' },
    { src: '/icons/enzona-logo.svg', label: 'Enzona' },
    { src: '/icons/transfermovil-logo.svg', label: 'TransferMovil' },
    { src: '/icons/bitcoin-logo.svg', label: 'Cripto' }
  ];
  return (
    <footer className="w-full bg-slate-50 dark:bg-card-dark border-t border-slate-200 dark:border-[#243047] py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Contactos */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold">Contacto</h3>
            <div className="flex flex-col gap-5">
              <a 
                href={CONTACT_INFO.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-start gap-4 hover:text-primary transition-colors"
              >
                <div className="size-14 aspect-square flex-shrink-0 rounded-full bg-slate-200 dark:bg-[#243047] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-1">Dirección</span>
                  <span className="text-sm font-medium">{CONTACT_INFO.address}</span>
                </div>
              </a>
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
                className="group flex items-start gap-4 hover:text-primary transition-colors"
              >
                <div className="size-14 rounded-full bg-slate-200 dark:bg-[#243047] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-1">Teléfono</span>
                  <span className="text-sm font-medium">{CONTACT_INFO.phone}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Payment & Social */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <span className="text-xl font-bold">Métodos de Pago</span>
              <div className="flex flex-wrap gap-6">
                {paymentMethods.map((method) => (
                  <div 
                    key={method.label}
                    className="flex flex-col items-center gap-3 group cursor-default"
                  >
                    <div className="flex items-center justify-center size-14 rounded-2xl bg-white dark:bg-[#243047] border border-slate-200 dark:border-slate-800 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all p-3">
                      <img 
                        src={method.src} 
                        alt={method.label} 
                        className={`w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 ${method.label === 'Efectivo' ? 'invert' : ''}`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImdyYXkiIHN0cm9rZS13aWR0aD0iMiI+PHJlY3QgeD0iMiIgeT0iNSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiByeD0iMiIvPjxsaW5lIHgxPSIyIiB5MT0iMTAiIHgyPSIyMiIgeTI9IjEwIi8+PC9zdmc+';
                        }}
                      />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors text-center">
                      {method.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold">Horarios</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-dashed border-slate-700 pb-2">
                <span className="text-[12px] font-bold">Lunes - Viernes</span>
                <span className="text-[12px] font-bold">9:00 AM- 7:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-slate-700 pb-2">
                <span className="text-[12px] font-bold">Sábado</span>
                <span className="text-[12px] font-bold">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[12px] font-bold">Domingo</span>
                <span className="text-[12px] font-bold text-red-500">Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-[#243047] flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} APT Barber. Todos los derechos reservados.</p>
          <div className="flex gap-6 font-bold uppercase tracking-widest text-[10px]">
            <a href="#" className="hover:text-primary">Privacidad</a>
            <a href="#" className="hover:text-primary">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
