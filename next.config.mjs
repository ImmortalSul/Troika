/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/sitemap.xml', // Apply to the sitemap file only
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow', // Allow search engines to index and follow
          },
        ],
      },
      {
        source: '/:path*', // Apply globally to all other pages
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow', // Allow global indexing
          },
        ],
      },
    ];
  },
};

export default nextConfig;
