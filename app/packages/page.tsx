import Image from 'next/image'
import PackageCard from '@/components/PackageCard'
import packagesData from '@/public/data/packages.json'
import { fetchPackageImages, fetchAllImages } from '@/lib/strapi'

interface Package {
  id: string
  title: string
  location: string
  price: number
  duration: string
  description: string
  image: string
}

export const metadata = {
  title: 'Tour Packages - Wanderlust Travels',
  description: 'Browse our collection of handcrafted travel packages to destinations around the world.',
}

export default async function PackagesPage() {
  const packages = packagesData as Package[]
  const packageImages = await fetchPackageImages()
  const allImages = await fetchAllImages()
  
  // Map Strapi images to package data
  const packagesWithImages = packages.map(pkg => {
    const strapiImage = packageImages.find(img => 
      img.destination.toLowerCase() === pkg.location.toLowerCase()
    )
    return {
      ...pkg,
      image: strapiImage?.image || pkg.image
    }
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={allImages?.heroRoadTrip || "/images/hero-roadtrip.jpg"}
            alt="Travel destination"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
            Tour Packages
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-fadeIn delay-100">
            Discover our carefully curated travel experiences for every type of adventurer
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="font-medium">Showing {packagesWithImages.length} packages</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-medium">
                All Destinations
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">
                Beach
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">
                Mountains
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">
                Cultural
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">
                Adventure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagesWithImages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="animate-fadeIn h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PackageCard {...pkg} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Let us create a custom travel package tailored to your preferences and budget.
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
            Request Custom Package
          </button>
        </div>
      </section>
    </div>
  )
}
