// Strapi Configuration
export const STRAPI_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
  endpoints: {
    bannerImages: '/api/bsns-banner?populate=*',
  },
  // Cache options
  cache: {
    revalidate: 3600, // Revalidate every hour
    noStore: false,
  }
}
