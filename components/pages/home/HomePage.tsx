import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import ImageAndTextComponent from 'components/shared/ImageAndTextComponent/ImageAndTextComponent'
import QuoteComponent from 'components/shared/QuoteComponent'
import TextComponent from 'components/shared/TextComponent'
import { resolveHref } from 'lib/sanity.links'
import Image from 'next/image'
import Link from 'next/link'
import type { HomePagePayload } from 'types'

export interface HomePageProps {
  data: HomePagePayload | null
}

// todo zet in aparte file
const COMPONENT_MAP = {
  imageAndTextComponent: ImageAndTextComponent,
  textComponent: TextComponent,
  quoteComponent: QuoteComponent,
  // Voeg hier meer mappings toe indien nodig
}

export function HomePage({ data }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    overview = [],
    showcaseProjects = [],
    title = '',
    components = [],
  } = data ?? {}

  console.log(data)

  return (
    <div className="">
      {/* Header */}
      {/* {title && <Header centered title={title} description={overview} />} */}
      {/* Code here to determine which components should be rendered, based on input in sanity cms */}
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
