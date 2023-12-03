import Image from 'next/image'
import Link from 'next/link'

const Logo = ({ src, alt }) => {
  return (
    <div className="w-full h-12 sm:h-20 md:h-24 relative">
      <Link href="/">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="contain" // This keeps the aspect ratio
        />
      </Link>
    </div>
  )
}

export default Logo
