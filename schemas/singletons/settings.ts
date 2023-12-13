import { FaCog } from 'react-icons/fa'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: FaCog,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      description: 'This image will be used as the logo for the website',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Item list',
      description: 'Links displayed in the navigation menu of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'home',
            },
            {
              type: 'page',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'footerImages',
      title: 'Footer Images',
      description:
        'Images displayed at the bottom of the page in the footer component.',
      type: 'array',
      validation: (rule) => rule.max(4),
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'footerHeading',
      title: 'Footer Heading',
      description:
        'Heading displayed at the bottom of the page in the footer component.',
      type: 'string',
    }),
    defineField({
      name: 'footerSubheading',
      title: 'Footer Subheading',
      description:
        'Subheading displayed at the bottom of the page in the footer component.',
      type: 'string',
    }),
    defineField({
      name: 'footerText',
      description:
        'This is a block of text that will be displayed at the ultimate bottom of the page.',
      title: 'Footer copyright text',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Items',
      }
    },
  },
})
