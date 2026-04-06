"use client";
import Link from "next/link";

// ── CTA de agendamiento de llamada ───────────────────────────────────────────
// Reemplaza CAL_LINK con tu link de Cal.com una vez creada la cuenta:
// 1. Crea cuenta gratis en cal.com
// 2. Crea un evento "Llamada Sublink 15 min"
// 3. Reemplaza el link abajo con: https://cal.com/TU_USUARIO/llamada-sublink
const CAL_LINK = "https://cal.com/sublink/llamada";

export const PreFooter = () => {
  return (
    <section className="w-full bg-zinc-900">
      {/* ── Banda de confianza ── */}
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Izquierda — mensaje + trust indicators */}
        <div className="flex flex-col gap-5 max-w-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#157ec2]">
            Valencia, Venezuela · Desde 2018
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            ¿Listo para estampar<br className="hidden md:block" /> tu próximo proyecto?
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Más de 500 clientes confían en Sublink para sublimación textil de alta calidad.
            Entregas rápidas, desde 1 metro.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-1">
            <div className="flex items-center gap-2 bg-zinc-800 rounded-full px-4 py-2">
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-white text-xs font-bold">5.0 Google</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 rounded-full px-4 py-2">
              <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-white text-xs font-bold">Respuesta rápida</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 rounded-full px-4 py-2">
              <svg className="w-4 h-4 text-[#157ec2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white text-xs font-bold">Desde 1 metro</span>
            </div>
          </div>
        </div>

        {/* Derecha — botones de acción */}
        <div className="flex flex-col gap-3 w-full md:w-auto min-w-[260px]">
          {/* WA principal */}
          <a
            href="https://wa.me/584244067274?text=Hola%20Sublink%2C%20quiero%20cotizar%20un%20proyecto%20👋"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold rounded-xl px-6 py-4 transition-all duration-200 shadow-lg shadow-green-900/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Cotizar por WhatsApp
          </a>

          {/* Agendar llamada */}
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-zinc-700 hover:bg-[#157ec2] text-white font-bold rounded-xl px-6 py-4 transition-all duration-200 border border-zinc-600 hover:border-[#157ec2]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Agendar llamada
            <span className="text-xs font-normal text-zinc-300 ml-1">· gratis</span>
          </a>

          <p className="text-xs text-zinc-500 text-center">
            Lun – Vie · 8:30 am – 4:30 pm
          </p>
        </div>
      </div>
    </section>
  );
};
