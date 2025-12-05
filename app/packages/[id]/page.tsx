import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import packagesData from '@/public/data/packages.json'

interface Package {
  id: string
  title: string
  location: string
  price: number
  duration: string
  description: string
  image: string
  highlights?: string[]
  included?: string[]
}

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return (packagesData as Package[]).map((pkg) => ({
    id: pkg.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const pkg = (packagesData as Package[]).find((p) => p.id === id)

  if (!pkg) {
    return {
      title: 'Package Not Found - Wanderlust Travels',
    }
  }

  return {
    title: `${pkg.title} - Wanderlust Travels`,
    description: pkg.description,
  }
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { id } = await params
  const pkg = (packagesData as Package[]).find((p) => p.id === id)

  if (!pkg) {
    notFound()
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-white transition-colors">Packages</Link>
            <span>/</span>
            <span className="text-white">{pkg.title}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
            {pkg.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{pkg.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{pkg.duration}</span>
            </div>
            <div className="flex items-center space-x-1 text-yellow-400">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-white">4.8 (124 reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Tour</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {pkg.description}
                </p>
              </div>

              {/* Highlights */}
              {pkg.highlights && pkg.highlights.length > 0 && (
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Tour Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pkg.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What's Included */}
              {pkg.included && pkg.included.length > 0 && (
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">What&apos;s Included</h2>
                  <div className="space-y-3">
                    {pkg.included.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Itinerary Preview */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Sample Itinerary</h2>
                <div className="space-y-4">
                  {['Day 1: Arrival & Welcome', 'Day 2-3: Exploration & Activities', 'Day 4-5: Adventure & Discovery', 'Final Day: Departure'].map((day, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-sand-50 rounded-xl">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{day}</h3>
                        <p className="text-gray-600 text-sm mt-1">
                          Detailed itinerary will be provided upon booking confirmation.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <div className="text-center mb-6">
                  <span className="text-gray-500 text-sm">Starting from</span>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary-600">${pkg.price}</span>
                    <span className="text-gray-500 ml-1">/person</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-800">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Tour Type</span>
                    <span className="font-semibold text-gray-800">Group Tour</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Group Size</span>
                    <span className="font-semibold text-gray-800">Max 15 people</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600">Languages</span>
                    <span className="font-semibold text-gray-800">English</span>
                  </div>
                </div>

                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-lg mb-4">
                  Book Now
                </button>

                <button className="w-full border-2 border-primary-500 text-primary-600 py-4 rounded-full font-semibold transition-all duration-200 hover:bg-primary-50">
                  Inquire
                </button>

                <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Free cancellation up to 7 days before</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(packagesData as Package[])
              .filter((p) => p.id !== pkg.id)
              .slice(0, 3)
              .map((relatedPkg) => (
                <Link
                  key={relatedPkg.id}
                  href={`/packages/${relatedPkg.id}`}
                  className="group"
                >
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <Image
                      src={relatedPkg.image}
                      alt={relatedPkg.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">{relatedPkg.title}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-gray-300 text-sm">{relatedPkg.location}</span>
                        <span className="text-primary-300 font-bold">${relatedPkg.price}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
