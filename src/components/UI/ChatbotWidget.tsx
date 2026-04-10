"use client"
import { useState, useEffect } from 'react';

// URL del chatbot desplegado en Vercel
const CHATBOT_URL = "https://chatbotgamma.sublink.company";

// Segundos antes de mostrar el badge de notificación (no abre automáticamente)
const BADGE_DELAY_MS = 10000;

export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  // Mostrar el badge rojo de notificación después de BADGE_DELAY_MS
  // El chat NO se abre automáticamente — solo al hacer click
  useEffect(() => {
    const badgeTimer = setTimeout(() => {
      if (!isOpen) setShowBadge(true);
    }, BADGE_DELAY_MS);

    return () => clearTimeout(badgeTimer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setShowBadge(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón flotante — solo visible cuando el chat está cerrado */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          aria-label="Abrir chat con IA"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 active:scale-95"
          style={{ transition: 'transform 0.15s ease, background-color 0.2s ease' }}
        >
          {/* Badge de notificación */}
          {showBadge && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
          )}
          {/* Ícono de burbuja de chat */}
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        </button>
      )}

      {/* Panel del chatbot */}
      <div
        className={`fixed right-6 z-40 w-[min(370px,calc(100vw-24px))] rounded-2xl shadow-2xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{
          transformOrigin: 'bottom right',
          bottom: '24px',
          height: 'min(620px, calc(100vh - 120px))',
        }}
      >
        {/* Header */}
        <div className="bg-primary px-4 py-3 flex items-center gap-3 shrink-0">
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
            onClick={handleClose}
            className="ml-auto text-white/70 hover:text-white transition-colors"
            aria-label="Cerrar chat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* iFrame del chatbot — se carga solo cuando está abierto */}
        {isOpen && (
          <iframe
            src={CHATBOT_URL}
            className="w-full border-0"
            style={{ height: 'calc(100% - 56px)' }}
            title="Asistente Sublink"
            allow="microphone"
          />
        )}
      </div>
    </>
  );
};
