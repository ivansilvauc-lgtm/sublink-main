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

    async headers() {
        return [
          {
            // Security headers para todas las rutas
            source: '/(.*)',
            headers: [
              {
                key: 'X-Frame-Options',
                value: 'SAMEORIGIN',
              },
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff',
              },
              {
                key: 'Referrer-Policy',
                value: 'strict-origin-when-cross-origin',
              },
              {
                key: 'Permissions-Policy',
                value: 'camera=(), microphone=(), geolocation=()',
              },
              {
                key: 'Strict-Transport-Security',
                value: 'max-age=63072000; includeSubDomains; preload',
              },
              {
                key: 'Content-Security-Policy',
                value: [
                  "default-src 'self'",
                  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net https://cdnjs.cloudflare.com https://*.vercel-insights.com https://www.clarity.ms",
                  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                  "font-src 'self' https://fonts.gstatic.com",
                  "img-src 'self' data: blob: https://lh3.googleusercontent.com https://via.placeholder.com",
                  "frame-src 'self' https://chatbotgamma.sublink.company https://www.youtube.com https://cal.com",
                  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://api.firecrawl.dev https://*.vercel-insights.com https://www.clarity.ms",
                  "worker-src blob:",
                ].join('; '),
              },
            ],
          },
          {
            // CORS solo para las API routes
            source: '/api/(.*)',
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: 'https://www.sublink.company',
              },
              {
                key: 'Access-Control-Allow-Methods',
                value: 'GET, POST, OPTIONS',
              },
              {
                key: 'Access-Control-Allow-Headers',
                value: 'Content-Type',
              },
            ],
          },
        ];
      },

};

export default nextConfig;
