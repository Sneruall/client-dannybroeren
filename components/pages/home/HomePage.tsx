import ImageAndTextComponent from 'components/shared/ImageAndTextComponent/ImageAndTextComponent'
import QuoteComponent from 'components/shared/QuoteComponent'
import TextComponent from 'components/shared/TextComponent'
import type { HomePagePayload } from 'types'

export interface HomePageProps {
  data: HomePagePayload | null
}

// todo zet in aparte file
const COMPONENT_MAP = {
  imageAndTextComponent: ImageAndTextComponent,
  textComponent: TextComponent,
  quoteComponent: QuoteComponent,
}

export function HomePage({ data }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { components = [] } = data ?? {}

  return (
    <div className="">
      {components.map((component, index) => {
        const Component = COMPONENT_MAP[component._type]
        if (!Component) {
          return <p key={index}>Unknown component: {component._type}</p>
        }

        return <Component key={component._key || index} {...component} />
      })}
    </div>
  )
}

export default HomePage
