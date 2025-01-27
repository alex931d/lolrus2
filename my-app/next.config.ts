const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/lolrus2/' : '',
  basePath: isProd ? '/lolrus2' : '',
  output: 'export'
};

export default nextConfig;