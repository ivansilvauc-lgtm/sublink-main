import Link from "next/link";

const linkCls = "text-primary font-medium underline underline-offset-2 hover:opacity-80";

/** Bloque de texto con enlaces internos contextuales (SEO): telas, servicios, sostenibilidad y portafolio. */
export const HomeEnlaces = () => (
  <section className="w-full bg-white py-10 px-4" aria-labelledby="home-enlaces-titulo">
    <div className="max-w-4xl mx-auto">
      <h2 id="home-enlaces-titulo" className="text-xl sm:text-2xl font-semibold text-zinc-800 mb-3">
        Sublimación textil continua en Valencia, Venezuela
      </h2>
      <p className="text-zinc-600 leading-relaxed mb-3">
        En Sublink Company imprimimos tu diseño directamente en la tela, desde 1 metro, con{" "}
        <Link href="/servicios/sublimacion-textil-a-gran-formato" className={linkCls}>sublimación textil a gran formato</Link>.
        Elige entre nuestro <Link href="/telas" className={linkCls}>catálogo de telas</Link> nacionales,
        importadas y ecológicas, o conoce nuestra línea de{" "}
        <Link href="/sostenibilidad" className={linkCls}>telas ecológicas y sostenibilidad</Link>.
      </p>
      <p className="text-zinc-600 leading-relaxed mb-3">
        Además de la sublimación ofrecemos{" "}
        <Link href="/servicios/dtf-industrial-continuo" className={linkCls}>DTF industrial continuo</Link>,{" "}
        <Link href="/servicios/dtf-para-marquillas-laser-toner" className={linkCls}>DTF para marquillas láser tóner</Link>,{" "}
        <Link href="/servicios/corte-laser-textil" className={linkCls}>corte láser textil</Link> y{" "}
        <Link href="/servicios/etiquetas-nylon-y-silicon-monocromaticas" className={linkCls}>etiquetas de nylon y silicón</Link>.
        Revisa todos <Link href="/servicios" className={linkCls}>nuestros servicios</Link>.
      </p>
      <p className="text-zinc-600 leading-relaxed">
        Mira en el <Link href="/portafolio" className={linkCls}>portafolio</Link> los proyectos que hemos
        producido para marcas de trajes de baño, uniformes y moda, y escríbenos para cotizar el tuyo.
      </p>
    </div>
  </section>
);
