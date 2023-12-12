// todo: optimize payloads so e.g. footer is not included in settings payload and also passed as prop to navbar.

import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface Component {
  _type: string
  image?: Image
  text?: string
  button?: string
  _key?: string
}

// Page payloads
export interface HomePagePayload {
  footerText?: PortableTextBlock[]
  footerImages?: Image[]
  footerHeading?: string
  footerSubheading?: string
  overview?: PortableTextBlock[]
  title?: string
  components?: Component[]
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface ProjectPayload {
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
}

export interface SettingsPayload {
  logo?: Image
  footerText?: PortableTextBlock[]
  footerImages?: Image[]
  footerHeading?: string
  footerSubheading?: string
  menuItems?: MenuItem[]
  ogImage?: Image
}
