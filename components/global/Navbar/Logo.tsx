import Image from 'next/image'
import Link from 'next/link'

const Logo = ({ src, alt }) => {
  return (
    <div className="w-full max-w-[12rem] xl:max-w-xs h-20 relative">
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
