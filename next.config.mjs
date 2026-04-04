/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            pathname: '/**',
          },
          {
            // Fotos de perfil de reseñas de Google
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/**',
          },
        ],
      },

};

export default nextConfig;
