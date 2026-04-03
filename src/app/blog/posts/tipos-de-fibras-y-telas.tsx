export default function TiposDeFibras() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Entender las fibras textiles es la base para elegir la tela correcta en
        cualquier proyecto. Esta guía cubre los cuatro grandes grupos de fibras,
        cómo se miden los hilos, los tipos de tejidos y los acabados técnicos que
        determinan el comportamiento final de cada tela.
      </p>

      {/* ── FIBRAS ── */}
      <h2>1. Tipos de fibras textiles</h2>
      <p>
        Toda tela comienza con una fibra. Las fibras se dividen en cuatro
        categorías según su origen y proceso de fabricación:
      </p>

      {/* Naturales */}
      <h3>🌿 Fibras Naturales</h3>
      <p>
        Provienen directamente de la naturaleza — plantas o animales — sin
        transformaciones químicas significativas. Son transpirables, biodegradables
        y cómodas al tacto.
      </p>
      <ul>
        <li><strong>Algodón:</strong> la fibra más usada en el mundo. Suave, absorbente y fresco. Ideal para ropa casual, uniformes y ropa de cama.</li>
        <li><strong>Lana:</strong> fibra animal de oveja. Excelente aislante térmico, resistente y elástica. Para suéteres, abrigos y accesorios de invierno.</li>
        <li><strong>Lino:</strong> fibra vegetal de la planta del lino. Fresco, resistente y con textura característica. Muy popular en moda y ropa de verano.</li>
        <li><strong>Seda:</strong> fibra animal del gusano de seda. La más suave y brillante de todas. Para prendas de lujo, accesorios y ropa de noche.</li>
      </ul>

      {/* Sintéticas */}
      <h3>⚗️ Fibras Sintéticas</h3>
      <p>
        Fabricadas a partir de petroquímicos mediante procesos químicos. Son
        durables, resistentes y de bajo costo, aunque menos transpirables que las
        naturales.
      </p>
      <ul>
        <li><strong>Poliéster:</strong> la fibra sintética más producida. Resistente, de secado rápido y compatible con sublimación digital. Base de la mayoría de telas deportivas.</li>
        <li><strong>Nylon (Poliamida):</strong> extremadamente resistente al desgaste y a la abrasión. Usada en ropa de baño, medias y equipos técnicos.</li>
        <li><strong>Acrílico:</strong> imita la lana a menor costo. Para suéteres, mantas y tejidos de punto económicos.</li>
        <li><strong>Elastano (Lycra / Spandex):</strong> fibra elástica por excelencia — puede estirarse hasta 5 veces su tamaño original. Siempre se mezcla con otras fibras para dar elasticidad.</li>
      </ul>

      {/* Artificiales */}
      <h3>🧪 Fibras Artificiales</h3>
      <p>
        Derivadas de celulosa natural (madera, bambú) transformada químicamente.
        Combinan la suavidad de las naturales con la versatilidad de las sintéticas.
      </p>
      <ul>
        <li><strong>Viscosa:</strong> suave, brillante y fresca. Similar a la seda pero más económica. Muy usada en blusas, vestidos y forros.</li>
        <li><strong>Rayón:</strong> variante de la viscosa con mayor caída. Ideal para ropa de verano y moda casual.</li>
        <li><strong>Modal:</strong> fibra de madera de haya. Más suave que el algodón, muy absorbente y resistente al lavado. Para ropa interior y prendas íntimas.</li>
        <li><strong>Acetato:</strong> imita la seda a bajo costo. Para forros, vestidos de fiesta y accesorios.</li>
      </ul>

      {/* Sostenibles */}
      <h3>♻️ Fibras Sostenibles</h3>
      <p>
        El futuro del textil. Producidas con menor impacto ambiental, algunas a
        partir de materiales reciclados o cultivos de bajo consumo hídrico.
      </p>
      <ul>
        <li><strong>Bambú:</strong> crece rápido sin pesticidas, produciendo una fibra suave, antibacteriana y biodegradable.</li>
        <li><strong>Cáñamo:</strong> planta de bajo impacto ambiental. Fibra resistente, transpirable y duradera.</li>
        <li><strong>Eco Fibra (PET Reciclado):</strong> elaborada a partir de botellas plásticas recicladas. En Sublink trabajamos con lycra ecológica brasilera de este tipo.</li>
        <li><strong>Lyocell (Tencel):</strong> producida en circuito cerrado sin residuos químicos. Extremadamente suave y biodegradable.</li>
      </ul>

      {/* ── TITULACIÓN ── */}
      <h2>2. Titulación de hilados: ¿cómo se miden los hilos?</h2>
      <p>
        La titulación indica el grosor de un hilo — a mayor número, más fino es
        el hilo. Existen tres sistemas principales:
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">Sistema</th>
              <th className="p-3 text-left">Fibras</th>
              <th className="p-3 text-left">Relación</th>
              <th className="p-3 text-left">Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-3 font-bold text-blue-700">Ne (Número Inglés)</td>
              <td className="p-3">Algodón y sus mezclas</td>
              <td className="p-3">840 yardas pesan 1 libra</td>
              <td className="p-3">30/1 — hilo fino de algodón</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 font-bold text-blue-700">Nm (Número Métrico)</td>
              <td className="p-3">Acrílico, lana y mezclas</td>
              <td className="p-3">20 m pesan 1 gr = 20 km / 1 kg</td>
              <td className="p-3">20/1 — hilo grueso de lana</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-3 font-bold text-blue-700">Denier (Den)</td>
              <td className="p-3">Poliéster, nylon y elastano</td>
              <td className="p-3">1 gramo / 9.000 metros</td>
              <td className="p-3">75D — 100D — 150D</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Regla práctica:</strong> en los sistemas Ne y Nm, los números son
        inversamente proporcionales al grosor — un hilo 30/1 es más fino que uno
        20/1. En Denier ocurre lo contrario: mayor Denier = hilo más grueso.
      </p>

      {/* ── TEJIDOS ── */}
      <h2>3. Tipos de tejidos</h2>

      <h3>🔵 Tejido de Punto (Knit)</h3>
      <p>
        Formado por lazadas entrelazadas. Elástico, suave y cómodo. Es el tejido
        de la mayoría de la ropa deportiva y casualwear:
      </p>
      <ul>
        <li><strong>Jersey:</strong> el más básico, suave por un lado y con textura por el otro. Para camisetas y ropa casual.</li>
        <li><strong>Piqué:</strong> textura en relieve. Para chemises (polos), uniformes y ropa deportiva.</li>
        <li><strong>Interlock:</strong> doble jersey, más grueso y estable. Para ropa interior y prendas de mayor cuerpo.</li>
        <li><strong>Rib (Canalé):</strong> líneas verticales, muy elástico. Para cuellos, puños y ropa ajustada.</li>
        <li><strong>Fleece:</strong> interior suave y esponjoso. Para sudaderas, busos y ropa de abrigo.</li>
        <li><strong>French Terry:</strong> interior con bucles, más ligero que el fleece. Para joggers y conjuntos deportivos.</li>
        <li><strong>Jacquard:</strong> con patrones y diseños tejidos directamente en la tela. Para prendas premium.</li>
      </ul>

      <h3>📐 Tejido Plano (Woven)</h3>
      <p>
        Formado por hilos que se entrecruzan en ángulo recto. Más rígido y
        estructurado que el punto, sin elasticidad natural:
      </p>
      <ul>
        <li><strong>Tafeta:</strong> liso y ligeramente traslúcido. Para banderines, forros y ropa de ceremonia.</li>
        <li><strong>Popelina:</strong> ligero y suave. Para camisería formal y blusas.</li>
        <li><strong>Twill (Sarga):</strong> diagonal característico. Base del denim y muchas gabardinas.</li>
        <li><strong>Rib-Stop:</strong> reforzado con una cuadrícula visible. Para ropa táctica, outdoor y cargo.</li>
        <li><strong>Denim y Bull Denim:</strong> pesado y resistente. Para jeans, chaquetas y pantalones de trabajo.</li>
        <li><strong>Drill:</strong> sarga fuerte y duradera. Para uniformes de trabajo, pantalones y overoles.</li>
        <li><strong>Oxford:</strong> estructura de cesta. Para camisas casuales y formales.</li>
        <li><strong>Gabardina:</strong> diagonal fino y apretado. Para pantalones de uniforme y ropa de oficina.</li>
      </ul>

      <h3>🕸️ Tejido Tricot (Género de Punto por Urdimbre)</h3>
      <p>
        Se produce en máquinas especiales y tiene estructura más estable que el
        punto circular:
      </p>
      <ul>
        <li><strong>Kettling:</strong> para trajes de baño, ropa íntima y mallas deportivas.</li>
        <li><strong>Rachel:</strong> base de blondas, encajes y tull decorativo.</li>
        <li><strong>Rectilíneas:</strong> para cuellos, puños y sweaters de calidad.</li>
      </ul>

      {/* ── ACABADOS ── */}
      <h2>4. Acabados textiles</h2>
      <p>
        Los acabados son procesos aplicados a la tela terminada para mejorar sus
        propiedades funcionales o estéticas:
      </p>

      <h3>Acabados básicos (estética)</h3>
      <ul>
        <li><strong>Perchado:</strong> crea una superficie suave y velluda (como el polar).</li>
        <li><strong>Esmerilado:</strong> acabado tipo "durazno" — muy suave al tacto. Ver Microdurazno.</li>
        <li><strong>Tundido:</strong> corta el pelo del tejido para un acabado uniforme y liso.</li>
        <li><strong>Bondeado:</strong> une dos telas para crear una sola con mayor cuerpo.</li>
      </ul>

      <h3>Acabados técnicos (funcionales)</h3>
      <ul>
        <li><strong>Secado rápido (Quick Dry):</strong> acelera la evaporación del sudor. Esencial en ropa deportiva.</li>
        <li><strong>Protección UV:</strong> bloquea los rayos ultravioleta. Factor UPF 30–50+.</li>
        <li><strong>Transpirabilidad:</strong> permite el paso del aire para regular la temperatura corporal.</li>
        <li><strong>Impermeabilidad (DWR):</strong> repele el agua sin bloquear la transpirabilidad.</li>
        <li><strong>Control de olores:</strong> tratamiento antibacteriano que inhibe el crecimiento de bacterias causantes de mal olor.</li>
      </ul>

      {/* ── GUÍA RÁPIDA ── */}
      <h2>5. Guía de asociación: ¿qué tejido para cada prenda?</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="p-3 text-left">Prenda</th>
              <th className="p-3 text-left">Tejido recomendado</th>
              <th className="p-3 text-left">Telas en Sublink</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Franelas / Camisetas", "Jersey punto", "Drifit Nacional, Drifit Peruano, Atlética"],
              ["Pijamas", "Jersey / Interlock 30/1", "Microfibra Nacional"],
              ["Suéteres / Sweaters", "Fleece, French Terry", "Fleece, French Terry"],
              ["Joggers / Pantalones", "Fleece, French Terry", "Fleece, French Terry"],
              ["Chemises (Polos)", "Piqué Soft", "Piqué Soft"],
              ["Camisería formal", "Tafeta, Popelina, Oxford", "Microfibra Nacional"],
              ["Uniformes / Delantales", "Rib-Stop, Gabardina, Drill", "Gabardina, Muselina"],
              ["Jeans / Cargo", "Denim, Rib-Stop", "Loneta, Bull Denim"],
              ["Trajes de baño", "Tricot Kettling", "Lycra Lafayette, Lycra Peruana"],
            ].map(([prenda, tejido, telas], i) => (
              <tr key={i} className={i % 2 === 0 ? "border-b border-gray-200" : "border-b border-gray-200 bg-gray-50"}>
                <td className="p-3 font-semibold">{prenda}</td>
                <td className="p-3 text-gray-600">{tejido}</td>
                <td className="p-3 text-blue-700 font-medium">{telas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
        <p className="font-semibold text-blue-900 mb-2">
          💡 ¿Necesitas asesoría sobre fibras o tejidos para tu proyecto?
        </p>
        <p className="text-blue-800">
          En Sublink contamos con el conocimiento técnico para ayudarte a elegir
          la tela correcta. Escríbenos por WhatsApp y te asesoramos sin costo.
        </p>
      </div>
    </article>
  );
}
