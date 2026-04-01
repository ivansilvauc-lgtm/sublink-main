import { useState, useEffect } from 'react';

export const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000); // Aparece después de 5 segundos

        return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`block sm:hidden absolute bottom-36 right-4 animate-pulse pointer-events-none`}>
            <svg fill="#157ec2" width="45px" height="45px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#157ec2"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.293,8.707a1,1,0,0,1,0-1.414l4-4a1,1,0,0,1,1.414,0l4,4a1,1,0,1,1-1.414,1.414L12,5.414,8.707,8.707A1,1,0,0,1,7.293,8.707Zm0,8,4,4a1,1,0,0,0,1.414,0l4-4a1,1,0,0,0-1.414-1.414L12,18.586,8.707,15.293a1,1,0,1,0-1.414,1.414Z"></path></g></svg>
        </div>
    );
}
