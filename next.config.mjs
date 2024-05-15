/** @type {import('next').NextConfig} */
const nextConfig = {
  // Existing Next.js configuration options (output: 'export', images: {...})
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },

  // Merged output configuration for standalone mode
  output: 'standalone', // This line supersedes the previous 'export' setting
};

export default nextConfig;
