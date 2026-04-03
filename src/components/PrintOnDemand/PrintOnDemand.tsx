import Image from "next/image";

export const PrintOnDemandSection = () => {
  return (
    <section className="w-full bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Text content */}
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#157ec2] mb-4">
            Sublimación Digital
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Estampa tus diseños<br />en cualquier tela
          </h2>

          <ul className="space-y-3 mb-6">
            {[
              "Impresión desde 1 metro hasta rollo completo",
              "Compatible con más de 25 telas",
              "Colores vibrantes que no se caen con los lavados ni se agrietan",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <span className="mt-1 w-5 h-5 rounded-full bg-[#157ec2] flex-shrink-0 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>

          {/* Technology line + logos */}
          <p className="text-sm text-gray-500 mb-3">
            Usamos tintas y materiales de primera calidad para lograr estampados nítidos y de alta durabilidad. Tecnología Epson y Monti Antoni.
          </p>
          <div className="flex items-center gap-4 mb-8">
            {/* Epson logo chip */}
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5">
              <svg viewBox="0 0 80 22" className="h-5 w-auto" aria-label="Epson">
                <text x="0" y="17" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#003087" letterSpacing="1">EPSON</text>
              </svg>
            </div>
            {/* Monti Antoni logo chip */}
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5">
              <svg viewBox="0 0 120 22" className="h-5 w-auto" aria-label="Monti Antoni">
                <text x="0" y="17" fontFamily="Georgia, serif" fontWeight="bold" fontSize="14" fill="#1a1a1a" letterSpacing="0.5">MONTI ANTONIO</text>
              </svg>
            </div>
          </div>

          {/* Buttons — ambos inactivos */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              disabled
              title="Próximamente"
              className="inline-flex items-center justify-center gap-2 bg-[#157ec2]/50 text-white font-bold px-7 py-3.5 rounded-full cursor-not-allowed text-sm uppercase tracking-wide"
            >
              Print FREE
              <span className="text-xs font-normal normal-case opacity-80">(próximamente)</span>
            </button>

            <button
              disabled
              title="Próximamente"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-400 font-bold px-7 py-3.5 rounded-full cursor-not-allowed text-sm uppercase tracking-wide"
            >
              🔒 Sube tu Print
              <span className="text-xs font-normal normal-case">(próximamente)</span>
            </button>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative w-full h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/img/telas/telas-importadas/lycra-peruana-zoom.webp"
            alt="Sublimación textil en telas Sublink"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-lg font-bold">Print on Demand</p>
            <p className="text-sm text-white/80">Desde 1 metro · Sin inventario</p>
          </div>
        </div>
      </div>
    </section>
  );
};
