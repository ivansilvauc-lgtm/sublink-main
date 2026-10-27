import { Iconos, ITela } from "@/model/tela";

export const telas: ITela[] = [
    //******************************TELAS ECOLOGICAS****************************************** */
    {
        id: "TE001",
        nombre: 'Chiffon Liviano Eco',
        categoria: 'Telas Ecológicas',
        categoria_slug: 'telas-ecologicas',
        slug: 'chiffon-liviano-eco',
        caracteristicas: 'Chiffon',
        descripcion: 'Es una tela bastante liviana, y fluida, con una textura suave al tacto, con un acabado transparente, que permite ver la sublimación por ambas caras. Es una opción popular para ocasiones especiales debido a su aspecto etéreo y sofisticado. Es usada en para la confección de prendas femeninas como vestidos, blusas y faldas, y también en moda playera, como pareos y otros complementos.',
        composition: '100% Poliéster Reciclado',
        ancho: 1.43,
        peso: 48,
        precio: 13.5,
        usos: 'Moda, bufandas, pareos, chal.',
        tejido: 'Plano',
        rotacion: 'Si',
        base_ecologica: 'Si',
        imagen_zoom: "/img/telas/telas-ecologicas/chiffon-liviano-zoom.webp",
        imagenes: [
            "/img/telas/telas-ecologicas/chiffon-liviano-1.webp",
            "/img/telas/telas-ecologicas/chiffon-liviano-2.webp",
            "/img/telas/telas-ecologicas/chiffon-liviano-3.webp"
        ],
        iconos: [
            Iconos.PesoLigero,
            Iconos.Moda,
            Iconos.Reciclado,
        ],
        colors: [
            '#e0e0e0',
        ],
    },
    {
        nombre: 'Chiffon Textura de Lino',
        categoria: 'Telas Ecológicas',
        categoria_slug: 'telas-ecologicas',
        slug: 'chiffon-textura-de-lino',
        descripcion: 'Es una tela de peso ligero, con una textura suave, un poco traslúcida, y con un hermoso entramado del hilo, que la hace una tela muy especial. Su transparencia sutil añade un toque de sensualidad, mientras que su versatilidad permite crear capas y pliegues que dan movimiento y volumen a las prendas. Es principalmente usada en moda, como pareos, faldas, blusas y otros complementos.',
        composition: '100% Poliéster Reciclado',
        ancho: 1.43,
        peso: 70,
        precio: 13.5,
        usos: 'Moda, bufandas, pareos, blusas con transparencia.',
        tejido: 'Plano',
        rotacion: 'No',
        base_ecologica: 'Si',
        imagenes: [
            "/img/telas/telas-ecologicas/chiffon-textura-lino-1.webp",
            "/img/telas/telas-ecologicas/chiffon-textura-lino-2.webp",
        ],
        iconos: [
            Iconos.PesoLigero,
            Iconos.Moda,
            Iconos.Reciclado,
        ],
        colors: [
            '#f1f1f1',
        ],
        caracteristicas: "Chiffon",
        imagen_zoom: "/img/telas/telas-ecologicas/chiffon-textura-lino-zoom.webp",
        id: "TE0022"
    },
    {
        nombre: 'Malla Chiffon Pesada',
        categoria: 'Telas Ecológicas',
        categoria_slug: 'telas-ecologicas',
        slug: 'malla-chiffon-pesada',
        descripcion: 'Es una tela importada, tejida con un punto abierto, lo cual la hace ver traslucida y con muchísima elasticidad. Esta tela en particular tiene más cuerpo, es más densa, y tiene mayor gramaje que su homóloga, lo cual hace que sea más cómoda para cortar la tela y confeccionar piezas.',
        composition: '95% Poliéster Reciclado / 5% Elastano',
        ancho: 1.55,
        peso: 145,
        precio: 16,
        usos: 'Moda, blusas, vestidos, faldas.',
        tejido: 'Punto',
        rotacion: 'No',
        base_ecologica: 'Si',
        imagenes: [
            "/img/telas/telas-ecologicas/malla-chiffon-pesada-1.webp",
        ],
        iconos: [
            Iconos.PesoLigero,
            Iconos.Transpirable,
            Iconos.Reciclado,
        ],
        colors: [
            '#f1f1f1',
        ],
        caracteristicas: "Chiffon",
        imagen_zoom: "/img/telas/telas-ecologicas/malla-chiffon-pesada-zoom.webp",
        id: "TE004"
    },
    {
        nombre: 'Moda Colombiana',
        categoria: 'Telas Ecológicas',
        categoria_slug: 'telas-ecologicas',
        slug: 'moda-colombiana',
        descripcion: 'Es una tela importada bastante ligera, con características visuales similares al rayón, con mucha caída y fluidez, que tiene un tacto suave y un acabado mate. Además de esto, por su grosor, es una tela muy fresca, versátil y cómoda, lo cual la convierte en ideal para camisería, conjuntos de moda casual, y playeros.',
        composition: '95% Poliéster Reciclado / 5% Elastano',
        ancho: 1.43,
        peso: 78,
        precio: 18,
        usos: 'Camisería, vestidos, faldas.',
        tejido: '-',
        rotacion: 'No',
        base_ecologica: 'Si',
        imagenes: [
            "/img/telas/telas-ecologicas/moda-colombiana-1.webp",
            "/img/telas/telas-ecologicas/moda-colombiana-2.webp",
        ],
        iconos: [
            Iconos.PesoLigero,
            Iconos.Moda,
            Iconos.Reciclado,
        ],
        colors: [
            '#f1f1f1',
        ],
        caracteristicas: "-",
        imagen_zoom: "/img/telas/telas-ecologicas/moda-colombiana-zoom.webp",
        id: "TE0010"
    },
    {
        nombre: 'Lycra Ecológica',
        categoria: 'Telas Ecológicas',
        categoria_slug: 'telas-ecologicas',
        slug: 'lycra-ecologica',
        descripcion: 'La lycra ecológica con elastano Creora, ofrece una excelente elasticidad y recuperación, y se destaca por su compromiso con la sostenibilidad ambiental. Está hecha a partir de botellas PET recicladas (12 botellas por metro) y, además, utiliza tecnologías y procesos eco amigables en su producción, minimizando su impacto en el medio ambiente. Adicionalmente, es una tela con protección solar UPF30, lo cual la hace perfecta para marcas y consumidores conscientes del medio ambiente, que quieren estar protegidos en sus actividades al aire libre.',
        composition: '76% Poliéster Reciclado / 24% Creora',
        ancho: 1.55,
        peso: 280,
        precio: 19,
        usos: 'Trajes de baño UPF 20.',
        tejido: 'Punto',
        rotacion: 'Si',
        base_ecologica: 'Si',
        imagenes: [],
        iconos: [
            Iconos.FourWayStretch,
            Iconos.SweaterResist,
            Iconos.Reciclado,
        ],
        colors: [
            '#f1f1f1',
        ],
        caracteristicas: "Lycra",
        imagen_zoom: "/img/telas/telas-ecologicas/lycra-ecologica-zoom.webp",
        id: "TE006"
    },
    {
        nombre: 'Toalla Microfibra',
        categoria: 'Telas Ecológicas',
        categoria_slug: 'telas-ecologicas',
        slug: 'toalla-microfibra',
        descripcion: 'Es una fibra sintética, hecha de botellas PET recicladas, lo cual la hace un tejido muy ligero, suave, de secado rápido y compacto. Se usa para la confección de paños deportivos, ponchos, bolsos y toallas de playa, por su capacidad para repeler la arena. Tiene un tacto muy suave y una excelente absorción de colores, que garantiza colores brillantes en la sublimación.',
        composition: '100% Poliéster Reciclado',
        ancho: 1.47,
        peso: 200,
        precio: 17,
        usos: 'Paños de playa, gimnasio, ponchos, regalos pop.',
        tejido: 'Plano',
        rotacion: 'No',
        base_ecologica: 'Si',
        imagenes: [
            "/img/telas/telas-ecologicas/toalla-microfibra-1.webp",
            "/img/telas/telas-ecologicas/toalla-microfibra-2.webp",
            "/img/telas/telas-ecologicas/toalla-microfibra-3.webp",
        ],
        iconos: [
            Iconos.Polar,
            Iconos.PesoLigero,
            Iconos.Reciclado,
            Iconos.Transpirable,
        ],
        colors: [
            '#f1f1f1',
        ],
        caracteristicas: "Toalla",
        imagen_zoom: "/img/telas/telas-ecologicas/toalla-microfibra-zoom.webp",
        id: "TE008"
    },
    //******************************TELAS IMPORTADAS****************************************** */
    {
        nombre: 'Loneta Soft',
        categoria: 'Telas Importadas',
        categoria_slug: 'telas-importadas',
        slug: 'loneta-soft',
        descripcion: 'Conocida por su gran durabilidad, gruesa, con una cara satinada y otra suave (afelpada), ideal para tapicería y morralería, ya que entre sus propiedades encontramos que es una tela anti-rasgaduras y sus múltiples usos para crear cualquier accesorio o prenda que requiera robustez y alta resistencia. Se dice que es una tela pet-friendly ya que resiste arañazos, debido a su resistencia y durabilidad.',
        composition: '100% Poliuretano',
        ancho: 1.43,
        peso: 200,
        precio: 16,
        usos: 'Tapiceria, morrales, cartucheras.',
        tejido: '-',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [
            "/img/telas/telas-importadas/loneta-soft-1.webp",
        ],
        iconos: [
            Iconos.HomeDecor,
            Iconos.PetFriendly,
        ],
        colors: [
            '#f1f1f1'
        ],
        caracteristicas: "Loneta",
        imagen_zoom: "/img/telas/telas-importadas/loneta-soft-zoom.webp",
        id: "TI003"
    },
    {
        nombre: 'Microfibra Antifluido',
        categoria: 'Telas Importadas',
        categoria_slug: 'telas-importadas',
        slug: 'microfibra-antifluido',
        descripcion: 'La microfibra antifluido es un tejido innovador diseñado para repeler líquidos. Fabricada con filamentos ultrafinos, esta tela ofrece una barrera protectora contra derrames y salpicaduras accidentales, ideal para prendas que requieren resistencia al agua, como shorts playeros, uniformes médicos, batas de laboratorio y ropa de trabajo en entornos húmedos. Es suave al tacto, de acabado mate y adicionalmente es un poco stretch, lo cual la convierte en una tela que proporciona una combinación de funcionalidad y comodidad para diversas aplicaciones.',
        composition: '88% Poliester / 12% Elastano',
        ancho: 1.46,
        peso: 140,
        precio: 14.5,
        usos: 'Shorts, uniformes médicos, chaquetas.',
        tejido: '-',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [
            "/img/telas/telas-importadas/microfibra-antifluido-1.webp",
            "/img/telas/telas-importadas/microfibra-antifluido-2.webp",
        ],
        iconos: [
            Iconos.Antifluido,
        ],
        colors: [
            '#f1f1f1'
        ],
        caracteristicas: "Microfibra",
        imagen_zoom: "/img/telas/telas-importadas/microfibra-antifluido-zoom.webp",
        id: "TI004"
    },
    {
        nombre: 'Microfibra Quik',
        categoria: 'Telas Importadas',
        categoria_slug: 'telas-importadas',
        slug: 'microfibra-quik',
        descripcion: 'Es una tela importada que está fabricada con microfibras de alta calidad. Es ligera, transpirable y presenta un acabado muy mate. Su tono blanco óptico distintivo y su textura lisa y sensación al tacto fría, hacen de esta tela un tejido único. Sin elasticidad, es similar a la tela utilizada en los shorts de playa de la reconocida marca Quiksilver, ideal para prendas frescas y cómodas en climas cálidos.',
        composition: '100% Poliester',
        ancho: 1.46,
        peso: 135,
        precio: 18,
        usos: 'Shorts, uniformes médicos, chaquetas.',
        tejido: 'Plano',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [
            "/img/telas/telas-importadas/microfibra-quik-1.webp",
        ],
        iconos: [
            Iconos.Moda,
            Iconos.FacilLavado,
        ],
        colors: [
            '#f1f1f1'
        ],
        caracteristicas: "Microfibra",
        imagen_zoom: "/img/telas/telas-importadas/microfibra-quik-zoom.webp",
        id: "TI005"
    },
    {
        nombre: 'Lycra NewFlex',
        categoria: 'Telas Importadas',
        categoria_slug: 'telas-importadas',
        slug: 'lycra-newflex',
        descripcion: 'La Lycra NewFlex es una tela semi-liviana, con un sutil acabado satinado que le otorga un brillo distintivo. Destaca por su excelente adherencia al cuerpo y su capacidad de estiramiento en todas direcciones (4way-stretch). Una característica notable es su factor de protección UPF20, que resguarda la piel de los dañinos rayos solares. Es una elección popular para prendas de baño y activewear, ofreciendo comodidad, y protección bajo el sol.',
        composition: '87% Poliester / 13% Elastano',
        ancho: 1.48,
        peso: 200,
        precio: 13.5,
        usos: 'Franelas playa UPF 20',
        tejido: 'Punto',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [],
        iconos: [
            Iconos.Lycra,
            Iconos.SweaterResist,
            Iconos.FourWayStretch,
        ],
        colors: [
            '#f1f1f1'
        ],
        caracteristicas: "Lycra",
        imagen_zoom: "/img/telas/telas-importadas/lycra-colombiana-zoom.webp",
        id: "TI007",
    },
    {
        nombre: 'Lycra Peruana',
        categoria: 'Telas Importadas',
        categoria_slug: 'telas-importadas',
        slug: 'lycra-peruana',
        descripcion: 'Es conocida por ser una tela gruesa con bastante cuerpo, la cual tiene protección solar con su factor UPF30, y es perfecta para contrarrestar los rayos solares. Adicionalmente su acabado es mate le proporciona un aspecto elegante, y tiene un ancho superior a la mayoría de las telas, garantiza un rendimiento óptimo en la confección. Esta tela es perfecta para la fabricación de trajes de baño, ofreciendo tanto estilo como funcionalidad para piezas que requieran mayor soporte.',
        composition: '80% Poliester / 20% Elastano',
        ancho: 1.55,
        peso: 240,
        precio: 21,
        usos: 'Trajes de baño UPF 20',
        tejido: 'Punto',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [],
        iconos: [
            Iconos.Lycra,
            Iconos.SweaterResist,
            Iconos.FourWayStretch,
        ],
        colors: [
            '#f1f1f1'
        ],
        caracteristicas: "Lycra",
        imagen_zoom: "/img/telas/telas-importadas/lycra-peruana-zoom.webp",
        id: "TI008"
    },
    {
        nombre: 'Lycra Superpacific',
        categoria: 'Telas Importadas',
        categoria_slug: 'telas-importadas',
        slug: 'lycra-superpacific',
        descripcion: 'La Lycra Superpacific está diseñada específicamente para la confección de prendas de movimiento y rendimiento en diversas actividades físicas y de estilo activo, especialmente leggings y ropa deportiva. Tiene propiedades de secado rápido y transpirabilidad para mantener la comodidad durante el ejercicio. Es una tela bastante pesada y, por lo tanto, su principal característica es su grosor y compresión, que evita las transparencias de la ropa interior.',
        composition: '81% Poliester / 19% Elastano',
        ancho: 1.48,
        peso: 320,
        precio: 21,
        usos: 'Legging, sportwear UPF 30',
        tejido: 'Punto',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [],
        iconos: [
            Iconos.Lycra,
            Iconos.SweaterResist,
            Iconos.FourWayStretch,
        ],
        colors: [
            '#f1f1f1'
        ],
        caracteristicas: "Lycra",
        imagen_zoom: "/img/telas/telas-importadas/lycra-legging-zoom.webp",
        id: "TI009",
    },
    {
        nombre: 'Microdurazno',
        categoria: 'Telas Importadas',
        categoria_slug: 'telas-importadas',
        slug: 'microdurazno',
        descripcion: 'El Microdurazno es un tejido técnico de microfibra con un acabado superficial suave y aterciopelado, similar al tacto de la piel de un durazno. Es transpirable, de secado rápido y con excelente caída. Su superficie suave lo hace ideal para prendas deportivas, franelas de alto rendimiento y ropa casual que requiere comodidad y estilo. Compatible con sublimación.',
        composition: '100% Poliéster',
        ancho: 1.55,
        peso: 150,
        precio: 12.5,
        usos: 'Franelas, deporte, uniformes.',
        tejido: 'Punto',
        rotacion: 'Si',
        base_ecologica: 'No',
        imagenes: [
            "/img/telas/telas-importadas/dri-fit-peruano-1.webp",
        ],
        iconos: [
            Iconos.PesoLigero,
            Iconos.SoftTouch,
            Iconos.SecadoRapido,
            Iconos.Transpirable,
        ],
        colors: [
            '#f1f1f1'
        ],
        caracteristicas: "Microdurazno",
        imagen_zoom: "/img/telas/telas-importadas/dri-fit-peruano-zoom.webp",
        id: "TI012"
    },
    {
        nombre: 'Runner Africa',
        categoria: 'Telas Importadas',
        categoria_slug: 'telas-importadas',
        slug: 'runner-africa',
        descripcion: 'Se considera un tejido diseñado específicamente para satisfacer las necesidades de los corredores y atletas en general, que ofrece propiedades como la transpirabilidad, el secado rápido y la resistencia al sudor. Además, es una tela ligera, perforada y fresca. Recomendada para piezas deportivas y de uso en exteriores.',
        composition: '-',
        ancho: 1.50,
        peso: 130,
        precio: 10.5,
        usos: 'Franelas deportivas UPF 30',
        tejido: 'Punto',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [
            "/img/telas/telas-importadas/runner-importada-1.webp",
            "/img/telas/telas-importadas/runner-importada-2.webp",
        ],
        iconos: [
            Iconos.PesoLigero,
            Iconos.SecadoRapido,
            Iconos.SweaterResist,
            Iconos.Transpirable,
        ],
        colors: [
            '#f1f1f1'
        ],
        caracteristicas: "Runner",
        imagen_zoom: "/img/telas/telas-importadas/runner-importada-zoom.webp",
        id: "TI011"
    },
    //******************************TELAS NACIONALES****************************************** */
    {
        nombre: 'Atletica Nacional',
        categoria: 'Telas Nacionales',
        categoria_slug: 'telas-nacionales',
        slug: 'atletica-nacional',
        descripcion: 'Es un tejido de poliéster hecho con hilos de microfibra, que posee un diseño en troquel de microperforado, teniendo así textura. Esta tela proporciona una resistencia superior a telas similares como el drifit, por lo que la convierte en el tejido por excelencia para uniformes deportivos de alto contacto, donde el usuario está expuesto al roce y la tracción.',
        composition: '100% Poliester',
        ancho: 1.55,
        peso: 140,
        precio: 10.5,
        usos: 'Franelas, deporte.',
        tejido: 'Punto',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [
            "/img/telas/telas-nacionales/atletica-1.webp",
            "/img/telas/telas-nacionales/atletica-2.webp"
        ],
        iconos: [
            Iconos.Resistente,
        ],
        colors: [
            '#e0e0e0'
        ],
        caracteristicas: "Microfibra",
        imagen_zoom: "/img/telas/telas-nacionales/atletica-zoom.webp",
        id: "TN001"
    },
    {
        nombre: 'Crepe Nacional',
        categoria: 'Telas Nacionales',
        categoria_slug: 'telas-nacionales',
        slug: 'crepe-nacional',
        descripcion: 'Es una tela muy elegante y versátil, ya que puede ser usada por ambas caras. Un lado tiene un acabado ligeramente mate y texturizado, el otro lado tiene un acabado más brillante y liso al tacto. Es una opción popular para ocasiones formales y casuales, ya que combina comodidad con estilo. Es usada en confección de moda como blusas, blazers, vestidos y pantalones.',
        composition: '100% Poliester',
        ancho: 1.47,
        peso: 150,
        precio: 14.5,
        usos: 'Moda, pareos, blusas',
        tejido: 'Plano',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [
            "/img/telas/telas-nacionales/crepe-nacional-1.webp",
            "/img/telas/telas-nacionales/crepe-nacional-2.webp",
        ],
        iconos: [
            Iconos.Moda,
            Iconos.Textura,
        ],
        colors: [
            '#f1f1f1'
        ],
        caracteristicas: "Crepe",
        imagen_zoom: "/img/telas/telas-nacionales/crepe-nacional-zoom.webp",
        id: "TN003",
    },
    {
        nombre: 'Dri-Fit Nacional',
        categoria: 'Telas Nacionales',
        categoria_slug: 'telas-nacionales',
        slug: 'dri-fit-nacional',
        descripcion: 'El drifit es un tejido transpirable, que ofrecen un ajuste agradable y ligero, y por ser un tejido de punto, también brinda cierto grado de elasticidad que favorece la comodidad al usar este tipo de tela. Las prendas fabricadas con tejido Dri-Fit son populares en una variedad de deportes y actividades físicas, así como también para uniformes, debido a su capacidad para mantener al usuario cómodo y fresco.',
        composition: '100% Poliester',
        ancho: 1.55,
        peso: 150,
        precio: 11.5,
        usos: 'Franelas, Deporte',
        tejido: 'Punto',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [
            "/img/telas/telas-nacionales/dri-fit-nacional-1.webp",
        ],
        iconos: [
            Iconos.PesoLigero,
            Iconos.SecadoRapido,
        ],
        colors: [
            '#f1f1f1'
        ],
        id: "TN004",
        caracteristicas: "Drifit",
        imagen_zoom: "/img/telas/telas-nacionales/dri-fit-nacional-zoom.webp",
    },
    {
        nombre: 'Gabardina',
        categoria: 'Telas Nacionales',
        categoria_slug: 'telas-nacionales',
        slug: 'gabardina',
        descripcion: 'Es una tela de grosor intermedio, caracterizada por tener un acanalada diagonal, y de aspecto elegante y estructurado. Debido a su textura es una tela con estructura y tiene propiedades como la resistencia a las arrugas, fácil cuidado y secado rápido. Es ideal para la confección de uniformes, pantalones, faldas que necesitan cierto volumen, bolsos y bucket hats.',
        composition: '100% Poliester',
        ancho: 1.47,
        peso: 205,
        precio: 14.5,
        usos: 'Morrales, hogar, decoración, uniformes médicos.',
        tejido: 'Plano',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [
            "/img/telas/telas-nacionales/gabardina-1.webp",
            "/img/telas/telas-nacionales/gabardina-2.webp"
        ],
        iconos: [
            Iconos.FacilLavado,
            Iconos.Resistente,
        ],
        colors: [
            '#f1f1f1'
        ],
        id: "TN005",
        caracteristicas: "Gabardina",
        imagen_zoom: "/img/telas/telas-nacionales/gabardina-zoom.webp",
    },
    {
        nombre: 'Malla Chiffon Nacional',
        categoria: 'Telas Nacionales',
        categoria_slug: 'telas-nacionales',
        slug: 'malla-chiffon-nacional',
        descripcion: 'Es una tela abierta, traslucida, ligera y con muchísima elasticidad. Esta tela es perfecta para la confección de prendas con un toque de aire fresco y sensualidad, como salidas de playa, kimonos, vestidos, faldas o para agregar detalles transparentes a prendas, como un aplique en un traje de baño.',
        composition: '100% Poliester',
        ancho: 1.55,
        peso: 100,
        precio: 12.5,
        usos: 'Moda, blusas, vestidos, faldas.',
        tejido: 'Punto',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [
            "/img/telas/telas-nacionales/malla-chiffon-nacional-1.webp",
        ],
        iconos: [
            Iconos.PesoLigero,
            Iconos.Transpirable,
        ],
        colors: [
            '#f1f1f1'
        ],
        id: "TN006",
        caracteristicas: "Malla",
        imagen_zoom: "/img/telas/telas-nacionales/malla-chiffon-nacional-zoom.webp",
    },
    {
        nombre: 'Microfibra Nacional',
        categoria: 'Telas Nacionales',
        categoria_slug: 'telas-nacionales',
        slug: 'microfibra-nacional',
        descripcion: 'Esta tela lisa, presenta un acabado brillante y una estructura sin elasticidad. Se utiliza principalmente en la confección de chaquetas y shorts de traje de baño, debido a su resistencia al agua y durabilidad. Su versatilidad la convierte en un material adecuado para una amplia gama de proyectos textiles, combinando funcionalidad con estética, como uniformes médicos, cojines, banderines publicitarios, entre otros.',
        composition: '100% Poliester',
        ancho: 1.43,
        peso: 115,
        precio: 10.5,
        usos: 'Shorts, banderines, uniformes médicos, chaquetas.',
        tejido: 'Plano',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [
            "/img/telas/telas-nacionales/microfibra-nacional-1.webp",
        ],
        iconos: [
            Iconos.PesoLigero,
            Iconos.Antifluido,
        ],
        colors: [
            '#f1f1f1'
        ],
        id: "TN007",
        caracteristicas: "Microfibra",
        imagen_zoom: "/img/telas/telas-nacionales/microfibra-nacional-zoom.webp",
    },
    {
        nombre: 'Muselina',
        categoria: 'Telas Nacionales',
        categoria_slug: 'telas-nacionales',
        slug: 'muselina',
        descripcion: 'Es una tela que se caracteriza por ser duradera y resistente al desgaste. Considerando su tejido se recomienda para franelas que se utilizan en exteriores o uniformes deportivos, y también puede ser empleada con fines publicitarios, por su baso costo y alta resistencia.',
        composition: '100% Poliester',
        ancho: 1.43,
        peso: 135,
        precio: 10.5,
        usos: 'Franelas, backings.',
        tejido: 'Punto',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [

        ],
        iconos: [
            Iconos.PesoLigero,
        ],
        colors: [
            '#f1f1f1'
        ],
        id: "TN009",
        caracteristicas: "Muselina",
        imagen_zoom: "/img/telas/telas-nacionales/muselina-zoom.webp",
    },
    {
        nombre: 'Lycra Everlast',
        categoria: 'Telas Nacionales',
        categoria_slug: 'telas-nacionales',
        slug: 'lycra-everlast',
        descripcion: 'Es ideal para trajes de baños, se considera no muy pesada y tiene un ligero acabado con brillo. Es una buena alternativa para las marcas que desean una licra de precio accesible, sin comprometer la calidad.',
        composition: '87% Poliester/13% Elastano',
        ancho: 1.48,
        peso: 190,
        precio: 16,
        usos: 'Trajes de baño.',
        tejido: 'Punto',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [

        ],
        iconos: [
            Iconos.FourWayStretch,
        ],
        colors: [
            '#f1f1f1'
        ],
        id: "TN010",
        caracteristicas: "Lycra",
        imagen_zoom: "/img/telas/telas-nacionales/lycra-everlast-zoom.webp",
    },
    {
        nombre: 'Seda Nacional Betty',
        categoria: 'Telas Nacionales',
        categoria_slug: 'telas-nacionales',
        slug: 'seda-nacional-betty',
        descripcion: 'La seda nacional es un tejido ligero y fluido, reconocido por su suavidad al tacto y su textura lisa. Con una caída elegante y un acabado sutilmente satinado, es una opción ideal para confeccionar blusas, prendas de noche, bufandas y pareos. Su versatilidad y confort la convierten en una elección popular para quienes buscan prendas que combinen elegancia y comodidad.',
        composition: '96% Poliester/4% Elastano',
        ancho: 1.47,
        peso: 100,
        precio: 14.5,
        usos: 'Moda, pareos, bandanas, blusas, prendas de noche.',
        tejido: '-',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [
            "/img/telas/telas-nacionales/seda-nacional-1.webp"
        ],
        iconos: [
            Iconos.PesoLigero,
            Iconos.Moda,
        ],
        colors: [
            '#f1f1f1',
        ],
        id: "TN011",
        caracteristicas: "Seda",
        imagen_zoom: "/img/telas/telas-nacionales/seda-nacional-betty-zoom.webp",
    },
    //******************************TELAS ESPECIALES ---- AHORA VAN COMO IMPORTADAS ****************************************** */
    {
        nombre: 'Lycra Lafayette',
        categoria: 'Telas Importadas',
        categoria_slug: 'telas-importadas',
        slug: 'lycra-lafayette',
        descripcion: 'La Lycra Lafayette es por excelencia ideal para trajes de baños y para la práctica de deportes acuáticos debido a su resistencia, suavidad y elasticidad. Cuenta con un acabado muy suave y un excelente estiramiento en todas las direcciones. Además, cuenta con protección UPF50 que bloquea los rayos más agresivos del sol.',
        composition: '80% Poliester / 20% Elastano',
        ancho: 1.50,
        peso: 212,
        precio: 25,
        usos: 'Trajes de baño UPF 50',
        tejido: 'Punto',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [

        ],
        iconos: [
            Iconos.UPF50,
            Iconos.FourWayStretch,
            Iconos.Lycra,
            Iconos.SweaterResist
        ],
        colors: [
            '#f1f1f1'
        ],
        id: "TE0021",
        caracteristicas: "Lycra",
        imagen_zoom: "/img/telas/telas-especiales/lycra-lafayette-zoom.webp",
    },
    {
        nombre: 'Pop Sublimable',
        categoria: 'Telas Importadas',
        categoria_slug: 'telas-importadas',
        slug: 'pop-sublimable',
        descripcion: 'La tela no tejida P.O.P. sublimable es un tejido liviano, duradero y versátil, popular en la fabricación de productos promocionales, como las bolsas reutilizables, tapices y otros productos decorativos, ya que permite la impresión de colores vibrantes y detalles precisos, y es muy fácil de personalizar.',
        composition: '100% Poliester',
        ancho: 1.55,
        peso: 70,
        precio: 12.5,
        usos: 'Tote bag, tulas, bolsos.',
        tejido: 'No tejido',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [
            "/img/telas/telas-especiales/pop-sublimable-a.webp",
        ],
        iconos: [
            Iconos.PesoLigero
        ],
        colors: [
            '#f1f1f1'
        ],
        id: "TE0011",
        caracteristicas: "No tejida",
        imagen_zoom: "/img/telas/telas-especiales/pop-sublimable-zoom.webp",
    },
    {
        nombre: 'Lino Poliester',
        categoria: 'Telas Importadas',
        categoria_slug: 'telas-importadas',
        slug: 'lino-poliester',
        descripcion: 'El tejido de poliéster que simula el lino natural igualando el entramado de esta fibra, realizado con micro hilos que le dan una suavidad ideal para confeccionar ropa.',
        composition: '100% Poliester',
        ancho: 1.47,
        peso: 160,
        precio: 17,
        usos: 'Camisas, pantalones, blusas, manteles.',
        tejido: 'plano',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [
            "/img/telas/telas-especiales/lino-poliester-a.webp",
        ],
        iconos: [
            Iconos.Moda,
        ],
        colors: [
            'ffffff'
        ],
        id: "TE009",
        caracteristicas: "Textura tipo lino.",
        imagen_zoom: "/img/telas/telas-especiales/lino-poliester-zoom.webp",
    },
    {
        nombre: 'Loneta IMP 600D',
        categoria: 'Telas Importadas',
        categoria_slug: 'telas-importadas',
        slug: 'loneta-imp-600d',
        descripcion: 'El tejido de poliéster es un tejido duradero de 600 deniers que cuenta con una capa protectora posterior de poliuretano y resistente al moho e impermeable. Aplicaciones: Mochilas y equipaje, Bolsas, deportivas y de lona, monederos, toldos, delantales, etc.',
        composition: '100% Poliester + Backing PU',
        ancho: 1.47,
        peso: 240,
        precio: 16,
        usos: 'Toldo, morral, delantal, muebles.',
        tejido: 'plano',
        rotacion: 'No',
        base_ecologica: 'No',
        imagenes: [],
        iconos: [
            Iconos.Resistente,
            Iconos.Antifluido,
        ],
        colors: [
            '#f1f1f1'
        ],
        id: "TE029",
        caracteristicas: "Impermeable, resistente moho.",
        imagen_zoom: "/img/telas/telas-importadas/loneta-imp-600d-zoom.webp",
    },
];

// Ordenar alfabéticamente dentro de cada categoría (manteniendo el orden: ecológicas → importadas → nacionales)
const CATEGORY_ORDER = ['telas-ecologicas', 'telas-importadas', 'telas-nacionales'];
telas.sort((a, b) => {
    const catA = CATEGORY_ORDER.indexOf(a.categoria_slug);
    const catB = CATEGORY_ORDER.indexOf(b.categoria_slug);
    if (catA !== catB) return catA - catB;
    return a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' });
});
