"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

export const TreeReveal = () => {
    const imageVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="absolute w-[50%] right-0 top-48 sm:top-4 h-auto">
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.2 }}
                variants={imageVariants}
            >
                <Image src="/img/sostenibilidad/manos-con-arbol.webp" alt="Sostenibilidad" width={1780} height={1935} className="object-cover" />
            </motion.div>
        </div>
    );
};
