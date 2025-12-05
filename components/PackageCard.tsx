import Link from 'next/link'
import Image from 'next/image'

interface PackageCardProps {
  id: string
  title: string
  location: string
  price: number
  duration: string
  description: string
  image: string
}

export default function PackageCard({
  id,
  title,
  location,
  price,
  duration,
  description,
  image,
}: PackageCardProps) {
  return (
    <Link href={`/packages/${id}`} className="h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md card-hover group h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover img-zoom group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <span className="text-primary-600 font-bold text-lg">${price}</span>
            <span className="text-gray-500 text-sm">/person</span>
          </div>
          {/* Location Badge */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-medium">{location}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-200">
            {title}
          </h3>

          {/* Duration */}
          <div className="flex items-center text-gray-500 mb-3">
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">{duration}</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">
            {description}
          </p>

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
            <span className="text-primary-600 font-medium text-sm group-hover:text-primary-700 flex items-center">
              View Details
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <div className="flex items-center space-x-1 text-yellow-500">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-sm text-gray-600 font-medium">4.8</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
