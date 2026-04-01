import Image from 'next/image';

export default function Loading() {

    return (
        <div className="h-screen bg-zinc-50 flex justify-center items-center">
            <div style={{
                animation: 'fadeInOut 1s infinite'
            }}>
                < Image src="/logo-sublink.png" width={200} height={200} alt="Logo de la empresa" className='animate-ping'/>
            </div>
        </div>
    );
}