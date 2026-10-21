"use client";

import { ReactNode, useEffect, useState } from "react";
import { buildWhatsAppUrl, captureAdsAttribution, isAdsSession, trackWhatsAppClick, WaSource } from "@/lib/whatsapp";

interface WhatsAppLinkProps {
  message: string;
  source: WaSource;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}

/**
 * Drop-in replacement for <a href="https://wa.me/...">. Builds the URL with
 * source tag at the end of the message and fires a GA4 + Clarity event on
 * click. Use from both client and server components (it's "use client" itself).
 */
export function WhatsAppLink({
  message,
  source,
  className,
  children,
  "aria-label": ariaLabel,
}: WhatsAppLinkProps) {
  // Tras montar (evita desajuste de hidratación) se añade [#ads] si la sesión viene de un anuncio
  const [fromAds, setFromAds] = useState(false);
  useEffect(() => {
    captureAdsAttribution();
    setFromAds(isAdsSession());
  }, []);

  return (
    <a
      href={buildWhatsAppUrl(message, source, fromAds)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      onClick={() => trackWhatsAppClick(source)}
    >
      {children}
    </a>
  );
}
