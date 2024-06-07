// next.config.mjs
import nextPWA from 'next-pwa';

const withPWA = nextPWA({
  dest: 'public',
  // disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  // Your existing Next.js configuration
  reactStrictMode: true,
  // other configurations if you have any
};

export default withPWA(nextConfig);
