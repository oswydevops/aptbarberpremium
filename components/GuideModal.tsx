
import React from 'react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'guide' | 'privacy';
}

const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose, mode = 'guide' }) => {
  if (!isOpen) return null;

  const isGuide = mode === 'guide';
  const isPrivacy = mode === 'privacy';

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white dark:bg-surface-dark rounded-[2.5rem] shadow-premium overflow-hidden flex flex-col animate-slide-up border border-slate-200 dark:border-slate-800">
        {/* Header */}
        <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-card-dark">
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              {isGuide ? 'Guía del Sistema' : 'Privacidad & Seguridad'}
            </h2>
            <p className="text-sm text-primary font-bold uppercase tracking-widest mt-1">APT Barber Premium</p>
          </div>
          <button 
            onClick={onClose}
            className="size-12 rounded-2xl bg-slate-200 dark:bg-slate-800 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-10 scrollbar-hide">
          {isGuide && (
            <>
              {/* Section 1: Navigation */}
              <section>
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">explore</span>
                  </div>
                  <h3 className="text-xl font-bold">Cómo usar la Web</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Al inicio de la página podrá reservar su cita rápidamente usando el botón <strong>Reservar Ahora</strong>,
                  que abrirá un chat directo de WhatsApp con nosotros para coordinar su turno, además de poder consultar la política de reserva,
                  más abajo encontrará una Galería de imágenes de nuestros trabajos.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">  
                  Podrá explorar nuestros <strong>Servicios</strong> desde el menú superior para ver precios y detalles. 
                  En la sección final de la página encontrarás nuestra ubicación exacta en Google Maps tocando el link que contiene la dirección, 
                  el número de teléfono que lo llevará al centro de llamadas de su móvil si desea llamar, Métodos de pago que utilizamos y Horarios de trabajo;
                  además podrá consultar las políticas de privacidad del sitio.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Para instalar en Android: El usuario debe abrir la web en Chrome, pulsar los tres puntos verticales y seleccionar "Instalar aplicación" o "Añadir a la pantalla de inicio".
                  Para instalar en iOS (iPhone): El usuario debe abrir la web en Safari, pulsar el botón de "Compartir" (el cuadrado con la flecha hacia arriba) y seleccionar "Añadir a la pantalla de inicio".
                </p>
              </section>

              {/* Section 2: AI Assistant */}
              <section>
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">smart_toy</span>
                  </div>
                  <h3 className="text-xl font-bold">Asistente de Estilo IA</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Usa el chat flotante para recibir consejos sobre qué corte te favorece más según tu tipo de rostro, 
                  consultar tendencias o resolver dudas rápidas sobre el local.
                </p>
              </section>

              {/* Section 3: Bookings */}
              <section>
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">event_available</span>
                  </div>
                  <h3 className="text-xl font-bold">Reserva de Citas</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Pulsa cualquier botón de <strong>Reservar</strong> para abrir un chat directo de WhatsApp. 
                  Allí coordinaremos tu turno de forma personal y rápida.
                </p>
              </section>
            </>
          )}

          {isPrivacy && (
            /* Section 4: Privacy Only */
            <section className="p-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">security</span>
                </div>
                <h3 className="text-2xl font-bold">Protección de Datos</h3>
              </div>
              <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                <div className="p-6 rounded-3xl bg-slate-50 dark:bg-card-dark border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Tratamiento del Chat IA</h4>
                  <p className="text-sm">
                    Tus consultas con el asistente Gemini son anónimas. No guardamos registros personales ni historiales 
                    de chat vinculados a tu identidad fuera de la sesión actual.
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-slate-50 dark:bg-card-dark border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Gestión de Reservas</h4>
                  <p className="text-sm">
                    Al usar WhatsApp, tratamos tu número únicamente para la gestión de la cita. Nunca compartimos tu 
                    contacto con empresas externas ni enviamos spam publicitario.
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-slate-50 dark:bg-card-dark border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Ubicación Geográfica</h4>
                  <p className="text-sm">
                    El acceso a la ubicación es opcional y solo se activa si deseas que el mapa te guíe hacia la barbería. 
                    No rastreamos tus movimientos en segundo plano.
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 dark:bg-card-dark border-t border-slate-100 dark:border-slate-800 flex justify-center">
          <button 
            onClick={onClose}
            className="w-full max-w-xs h-14 bg-primary text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
          >
            Cerrar Ventana
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideModal;