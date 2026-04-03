"use client";
import Link from "next/link";

// ✏️ EDITAR AQUÍ el texto de la oferta del mes
const ANNOUNCEMENT = {
  text: "🎉 OFERTA DEL MES: 10% de descuento en Lycra Lafayette al mayor",
  link: "/telas/telas-importadas/lycra-lafayette",
  linkText: "Ver tela →",
  active: true, // ← cambiar a false para ocultar la barra
};

export const AnnouncementBar = () => {
  if (!ANNOUNCEMENT.active) return null;

  return (
    <div className="w-full bg-[#157ec2] text-white text-sm font-semibold py-2 px-4 text-center flex items-center justify-center gap-2 flex-wrap">
      <span>{ANNOUNCEMENT.text}</span>
      {ANNOUNCEMENT.link && (
        <Link
          href={ANNOUNCEMENT.link}
          className="underline underline-offset-2 hover:text-blue-100 transition-colors whitespace-nowrap"
        >
          {ANNOUNCEMENT.linkText}
        </Link>
      )}
    </div>
  );
};
