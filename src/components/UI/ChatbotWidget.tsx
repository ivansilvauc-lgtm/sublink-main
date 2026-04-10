"use client"
import { useState, useEffect, useRef } from 'react';

// URL del chatbot desplegado en Vercel
const CHATBOT_URL = "https://chatbotgamma.sublink.company";

// Segundos de inactividad antes de abrir el popup automáticamente
const AUTO_OPEN_DELAY_MS = 15000;
// Scroll mínimo (px) para activar el popup por scroll
const SCROLL_TRIGGER_PX = 300;
// Inactividad de teclado (ms): si el usuario tecleó algo y deja de teclear por 5s, abre
const KEYBOARD_IDLE_MS = 5000;

export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const hasAutoOpened = useRef(false);
  // Flag: el usuario cerró manualmente con X — nunca volver a auto-abrir
  const userClosed = useRef(false);

  useEffect(() => {
    const triggerAutoOpen = () => {
      if (hasAutoOpened.current || userClosed.current || isOpen) return;
      hasAutoOpened.current = true;
      setIsOpen(true);
      setShowBadge(false);
    };

    // Timer principal: abrir después de AUTO_OPEN_DELAY_MS (15s)
    const timer = setTimeout(triggerAutoOpen, AUTO_OPEN_DELAY_MS);

    // Scroll: abrir si el usuario baja más de SCROLL_TRIGGER_PX px
    const handleScroll = () => {
      if (window.scrollY > SCROLL_TRIGGER_PX) {
        triggerAutoOpen();
      }
    };

    // Inactividad de teclado: si tecleó algo y lleva 5s sin teclear → abrir
    let keyboardIdleTimer: ReturnType<typeof setTimeout> | null = null;
    const handleKeydown = () => {
      if (hasAutoOpened.current || userClosed.current) return;
      // Reiniciar el temporizador de inactividad de teclado
      if (keyboardIdleTimer) clearTimeout(keyboardIdleTimer);
      keyboardIdleTimer = setTimeout(triggerAutoOpen, KEYBOARD_IDLE_MS);
    };

    // Mostrar badge de notificación a los 11 segundos (antes del auto-open a los 15s)
    const badgeTimer = setTimeout(() => {
      if (!hasAutoOpened.current && !userClosed.current) setShowBadge(true);
    }, 11000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeydown, { passive: true });

    return () => {
      clearTimeout(timer);
      clearTimeout(badgeTimer);
      if (keyboardIdleTimer) clearTimeout(keyboardIdleTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeydown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setShowBadge(false);
    if (!hasAutoOpened.current) hasAutoOpened.current = true;
  };

  // Cierre manual con X: marcar que el usuario no quiere el bot abierto
  const handleClose = () => {
    setIsOpen(false);
    userClosed.current = true;
    hasAutoOpened.current = true; // Bloquear futuros auto-opens
    setShowBadge(false);
  };

  return (
    <>
      {/* Botón flotante — solo visible cuando el chat está cerrado */}
      {!isOpen && (
        <button
          onClick={handleToggle}
          aria-label="Abrir chat con IA"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 hover:scale-110 active:scale-95"
          style={{ transition: 'transform 0.15s ease, background-color 0.2s ease' }}
        >
          {/* Badge de notificación */}
          {showBadge && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
          )}
          {/* Burbuja de chat */}
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

        {/* iFrame del chatbot */}
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
