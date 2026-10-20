export interface IServicios {
    slug: string;
    title: string;
    subtitle?: string;
    equipment_image: string;
    results_image: string;
    results_image_alt?: string;
    description: string;
    details: string[];
    advantages: string[];
    sublink: string[];
    doit: string;
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    visible?: boolean;
}

export const servicios: IServicios[] = [
    {
        slug: "sublimacion-textil-a-gran-formato",
        title: "Sublimación textil a gran formato",
        subtitle: "",
        equipment_image:"/img/servicios/1.webp",
        results_image:"/img/servicios/tela-con-guia-de-pantone.webp",
        results_image_alt: "Tela con guía de Pantone",
        metaTitle: "Sublimación Textil en Venezuela | Sublink Company",
        metaDescription: "Servicio de sublimación textil a gran formato en Venezuela. Imprimimos tus diseños en telas de poliéster con tecnología EPSON y calandras continuas de hasta 1,55 m de ancho. Capacidad de 10.000 m/mes.",
        keywords: ["sublimacion venezuela", "sublimacion textil venezuela", "sublimacion textil", "sublimacion a gran formato", "estampado textil venezuela", "sublimacion continua venezuela"],
        description: "En Venezuela, Sublink ofrece el servicio de sublimación textil a gran formato con tecnología de punta. La sublimación es la transición de un sólido a un gas sin pasar por una etapa líquida — el colorante, una vez seco, se funde directamente con el tejido de poliéster para un resultado permanente y vibrante.",
        details: [
            "La sublimación textil consiste en imprimir tus diseños sobre papel especial, utilizando impresoras con tintas de sublimación. Luego, con un equipo especializado llamado calandra, el papel impreso junto a la tela, se somete a un proceso de calentamiento a 200 °C y alta presión, logrando así transferir el diseño al tejido de poliéster.",
        ],
        advantages: [
            "Permite la transpiración en las prendas.",
            "Es un proceso muy rápido y sencillo que se puede realizar en pequeñas cantidades hasta altos volúmenes.",
            "Garantizamos que la impresión no se cae con las lavadas, ya que la tinta se hace parte del tejido.",
            "Permite hacer una impresión perfecta en los tejidos.",
            "Puedes mezclar todos los colores que quieras en la misma impresión. No hay límite de colores.",
            "No hay restricción de tamaños, más allá del ancho de la tela."
        ],
        sublink: [
            "En Sublink somos líderes en sublimación textil en Venezuela. Contamos con tecnología de impresión avanzada: plotters EPSON y calandras para sublimación continua con área de trabajo de hasta 1,55 m de ancho y capacidad instalada de 10.000 metros mensuales.",
        ],
        doit: "¡Transforma tus ideas en diseños únicos con nuestra tecnología, equipos e insumos de alta calidad!"
    },
    {
        slug: "dtf-para-marquillas-laser-toner",
        title: "DTF para marquillas LASER TONER",
        subtitle: "",
        equipment_image:"/img/servicios/4.webp",
        results_image:"/img/servicios/tela-de-color-amarillo-con-marquillas.webp",
        results_image_alt: "Tela de color amarillo con marquillas",
        metaTitle: "DTF para Marquillas Textiles en Venezuela | Sublink Company",
        metaDescription: "Impresión DTF Laser Toner para marquillas y etiquetas de prendas en Venezuela. Formato A4 y tabloide, entrega express en 1 hora. Valencia, Carabobo.",
        keywords: ["dtf marquillas venezuela", "marquillas textiles venezuela", "dtf laser toner", "etiquetas prendas venezuela", "marquillas sublink"],
        description: "El DTF es una técnica innovadora de impresión que ha venido a revolucionar la identificación de prendas, ya que, a diferencia de otras técnicas, permite una mayor flexibilidad en los tipos de telas y colores que se pueden usar.",
        details: [
            "El DTF, o “Direct to Film,” se refiere a la impresión directa sobre una lámina especial, con tintas especiales a full color, que permite estampar diseños complejos y detallados, para finalmente aplicar en la prenda con la misma técnica que un vinil textil o transfer.",
            "La duración del transfer DTF es de al menos 50 lavadas. Todo depende de la calidad de los insumos utilizados para su fabricación, así como también, de que se haya aplicado sobre la prenda con los parámetros correctos de temperatura, tiempo y presión."
        ],
        advantages: [
            "Diseños duraderos hasta 50 lavadas.",
            "Alta definición y velocidad.",
            "Producción rápida y eficiente.",
            "Se puede aplicar sobre cualquier tipo de tejido o fibra.",
            "Ideal para bajas - medias producciones o prendas.",
        ],
        sublink: [
            "En Sublink tenemos disponible nuestro DTF LASER TONER de alta velocidad, ideal para identificación de prendas (marquillas, tallines). El área de impresión es de formato A4 y tabloide, con un tiempo de entrega express de una (01) hora.",
        ],
        doit: "¡Descubre con nosotros la versatilidad y calidad del DTF para identificar tus prendas!"      
    },
    {
        slug: "dtf-industrial-continuo",
        title: "DTF Industrial Continuo",
        subtitle: "",
        equipment_image:"/img/servicios/5.webp",
        results_image:"/img/servicios/impresion-de-diseno-a-todo-color-con-film-especial.webp",
        results_image_alt: "Impresión de diseño a todo color con film especial",
        metaTitle: "DTF Industrial Continuo para Prendas en Venezuela | Sublink",
        metaDescription: "Servicio DTF industrial continuo en Venezuela. Imprimimos diseños a todo color sobre cualquier tela o prenda, 60 cm de ancho. Alta durabilidad hasta 100 lavadas.",
        keywords: ["dtf industrial venezuela", "dtf continuo venezuela", "estampado dtf venezuela", "dtf prendas venezuela", "dtf sublink"],
        description: "El DTF INDUSTRIAL consiste en imprimir diseños a todo color sobre un film especial. Luego, se aplica un polvo adhesivo y se cura con calor. Finalmente, el diseño se transfiere a la prenda como cualquier transfer o vinil, ofreciendo resultados vibrantes y duraderos.",
        details: [
            "La impresión DTF es, por tanto, un método digital en donde se usa una impresora, que inyecta una base de tinta color blanco sobre la impresión de color CMYK. Este respaldo de tinta blanca es la que soporta el polvo de poliamida y es la que le proporciona elasticidad y colores vivos, sobre cualquier color de prenda.",
        ],
        advantages: [
            "Full personalización sin límites de color.",
            "Diseños duraderos hasta 50-100 lavadas.",
            "Producción rápida y eficiente.",
            "Fácil de usar y aplicar.",
            "Ahorro de costos.",
            "Se puede aplicar sobre cualquier tipo de tejido o fibra.",
            "Ideal para bajas - medias producciones o prendas.",
        
        ],
        sublink: [
            "En Sublink tenemos disponible nuestro DTF industrial de impresión continua, el cual cuenta con un ancho de impresión de 60 cm. Utilizamos tintas DTF especiales que garantizan alta durabilidad y flexibilidad.",
        ],
        doit: "¡Personaliza tus prendas y dale vida a tus creaciones con nuestro DTF Industrial!"      
    },
    {
        slug: "corte-laser-textil",
        title: "Corte Laser Textil",
        subtitle: "",
        equipment_image:"/img/servicios/3.webp",
        results_image:"/img/servicios/proceso-de-corte-laser-sobre-textil.webp",
        results_image_alt: "Proceso de corte láser sobre textil",
        metaTitle: "Corte Láser Textil en Venezuela | Sublink Company",
        metaDescription: "Servicio de corte láser para telas en Venezuela. Cortes precisos en poliéster, telas sublimadas y más. Área de trabajo 1,8m x 2,4m. Valencia, Carabobo.",
        keywords: ["corte laser textil venezuela", "corte laser telas venezuela", "corte laser confeccion", "corte laser sublink", "corte laser valencia venezuela"],
        description: "El servicio de corte láser textil es una innovadora solución que viene a revolucionar la industria de la confección y la fabricación textil. Esta tecnología permite seccionar tejidos de manera precisa y eficiente, realizando cortes precisos y limpios.",
        details: [
            "La máquina Cortadora Láser cuenta con un láser diseñado para concentrar un haz de luz en un punto específico y cortar así distintos materiales. En el caso de los tejidos sintéticos como el poliéster, el calor del láser sella los bordes y evita que se deshilachen.",
            "Se utiliza para cortar patrones de ropa, decoración del hogar, calzado y otros artículos textiles, y puede ser empleado en telas tanto naturales como sintéticos, así como unicolores o sublimadas.",
        ],
        advantages: [
            "Piezas cortadas a láser son exactas y precisas.",
            "Proceso rápido y eficiente, que reduce los tiempos de entrega de una producción.",
            "Disminución de residuos, lo que lo convierte en una opción más sostenible.", 
            "Reducción de costos, gracias a un mayor aprovechamiento de la tela.",       
        ],
        sublink: [
            "En Sublink contamos con una cortadora laser de doble puntero, con área de trabajo continua de 1,8m ancho x 2,4m largo. Ofrecemos a diseñadores, talleres de confección y empresas textiles, la capacidad de materializar sus creaciones de manera más rápida y precisa que nunca.",
        ], 
        doit: "Descubre cómo podemos ayudarte a transformar tu producción con precisión y eficiencia incomparables."      
    },
    {
        slug: "etiquetas-nylon-y-silicon-monocromaticas",
        title: "Etiquetas Nylon y Silicon Monocromáticas",
        subtitle: "(Resina Negra)",
        equipment_image:"/img/servicios/8.webp",
        results_image:"/img/servicios/multiples-etiquetas-de-silicon-para-ropa.webp",
        results_image_alt: "Múltiples etiquetas de silicon para ropa",
        metaTitle: "Etiquetas de Nylon y Silicon para Ropa Venezuela | Sublink",
        metaDescription: "Etiquetas de nylon y silicon monocromáticas para prendas en Venezuela. Resistentes al lavado, ideales para marquillas de ropa. Valencia, Carabobo.",
        keywords: ["etiquetas nylon ropa venezuela", "etiquetas silicon prendas", "marquillas nylon venezuela", "etiquetas textiles venezuela", "etiquetas sublink"],
        description: "Seguramente conoces muy bien este tipo de etiquetas, ya que toda tu ropa generalmente lleva una con instrucciones de lavado, de planchado, con la talla, con la descripción o simplemente con la marca de quien la elaboró.",
        details: [
            "Las etiquetas de Nylon tienen una gran resistencia, por lo cual soportan varias lavadas sin deteriorarse. Generalmente son usadas para la ropa o productos elaborados con tela que requieren ser lavados constantemente.",
            "Las etiquetas de Silicon transparentes para ropa, son de un material suave y flexible. Estas etiquetas son resistentes al agua, salitre, al calor (hasta 50°C) y a la abrasión, lo que las hace ideales para productos que se lavan y se usan con frecuencia, y productos outdoor y beachwear.",
        ],
        advantages: [
            "Identificación clara de tu marca.",
            "Control de calidad como normativas y certificaciones.",
            "Incrementa el valor añadido a la prenda.",
            "Agrega información importante como instrucciones de cuidado y composición del material.",   
        ],
        sublink: [
            "En Sublink te ayudamos a identificar tus prendas con tallines o marquillas, que son esenciales para informar y guiar a los consumidores, y que también ofrece múltiples beneficios en términos de branding, control de calidad, y seguridad.",
        ],
        doit: "¡Mejora significativamente la percepción de tu producto y fortalece la relación con tus clientes con nuestras etiquetas personalizadas!"      
    },
    {
        slug: "servicio-de-costura",
        visible: false,
        title: "Servicio de Costura",
        subtitle: "",
        equipment_image: "/img/servicios/6.webp",
        results_image: "/img/servicios/7.webp",
        results_image_alt: "Prendas confeccionadas en Sublink",
        metaTitle: "Servicio de Costura Textil en Venezuela | Sublink Company",
        metaDescription: "Servicio de costura y confección textil en Venezuela. Confeccionamos tus prendas con las telas de tu elección, con acabados de calidad y entregas a tiempo.",
        keywords: ["costura venezuela", "confeccion textil venezuela", "confeccion de prendas", "taller de costura valencia venezuela", "servicio costura sublink"],
        description: "En Sublink ofrecemos un servicio integral de costura y confección textil. Damos vida a tus diseños transformando nuestras telas en prendas terminadas, con el nivel de detalle y calidad que tu marca merece.",
        details: [
            "Nuestro servicio de costura está orientado a marcas, emprendedores y talleres de confección que buscan un aliado confiable para la producción de sus prendas. Trabajamos con las telas de nuestro catálogo o con las tuyas, y confeccionamos desde pequeñas corridas hasta volúmenes medianos.",
            "El proceso incluye la revisión del patrón o muestra de referencia, la selección del material, el corte y la confección con máquinas industriales, y la entrega de la prenda terminada con el acabado acordado.",
        ],
        advantages: [
            "Producción desde pequeñas cantidades.",
            "Trabajamos con telas propias o del cliente.",
            "Acabados de calidad con máquinas industriales.",
            "Posibilidad de sublimar, estampar o colocar marquillas en el mismo proceso.",
            "Tiempos de entrega pactados desde el inicio.",
        ],
        sublink: [
            "En Sublink integramos el servicio de costura con nuestro ecosistema textil: sublimación, corte láser y etiquetado, para que puedas recibir tu prenda 100% terminada en un solo lugar.",
        ],
        doit: "¡Convierte tu idea en una prenda real con nuestro servicio de costura profesional!"
    },

]