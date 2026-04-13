import type { Metadata } from "next";
import Link from "next/link";
import { SUBLINK_URL } from "@/lib/constant";

export const metadata: Metadata = {
  title: "Blog | Sublink Textil Venezuela",
  description:
    "Guías, tendencias y consejos sobre telas, sublimación y el sector textil en Venezuela.",
  alternates: {
    canonical: `${SUBLINK_URL}/blog`,
  },
  robots: "noindex, nofollow",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950 px-4 pt-20">
      <div className="max-w-lg w-full text-center flex flex-col items-center gap-8">

        {/* Icono lock */}
        <div className="w-20 h-20 rounded-full bg-[#157ec2]/10 border border-[#157ec2]/30 flex items-center justify-center">
          <svg className="w-9 h-9 text-[#157ec2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        {/* Badge */}
        <span className="inline-block bg-[#157ec2]/15 text-[#157ec2] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#157ec2]/20">
          Contenido Exclusivo
        </span>

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Blog en<br />
            <span className="text-[#157ec2]">Construcción</span>
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed max-w-sm mx-auto">
            Estamos preparando guías exclusivas sobre telas, sublimación y tendencias textiles.
            Muy pronto disponibles para nuestros clientes.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-zinc-700" />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
          <a
            href={`https://wa.me/584244067274?text=${encodeURIComponent("Hola Sublink, quiero recibir el aviso cuando el blog esté disponible 📩")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm flex-1"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Avísame cuando esté listo
          </a>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm flex-1 border border-zinc-700"
          >
            ← Inicio
          </Link>
        </div>

      </div>
    </main>
  );
}
