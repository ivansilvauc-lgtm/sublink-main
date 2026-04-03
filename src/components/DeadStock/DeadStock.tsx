import Link from "next/link";

// ── DeadStock items — update these whenever stock changes ─────────────────────
// To add a new item: copy a block, fill in the fields, and set available: true
// To remove from display: set available: false
const deadstockItems = [
  {
    nombre: "Lycra Colombiana",
    descripcion: "Lycra importada de Colombia con UPF 20. Ideal para trajes de baño y franelas de playa.",
    metros: 45,
    descuento: 30,
    color: "#a8d5f5",
    colorNombre: "Azul Cielo",
    slug: "lycra-colombiana",
    categoria_slug: "telas-importadas",
    available: true,
  },
  {
    nombre: "Microfibra Antifluido",
    descripcion: "Microfibra con barrera antifluido certificada. Perfecta para uniformes médicos y chaquetas.",
    metros: 28,
    descuento: 25,
    color: "#c8e6c9",
    colorNombre: "Verde Quirúrgico",
    slug: "microfibra-antifluido",
    categoria_slug: "telas-importadas",
    available: true,
  },
  {
    nombre: "Runner Africa",
    descripcion: "Tela deportiva de alta absorción con protección UV. Para franelas y ropa de entrenamiento.",
    metros: 33,
    descuento: 20,
    color: "#f8bbd0",
    colorNombre: "Rosa Coral",
    slug: "runner-africa",
    categoria_slug: "telas-importadas",
    available: true,
  },
];

const activeItems = deadstockItems.filter((i) => i.available);

export const DeadStock = () => {
  if (activeItems.length === 0) return null;

  return (
    <section className="w-full bg-zinc-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-yellow-400 text-zinc-900 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                Stock Limitado
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
              Dead Stock
            </h2>
            <p className="text-zinc-400 mt-2 max-w-md text-sm">
              Rollos en cantidad limitada con descuento especial. Cuando se acaban, se acaban.
            </p>
          </div>
          <Link
            href="https://wa.me/584162698802?text=Hola%2C%20me%20interesa%20el%20Dead%20Stock"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-zinc-900 font-bold px-5 py-2.5 rounded-full transition-colors text-sm whitespace-nowrap self-start sm:self-auto"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar por WhatsApp
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeItems.map((item) => (
            <div
              key={item.slug}
              className="bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 hover:border-yellow-400/50 transition-all duration-200 group"
            >
              {/* Color swatch strip */}
              <div
                className="h-2 w-full"
                style={{ backgroundColor: item.color }}
                aria-hidden="true"
              />

              <div className="p-5">
                {/* Discount badge */}
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-block bg-yellow-400 text-zinc-900 text-xs font-black px-2.5 py-1 rounded-full">
                    -{item.descuento}% OFF
                  </span>
                  <span className="text-zinc-400 text-xs font-medium">
                    {item.metros} metros disponibles
                  </span>
                </div>

                {/* Color dot + name */}
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-4 h-4 rounded-full border border-zinc-600 flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                    aria-hidden="true"
                  />
                  <span className="text-zinc-400 text-xs">{item.colorNombre}</span>
                </div>

                {/* Fabric name */}
                <h3 className="text-white font-bold text-lg mb-2 leading-tight group-hover:text-yellow-400 transition-colors">
                  {item.nombre}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {item.descripcion}
                </p>

                {/* CTA */}
                <div className="flex gap-3">
                  <Link
                    href={`/telas/${item.categoria_slug}/${item.slug}`}
                    className="flex-1 text-center text-xs font-bold text-zinc-300 hover:text-white border border-zinc-600 hover:border-zinc-400 rounded-full py-2 transition-colors"
                  >
                    Ver ficha
                  </Link>
                  <Link
                    href={`https://wa.me/584162698802?text=Hola%2C%20me%20interesa%20el%20Dead%20Stock%20de%20${encodeURIComponent(item.nombre)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-zinc-900 rounded-full py-2 transition-colors"
                  >
                    Lo quiero
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-zinc-600 text-xs mt-8">
          Los precios de Dead Stock aplican sobre el precio base de lista. Sujeto a disponibilidad.
        </p>
      </div>
    </section>
  );
};
