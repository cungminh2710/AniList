import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'rickandmortyapi.com',
				port: '',
				pathname: '/api/character/avatar/**',
			},
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-**',
      },
		],
	},
	experimental: {
		optimizePackageImports: ['@chakra-ui/react'],
	},
};

export default nextConfig;
