import Image from 'next/image'
import GalleryGrid from '@/components/GalleryGrid'
import { fetchGalleryImages, fetchAllImages } from '@/lib/strapi'

interface GalleryImage {
  id: number
  src: string
  alt: string
  location: string
  category: string
}

export const metadata = {
  title: 'Photo Gallery - Wanderlust Travels',
  description: 'Explore stunning photos from our travel destinations around the world.',
}

export default async function GalleryPage() {
  const images = (await fetchGalleryImages()).filter(img => img.src !== null) as GalleryImage[]
  const allImages = await fetchAllImages()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={allImages?.heroMountains || "/images/hero-mountains.jpg"}
            alt="Beautiful travel destination"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
            Photo Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-fadeIn delay-100">
            Get inspired by stunning photos from destinations around the world
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={images} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Own Memories?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Book your next adventure and capture moments that will last a lifetime.
          </p>
          <a
            href="/packages"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Explore Packages
          </a>
        </div>
      </section>
    </div>
  )
}
