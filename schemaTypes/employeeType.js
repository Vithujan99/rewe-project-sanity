import {defineField, defineType} from 'sanity'
import {AddUserIcon} from '@sanity/icons'

export const employeeType = defineType({
  name: 'employee',
  title: 'Mitarbeiter',
  type: 'document',
  icon: AddUserIcon,
  fields: [
    defineField({
      name: 'profilbild',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().error('Wird benötigt'),
    }),
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required().error('Wird benötigt'),
    }),
    defineField({
      name: 'position',
      type: 'string',
      validation: (rule) => rule.required().error('Wird benötigt'),
    }),
    defineField({
      name: 'biotext',
      type: 'text',
    }),
  ],
})
