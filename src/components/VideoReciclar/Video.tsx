"use client"
import { useSearchParams, useRouter } from 'next/navigation';
import ModalVideo from 'react-modal-video';
import './modal-video.min.css';

export const Video = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const isOpen = searchParams.get('video') === 'descubre-como-se-elaboran-nuestras-telas';

    return (
        <ModalVideo
            channel='youtube'
            isOpen={isOpen}
            videoId='lMJXxhRFO2k'
            onClose={() => router.back()}
        />
    );
}
