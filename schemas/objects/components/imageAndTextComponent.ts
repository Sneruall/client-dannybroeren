import { ImageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'imageAndTextComponent',
  title: 'Image And Text Component',
  icon: ImageIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'button',
      title: 'Call to action button text',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      media: 'image', // Use the userPortait image field as thumbnail
    },
  },
})
