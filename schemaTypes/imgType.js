import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const imgType = defineType({
  name: 'img',
  title: 'Bild',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required().error('Wird benötigt'),
    }),
    defineField({
      name: 'bild',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().error('Wird benötigt'),
    }),
  ],
})
