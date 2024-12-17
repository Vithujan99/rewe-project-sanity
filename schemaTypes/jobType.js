import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'

export const jobType = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required().error('Wird benötigt'),
    }),
    defineField({
      name: 'beschreibung',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required().error('Wird benötigt'),
    }),
  ],
})
