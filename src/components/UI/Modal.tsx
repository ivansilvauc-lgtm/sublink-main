"use client";

import { IServicios } from "@/lib/servicios";
import { ITela } from "@/model/tela";
import { Modal } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ModalComponentProps {
    list: ITela[] | IServicios[];
    label: string;
}

export function ModalComponent({ list, label }: ModalComponentProps) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <button className="absolute bottom-16" onClick={() => setOpenModal(true)}>
                <div className="flex items-center justify-center cursor-pointer hover:bg-zinc-200 active:bg-zinc-300 bg-zinc-100 px-5 py-3 rounded-full ml-4 sm:ml-10">
                    <p className="text-sm mr-2">Ver más</p>
                    <Image src="/assets/right-arrow.svg" width={10} height={10} alt="Icono de flecha" />
                </div>
            </button>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="py-2 bg-primary">
                    <h1 className="text-xl font-semibold text-zinc-50 uppercase">{label}</h1>
                    </Modal.Header>
                <Modal.Body>
                    <ul className="flex flex-col items-start justify-center w-full">
                        {
                            list.map(item =>
                                <li key={item.slug} className="p-2 border-b-[1px] border-zinc-200 w-full hover:text-[#0082c9] transition-all hover:bg-zinc-200">
                                    <Link href={
                                        label==="servicios" ? 
                                            `/servicios/${(item as IServicios).slug}` :
                                            `/telas/${(item as ITela)?.categoria_slug}/${(item as ITela)?.slug}`
                                        }>
                                        {(item as IServicios).title || (item as ITela)?.nombre}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </Modal.Body>
            </Modal>
        </>
    );
}
