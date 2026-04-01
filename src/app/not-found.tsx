import Link from 'next/link'
import styles from '../styles/404.module.css'

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col justify-center">
            <section className={styles['error-container']}>
                <span>4</span>
                <span><span className={styles["screen-reader-text"]}>0</span></span>
                <span>4</span>
            </section>
            <h1 className="text-center text-zinc-400">Error 404</h1>
            <p className="text-center">Disculpa, este recurso no se encuentra disponible...</p>
            <div className="mx-auto mt-12">
                <Link href="/" className="text-center hover:px-8 transition-all bg-primary rounded-sm text-zinc-50 px-5 py-2 inline-block">Inicio</Link>
            </div>
        </div>
    )
}