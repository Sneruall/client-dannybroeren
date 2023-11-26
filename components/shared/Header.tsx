import { CustomPortableText } from 'components/shared/CustomPortableText'

interface HeaderProps {
  centered?: boolean
  description?: any[]
  title?: string
}
export function Header(props: HeaderProps) {
  const { title, description, centered = true } = props
  if (!description && !title) {
    return null
  }
  return (
    <div className={`${centered ? 'text-center' : 'w-5/6 lg:w-3/5'} mb-16`}>
      {/* Title */}
      {title && (
        <div className="text-5xl font-league tracking-tight md:text-7xl">
          {title}
        </div>
      )}
      {/* Description */}
      {/* {description && (
        <div className="mt-4 font-playfair text-xl text-gray-900 md:text-2xl">
          <CustomPortableText value={description} />
        </div>
      )} */}
    </div>
  )
}
