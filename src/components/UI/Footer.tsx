"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/584162698802?text=Vengo%20de%20la%20Web",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sublink.ve",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sublink.ve",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Telas", href: "/" },
  { label: "Servicios", href: "/" },
  { label: "Sostenibilidad", href: "/sostenibilidad" },
  { label: "Blog", href: "/blog" },
];

const FAQ_ITEMS = [
  {
    q: "¿Cuál es el pedido mínimo?",
    a: "Desde 1 metro lineal de tela. No hay cantidad mínima para estampación si el diseño ya está preparado.",
  },
  {
    q: "¿Cuánto tiempo tarda la producción?",
    a: "Entre 24 y 72 horas hábiles según la cantidad y complejidad. Pedidos urgentes consultar disponibilidad.",
  },
  {
    q: "¿Los colores se lavan sin desteñirse?",
    a: "Sí. La sublimación fija el tinte en la fibra. Se recomienda lavar a 30°C al revés y sin blanqueador.",
  },
  {
    q: "¿Puedo subir mi propio diseño?",
    a: "Claro. Aceptamos PDF, PNG, AI y PSD a 300 DPI mínimo en perfil de color RGB.",
  },
  {
    q: "¿Qué telas admiten sublimación?",
    a: "100% poliéster o mezcla poliéster+elastano. En blanco o colores muy claros para máxima fidelidad de color.",
  },
];

const GUIA_ITEMS = [
  {
    q: "Resolución y formato del archivo",
    a: "Mínimo 150 DPI para telas grandes, 300 DPI para prendas. Formatos: PDF, PNG, AI, PSD. Enviar en perfil RGB.",
  },
  {
    q: "Perfil de color: RGB vs CMYK",
    a: "Diseña siempre en RGB. Nosotros hacemos la conversión al perfil de impresión Epson para garantizar fidelidad de color en la tela.",
  },
  {
    q: "Márgenes y sangría",
    a: "Agrega 5 mm de sangría en todos los bordes. Para prendas tipo camiseta, respeta 1.5 cm de margen desde las costuras.",
  },
  {
    q: "Colores: Pantone y referencias",
    a: "Si tienes un Pantone específico, indícanos el código. Referencia por guía Pantone Solid Coated para máxima precisión.",
  },
  {
    q: "Prueba de color (muestra)",
    a: "Recomendamos solicitar una muestra de 0.5 m antes de producir grandes cantidades. Costo de muestra aplica.",
  },
];

function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-1">
      {items.map((item, i) => (
        <div key={i} className="border-b border-zinc-800 last:border-0">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-2 py-2.5 text-left text-sm text-zinc-300 hover:text-white transition-colors"
          >
            <span className="font-medium leading-snug">{item.q}</span>
            <svg
              className={`w-4 h-4 flex-shrink-0 text-zinc-500 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <p className="pb-3 text-xs text-zinc-400 leading-relaxed pr-4">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 w-full">
      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — Logo + tagline + redes */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/assets/logo-sublink-marca-de-agua.png"
            width={160}
            height={40}
            alt="Logo Sublink"
            className="w-36 h-auto"
          />
          <p className="text-sm text-zinc-400 leading-relaxed max-w-[200px] text-center">
            Sublimación textil, telas y estampados de alta calidad en Valencia, Venezuela.
          </p>
          <div className="flex gap-3 mt-1">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-[#157ec2] flex items-center justify-center text-zinc-300 hover:text-white transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Badge DPI — slogan de marca */}
          <div className="mt-3 flex flex-col items-center gap-1 border border-zinc-700 rounded-xl px-4 py-3 w-full max-w-[180px]">
            <div className="flex items-baseline gap-[3px]">
              <span className="text-[22px] font-black tracking-tight text-white leading-none">D</span>
              <span className="text-[22px] font-black tracking-tight text-[#157ec2] leading-none">P</span>
              <span className="text-[22px] font-black tracking-tight text-white leading-none">I</span>
            </div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-500 leading-tight text-center whitespace-nowrap">
              diseña · imprime · plancha
            </p>
          </div>
        </div>

        {/* Col 2 — Contacto */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">Contacto</h4>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Av. 137, CC Imperial II 3-08<br />
            Piso 3 (frente CC Galería)<br />
            Valencia, Carabobo, Venezuela
          </p>
          <a href="tel:+584244067274" className="text-sm text-zinc-400 hover:text-white transition-colors">
            +58 424-4067274
          </a>
          <a href="mailto:sublinkve@gmail.com" className="text-sm text-zinc-400 hover:text-white transition-colors">
            sublinkve@gmail.com
          </a>
          <p className="text-xs text-zinc-500 mt-1">Lun – Vie · 8:30 am – 4:30 pm</p>

          {/* Navegación rápida */}
          <div className="mt-3 flex flex-col gap-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">Navegación</h4>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3 — Preguntas Frecuentes */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">Preguntas Frecuentes</h4>
          <Accordion items={FAQ_ITEMS} />
        </div>

        {/* Col 4 — Guía de Impresión */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">Guía de Impresión</h4>
          <Accordion items={GUIA_ITEMS} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800 py-5 px-6 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-6xl mx-auto">
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Sublink C.A. · Valencia, Venezuela
        </p>
        <Link
          href="https://www.sublink.company"
          className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          sublink.company
        </Link>
      </div>
    </footer>
  );
};
