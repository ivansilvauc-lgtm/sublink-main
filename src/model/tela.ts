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

export const IconosAlt: Record<Iconos, string> = {
    [Iconos.FourWayStretch]: "Icono 4-way stretch - tela con elasticidad en 4 direcciones",
    [Iconos.Antifluido]: "Icono antifluido - tela resistente a líquidos",
    [Iconos.FacilLavado]: "Icono fácil lavado - tela de fácil mantenimiento",
    [Iconos.HomeDecor]: "Icono home decor - tela para decoración del hogar",
    [Iconos.Moda]: "Icono moda - tela para confección de moda",
    [Iconos.Muralla]: "Icono muralla - tela de alta resistencia",
    [Iconos.Outdoor]: "Icono outdoor - tela para uso exterior",
    [Iconos.PesoLigero]: "Icono peso ligero - tela liviana",
    [Iconos.PetFriendly]: "Icono pet friendly - tela resistente a mascotas",
    [Iconos.Polar]: "Icono polar - tela con acabado polar",
    [Iconos.RapidaAbsorcion]: "Icono rápida absorción - tela con absorción de humedad",
    [Iconos.Reciclado]: "Icono reciclado - tela elaborada con material reciclado",
    [Iconos.Resistente]: "Icono resistente - tela de alta durabilidad",
    [Iconos.SecadoRapido]: "Icono secado rápido - tela de secado rápido",
    [Iconos.SoftTouch]: "Icono soft touch - tela suave al tacto",
    [Iconos.SweaterResist]: "Icono sweater resist - tela resistente al pilling",
    [Iconos.Textura]: "Icono textura - tela con textura especial",
    [Iconos.Transpirable]: "Icono transpirable - tela con ventilación y transpirabilidad",
    [Iconos.UPF50]: "Icono UPF 50 - tela con protección solar UPF 50",
    [Iconos.Vintage]: "Icono vintage - tela con acabado vintage",
    [Iconos.Lycra]: "Icono lycra - tela con contenido de lycra",
};


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
