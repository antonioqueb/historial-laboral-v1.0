/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async headers() {
    return [
      {
        // Asegúrate de que la ruta API no se almacene en caché
        source: '/api/auth/federated-logout',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
