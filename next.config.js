const nextConfig = {
  reactStrictMode: true,
  env: {
    user: "lucid",
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};
