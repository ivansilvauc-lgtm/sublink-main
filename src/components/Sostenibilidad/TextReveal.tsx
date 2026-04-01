"use client"

import { motion } from 'framer-motion';

const DAD = ['D', 'A', 'D'];

export const TextReveal = () => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="text-[#3d8630] font-extrabold flex flex-col items-start justify-start text-left text-[160px] xl:text-[200px] 2xl:text-[240px] absolute top-0 sm:left-8 md:left-16 lg:left-28 xl:left-40">
            <motion.p
                className="p-0 m-0 leading-[1] tracking-tight"
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                variants={variants}
            >
                SOS
            </motion.p>
            <motion.p
                className="p-0 m-0 leading-[0.6] tracking-tight"
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={variants}
            >
                TENI
            </motion.p>
            <motion.p
                className="p-0 m-0 leading-[1] tracking-tight"
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.3 }}
                variants={variants}
            >
                BILI
            </motion.p>
            <motion.p
                className="p-0 m-0 leading-[0.6] tracking-tight"
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.4 }}
                variants={variants}
            >
                DAD
            </motion.p>
        </div>
    );
};
