
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Message } from '../types';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy tu asistente de estilo de APT Barber. ¿Cómo puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Auto-scroll al final de los mensajes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Lógica para ocultar el asistente al scrollear
  useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) {
        setIsVisible(false);
        if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = window.setTimeout(() => {
          setIsVisible(true);
        }, 800);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
    };
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    // Acceso seguro a la API KEY para evitar ReferenceError: process is not defined
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : undefined;

    if (!apiKey) {
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: '⚠️ No se ha detectado la configuración de la API. Si estás en local, asegúrate de tener el archivo .env configurado correctamente y haber reiniciado el servidor.' 
      }]);
      setIsLoading(false);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ role: 'user', parts: [{ text: userMsg }] }],
        config: {
          systemInstruction: `Eres el Asistente de Estilo de APT Barber. 
          Tu tono es profesional, cercano y moderno. Ayuda con servicios de barbería, horarios y dudas sobre estilos.
          
          Información clave de APT Barber:
          - Ubicación: Calle Principal 123, Madrid.
          - Teléfono: +34 600 123 456.
          - Horario: Lun-Vie (10:00 - 20:00), Sábado (10:00 - 16:00), Domingo (Cerrado).
          - Servicios: Corte Clásico ($25), Barba Completa ($15), Corte + Barba ($35), Rapado ($18), Corte Niño ($20), Afeitado Tradicional ($30).
          - Reservas: Se realizan por WhatsApp.`,
        }
      });

      const replyText = response.text || 'Lo siento, no he podido procesar esa información.';
      setMessages(prev => [...prev, { role: 'model', text: replyText }]);
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      
      let errorMessage = 'He tenido un problema al conectar con mi cerebro digital. ¿Podrías intentarlo de nuevo?';
      
      if (error.message?.includes('API key not valid')) {
        errorMessage = 'La API Key configurada no es válida. Por favor, revísala en Google AI Studio.';
      }

      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-[100] flex flex-col items-end transition-all duration-500 transform ${
        isVisible || isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
    >
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-6 bg-primary text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">smart_toy</span>
              <h3 className="font-bold">Asistente APT</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-slate-50 dark:bg-[#121826]">
            {messages.map((m, i) => (
              <div 
                key={i} 
                className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-primary text-white self-end rounded-tr-none' 
                    : 'bg-white dark:bg-card-dark text-slate-700 dark:text-slate-300 self-start rounded-tl-none border border-slate-200 dark:border-slate-800 shadow-sm'
                }`}
              >
                {m.text}
              </div>
            ))}
            {isLoading && (
              <div className="bg-white dark:bg-card-dark text-slate-400 self-start p-4 rounded-2xl rounded-tl-none text-sm animate-pulse border border-slate-200 dark:border-slate-800">
                Escribiendo...
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 h-12 px-4 rounded-xl bg-slate-100 dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-all"
              placeholder="Pregúntame lo que quieras..."
              disabled={isLoading}
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading || !input.trim()}
              className="size-12 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all active:scale-95 disabled:opacity-50"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`size-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-105 active:scale-95 ${isOpen ? 'rotate-90' : ''}`}
      >
        <span className="material-symbols-outlined text-3xl">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
      </button>
    </div>
  );
};

export default Assistant;