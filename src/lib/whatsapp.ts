/**
 * Centralized WhatsApp CTA builder with source tracking.
 *
 * Why: wa.me doesn't preserve URL query params like UTM. The only field that
 * crosses into WhatsApp is the `text` param. So we:
 *   1. Append a short [#source] tag at the end of the message so Ivan sees
 *      which button the lead came from when they chat on WhatsApp.
 *   2. Fire a GA4 event + Clarity event on click so conversion is measurable
 *      without opening WhatsApp.
 */

export const WA_NUMBER = "584244067274";

export type WaSource =
  | "chat-flotante"
  | "prefooter"
  | "estampacion"
  | "portafolio"
  | "blog"
  | "tela-detalle"
  | "sostenibilidad"
  | "footer"
  | "mini-pop"
  | "announcement"
  | "servicios_index_cta";

export function buildWhatsAppUrl(message: string, source: WaSource): string {
  // Append source tag at the end of message (visible to Ivan in WhatsApp)
  const taggedMessage = `${message} [#${source}]`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(taggedMessage)}`;
}

/**
 * Fire a tracked event when a WhatsApp CTA is clicked.
 * Safe to call from onClick: no-op if GA / Clarity aren't loaded yet.
 */
export function trackWhatsAppClick(source: WaSource): void {
  if (typeof window === "undefined") return;

  // GA4 (gtag) — fires a 'whatsapp_click' event with source
  try {
    const w = window as unknown as {
      gtag?: (...args: unknown[]) => void;
      dataLayer?: unknown[];
    };
    if (typeof w.gtag === "function") {
      w.gtag("event", "whatsapp_click", {
        source,
        event_category: "engagement",
        event_label: source,
      });
    } else if (Array.isArray(w.dataLayer)) {
      // Fallback: push to dataLayer directly
      w.dataLayer.push({
        event: "whatsapp_click",
        source,
      });
    }
  } catch {
    /* no-op */
  }

  // Microsoft Clarity — tag the session with the source
  try {
    const w = window as unknown as {
      clarity?: (...args: unknown[]) => void;
    };
    if (typeof w.clarity === "function") {
      w.clarity("event", `whatsapp_click_${source}`);
    }
  } catch {
    /* no-op */
  }
}
