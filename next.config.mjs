const nextConfig = {
    // Your existing config...
    
    async redirects() {
      return [
        {
          source: '/400',
          destination: '/error?code=400',
          permanent: false,
        },
        {
          source: '/401',
          destination: '/error?code=401',
          permanent: false,
        },
        {
          source: '/403',
          destination: '/error?code=403',
          permanent: false,
        },
        {
          source: '/503',
          destination: '/error?code=503',
          permanent: false,
        },
      ];
    },
  };
  
  export default nextConfig;