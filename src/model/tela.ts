export enum Iconos {
    FourWayStretch = "/assets/iconos/icono-4-way-stretch.webp",
    Antifluido = "/assets/iconos/icono-antifluido.webp",
    FacilLavado = "/assets/iconos/icono-facil-lavado.webp",
    HomeDecor = "/assets/iconos/icono-home-decor.webp",
    Moda = "/assets/iconos/icono-moda.webp",
    Muralla = "/assets/iconos/icono-muralla.webp",
    Outdoor = "/assets/iconos/icono-outdoor.webp",
    PesoLigero = "/assets/iconos/icono-peso-ligero.webp",
    PetFriendly = "/assets/iconos/icono-pet-friendly.webp",
    Polar = "/assets/iconos/icono-polar.webp",
    RapidaAbsorcion = "/assets/iconos/icono-rapida-absorcion.webp",
    Reciclado = "/assets/iconos/icono-reciclado.webp",
    Resistente = "/assets/iconos/icono-resistente.webp",
    SecadoRapido = "/assets/iconos/icono-secado-rapido.webp",
    SoftTouch = "/assets/iconos/icono-soft-touch.webp",
    SweaterResist = "/assets/iconos/icono-sweater-resist.webp",
    Textura = "/assets/iconos/icono-textura.webp",
    Transpirable = "/assets/iconos/icono-transpirable.webp",
    UPF50 = "/assets/iconos/icono-upf-50.webp",
    Vintage = "/assets/iconos/icono-vintage.webp",
    Lycra = "/assets/iconos/icono-lycra.webp",
}


export interface ITela {
    id: string;
    nombre: string;
    categoria: 'Telas Importadas' | 'Telas Nacionales' | 'Telas Ecológicas';
    categoria_slug: 'telas-importadas' | 'telas-nacionales' | 'telas-ecologicas';
    slug: string;
    caracteristicas: string;
    descripcion: string;
    composition: string;
    ancho: number;
    peso: number;
    precio: number;
    usos: string;
    tejido: string;
    rotacion: "Si" | "No";
    base_ecologica: "Si" | "No";
    imagen_zoom: string,
    imagenes: string[];
    iconos: Iconos[];
    colors: string[];
}
