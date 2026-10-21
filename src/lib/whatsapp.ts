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

// ── Atribución de Google Ads ──────────────────────────────────────────────
// Si el visitante llegó desde un anuncio (gclid / gbraid / wbraid o
// utm_source=google&utm_medium=cpc), se recuerda durante la sesión del navegador
// y el mensaje de WhatsApp lleva además la etiqueta [#ads].
const ADS_KEY = "sl_ads";

export function captureAdsAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const q = new URLSearchParams(window.location.search);
    const fromAds =
      q.has("gclid") ||
      q.has("gbraid") ||
      q.has("wbraid") ||
      (q.get("utm_source") === "google" && q.get("utm_medium") === "cpc");
    if (fromAds) window.sessionStorage.setItem(ADS_KEY, "1");
  } catch {
    /* sessionStorage bloqueado: sin atribución, sin error */
  }
}

export function isAdsSession(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(ADS_KEY) === "1";
  } catch {
    return false;
  }
}

/**
 * `withAds` es false por defecto para que el HTML del servidor y el primer render
 * del cliente coincidan (sin errores de hidratación). Los componentes lo activan
 * después de montar, o al hacer clic (ver WhatsAppLink / PortafolioGrid).
 */
export function buildWhatsAppUrl(message: string, source: WaSource, withAds = false): string {
  // Etiquetas al final del mensaje (las ve Ivan en WhatsApp)
  const adsTag = withAds ? " [#ads]" : "";
  const taggedMessage = `${message} [#${source}]${adsTag}`;
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
