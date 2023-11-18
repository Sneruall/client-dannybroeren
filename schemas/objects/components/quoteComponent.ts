import { BlockquoteIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'quoteComponent',
  title: 'Quote',
  icon: BlockquoteIcon, // Use an icon that represents a quote
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'text',
    },
  },
})
