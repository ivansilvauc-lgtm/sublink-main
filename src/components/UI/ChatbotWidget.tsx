"use client"
import { useState } from 'react';

// URL del chatbot desplegado en Vercel
const CHATBOT_URL = "https://chatbotgamma.sublink.company";

export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat con IA"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 hover:scale-110 active:scale-95"
        style={{ transition: 'transform 0.15s ease, background-color 0.2s ease' }}
      >
        {isOpen ? (
          // X cerrar
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Burbuja de chat
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        )}
      </button>

      {/* Panel del chatbot */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[370px] h-[580px] rounded-2xl shadow-2xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ transformOrigin: 'bottom right' }}
      >
        {/* Header */}
        <div className="bg-primary px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Asistente Sublink</p>
            <p className="text-blue-200 text-xs">Responde al instante</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="ml-auto text-white/70 hover:text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* iFrame del chatbot */}
        {isOpen && (
          <iframe
            src={CHATBOT_URL}
            className="w-full h-[calc(100%-56px)] border-0"
            title="Asistente Sublink"
            allow="microphone"
          />
        )}
      </div>
    </>
  );
};
