"use client"
import { useState } from 'react'
import { Button } from 'flowbite-react'

interface MobileLinkProps {
    path: string,
    slug: string,
    label: string,
    handleItemClick: () => void
}

export const MobileLink = ({ path, slug, label, handleItemClick }: MobileLinkProps) => {

    const [activeLink, setActiveLink] = useState<string | null>(null);

    return (
        <li key={slug} className="border-b-2 border-b-zinc-400/20 w-full">
 
            <Button
                href={`/${path}/${slug}`}
                className={`text-gray-900 bg-transparent p-0 focus:ring-primary focus:ring-2 ${activeLink === slug ? 'linkPressed text-zinc-50 bg-primary' : ''}`}
                onTouchStart={() => setActiveLink(slug)} // Activar el efecto al presionar
                onTouchEnd={() => setActiveLink(null)} // Desactivar el efecto al soltar
                onBlur={() => setActiveLink(null)} // Desactivar el efecto al perder el foco
                onClick={handleItemClick}
            >
                <p className="text-sm sm:text-base w-full">{label}</p>
            </Button>
            <div className="soft_divider"/>
        </li>
    )
}
