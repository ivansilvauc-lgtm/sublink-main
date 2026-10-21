"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { buildWhatsAppUrl, isAdsSession, trackWhatsAppClick } from "@/lib/whatsapp";

type Proyecto = {
  id: number;
  titulo: string;
  categoria: string;
  tela: string;
  metros: number;
  color: string;
  descripcion: string;
};

const CATEGORIAS = [
  "Todos",
  "Uniformes",
  "Trajes de baño",
  "Activewear",
  "Moda",
  "Promocional",
  "Decoración",
];

export function PortafolioGrid({ proyectos }: { proyectos: Proyecto[] }) {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const proyectosFiltrados = useMemo(() => {
    if (categoriaActiva === "Todos") {
      return proyectos;
    }
    return proyectos.filter((p) => p.categoria === categoriaActiva);
  }, [categoriaActiva, proyectos]);

  const handleWhatsApp = (titulo: string) => {
    const mensaje = `Hola Sublink, vi su portafolio y me interesa un proyecto similar a "${titulo}"`;
    const enlace = buildWhatsAppUrl(mensaje, "portafolio", isAdsSession());
    trackWhatsAppClick("portafolio");
    window.open(enlace, "_blank");
  };

  return (
    <div className="w-full">
      {/* Category tabs */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-start">
          {CATEGORIAS.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaActiva(categoria)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                categoriaActiva === categoria
                  ? "bg-[#157ec2] text-white shadow-lg"
                  : "bg-zinc-100 text-gray-700 hover:bg-zinc-200"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {proyectosFiltrados.map((proyecto) => (
          <div
            key={proyecto.id}
            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image placeholder with color */}
            <div className={`${proyecto.color} h-48 sm:h-56 relative flex items-center justify-center overflow-hidden`}>
              {/* Category badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  {proyecto.categoria}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#157ec2] transition-colors">
                {proyecto.titulo}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">
                {proyecto.descripcion}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-blue-100 text-[#157ec2] text-xs sm:text-sm px-3 py-1 rounded-full font-medium">
                  {proyecto.tela}
                </span>
                <span className="inline-block bg-gray-100 text-gray-700 text-xs sm:text-sm px-3 py-1 rounded-full font-medium">
                  {proyecto.metros}m²
                </span>
              </div>

              {/* WhatsApp button */}
              <button
                onClick={() => handleWhatsApp(proyecto.titulo)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 px-4 rounded-lg transition-colors duration-300 text-sm sm:text-base"
              >
                Quiero algo similar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {proyectosFiltrados.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No hay proyectos en esta categoría
          </p>
        </div>
      )}
    </div>
  );
}
