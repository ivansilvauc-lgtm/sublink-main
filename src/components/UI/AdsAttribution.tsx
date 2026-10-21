"use client";

import { useEffect } from "react";
import { captureAdsAttribution } from "@/lib/whatsapp";

/** Se monta una vez en el layout: guarda en la sesión si el visitante llegó desde un anuncio. */
export function AdsAttribution() {
  useEffect(() => {
    captureAdsAttribution();
  }, []);
  return null;
}
