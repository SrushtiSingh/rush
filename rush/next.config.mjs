/**  @type {import('next').NextConfig} */ 
const NextConfig = {
  async redirects() {
    return [
      {
      source: "/",
      destination: "/conversations",
      permanent: true,
    },
    ];
  },
};
