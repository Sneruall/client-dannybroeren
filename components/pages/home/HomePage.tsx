import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import ImageAndTextComponent from 'components/shared/ImageAndTextComponent'
import TextComponent from 'components/shared/TextComponent'
import { resolveHref } from 'lib/sanity.links'
import Image from 'next/image'
import Link from 'next/link'
import type { HomePagePayload } from 'types'

export interface HomePageProps {
  data: HomePagePayload | null
}

// Aan het begin van uw component of in een aparte file
const COMPONENT_MAP = {
  imageAndTextComponent: ImageAndTextComponent, // Uw React component voor dit type
  textComponent: TextComponent, // Uw React component voor tekstcomponenten
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
    <div className="space-y-20">
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      {/* Code here to determine which components should be rendered, based on input in sanity cms */}

      {components.map((component, index) => {
        const Component = COMPONENT_MAP[component._type]
        if (!Component) {
          return <p key={index}>Unknown component: {component._type}</p>
        }

        return <Component key={component._key || index} {...component} />
      })}

      {/* Showcase projects */}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project._type, project.slug)
            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href}>
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default HomePage
