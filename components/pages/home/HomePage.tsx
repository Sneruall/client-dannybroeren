import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import { resolveHref } from 'lib/sanity.links'
import Image from 'next/image'
import Link from 'next/link'
import type { HomePagePayload } from 'types'

export interface HomePageProps {
  data: HomePagePayload | null
}

export function HomePage({ data }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseProjects = [], title = '' } = data ?? {}

  console.log(data)

  return (
    <div className="space-y-20">
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      {/* imageAndTextComponent */}
      <div className="w-full">
        {/* Image Component */}
        <div>
          {/* <Image
            src="/images/hero-image.png"
            alt="hero image"
            width={1920}
            height={1080}
          /> */}
        </div>
        {/* Text Component */}
        <div>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </div>
      </div>
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
