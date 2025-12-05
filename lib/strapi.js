// lib/strapi.js
import { STRAPI_CONFIG } from './strapi-config';

// Helper function to get image URL
function getImageUrl(imageData) {
  if (!imageData) return null;
  return `${STRAPI_CONFIG.baseURL}${imageData.url}`;
}

// Fetch all images from Strapi
export async function fetchAllImages() {
  try {
    const response = await fetch(`${STRAPI_CONFIG.baseURL}${STRAPI_CONFIG.endpoints.bannerImages}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch images from Strapi');
    }
    
    const result = await response.json();
    const data = result.data;
    
    return {
      // Travel destination images
      bali: getImageUrl(data.bali),
      costaRica: getImageUrl(data.costa_rica),
      iceland: getImageUrl(data.iceland),
      japan: getImageUrl(data.japan),
      maldives: getImageUrl(data.maldives),
      morocco: getImageUrl(data.morocco),
      santorini: getImageUrl(data.santorini),
      switzerland: getImageUrl(data.switzerland),
      
      // Gallery images
      galleryBeach: getImageUrl(data.gallery_beach),
      galleryEiffel: getImageUrl(data.gallery_eiffel),
      galleryHotAirBalloon: getImageUrl(data.gallery_hotairballoon),
      galleryLake: getImageUrl(data.gallery_lake),
      galleryMountains: getImageUrl(data.gallery_mountains),
      galleryNorthernLights: getImageUrl(data.gallery_northernlights),
      galleryPagoda: getImageUrl(data.gallery_pagoda),
      galleryPatagonia: getImageUrl(data.gallery_patagonia),
      galleryRoadTrip: getImageUrl(data.gallery_roadtrip),
      gallerySantorini: getImageUrl(data.gallery_santorini),
      gallerySunset: getImageUrl(data.gallery_sunset),
      galleryTemple: getImageUrl(data.gallery_temple),
      
      // Hero/Banner images
      heroLake: getImageUrl(data.hero_lake),
      heroMountains: getImageUrl(data.hero_mountains),
      heroRoadTrip: getImageUrl(data.hero_roadtrip),
      
      // Logo
      logo: getImageUrl(data.WanderlustTravels_logo),
    };
  } catch (error) {
    console.error('Error fetching images from Strapi:', error);
    return null;
  }
}

// Legacy function for backward compatibility
export async function fetchBannerImages() {
  const images = await fetchAllImages();
  if (!images) return { heroLogo: null, servicesBanner: null, aboutBanner: null, contactBanner: null };
  
  return {
    heroLogo: images.heroMountains,
    servicesBanner: images.heroLake,
    aboutBanner: images.heroRoadTrip,
    contactBanner: images.galleryBeach,
  };
}

// Fetch gallery images for gallery page
export async function fetchGalleryImages() {
  const images = await fetchAllImages();
  if (!images) return [];
  
  return [
    { id: 1, src: images.galleryBeach, alt: "Tropical beach paradise", location: "Maldives", category: "Beaches" },
    { id: 2, src: images.galleryEiffel, alt: "Eiffel Tower at sunset", location: "Paris, France", category: "Cities" },
    { id: 3, src: images.galleryHotAirBalloon, alt: "Hot air balloons over landscape", location: "Cappadocia, Turkey", category: "Adventure" },
    { id: 4, src: images.galleryLake, alt: "Mountain lake reflection", location: "Swiss Alps", category: "Mountains" },
    { id: 5, src: images.galleryMountains, alt: "Majestic mountain peaks", location: "Patagonia", category: "Mountains" },
    { id: 6, src: images.galleryNorthernLights, alt: "Aurora borealis", location: "Iceland", category: "Nature" },
    { id: 7, src: images.galleryPagoda, alt: "Traditional pagoda", location: "Thailand", category: "Culture" },
    { id: 8, src: images.galleryPatagonia, alt: "Patagonian landscape", location: "Argentina", category: "Nature" },
    { id: 9, src: images.galleryRoadTrip, alt: "Open road adventure", location: "Route 66, USA", category: "Adventure" },
    { id: 10, src: images.gallerySantorini, alt: "White houses on cliff", location: "Santorini, Greece", category: "Cities" },
    { id: 11, src: images.gallerySunset, alt: "Sunset over water", location: "Bali, Indonesia", category: "Beaches" },
    { id: 12, src: images.galleryTemple, alt: "Ancient temple", location: "Bali, Indonesia", category: "Culture" },
  ].filter(item => item.src); // Filter out null images
}

// Fetch package images
export async function fetchPackageImages() {
  const images = await fetchAllImages();
  if (!images) return [];
  
  return [
    { id: 1, destination: "Bali", image: images.bali },
    { id: 2, destination: "Costa Rica", image: images.costaRica },
    { id: 3, destination: "Iceland", image: images.iceland },
    { id: 4, destination: "Japan", image: images.japan },
    { id: 5, destination: "Maldives", image: images.maldives },
    { id: 6, destination: "Morocco", image: images.morocco },
    { id: 7, destination: "Santorini", image: images.santorini },
    { id: 8, destination: "Switzerland", image: images.switzerland },
  ].filter(item => item.image); // Filter out null images
}
