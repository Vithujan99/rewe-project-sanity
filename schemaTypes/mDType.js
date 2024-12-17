import {defineField, defineType} from 'sanity'

export const mDType = defineType({
  name: 'mD',
  title: 'Geschäftsführer',
  type: 'document',
  fields: [
    defineField({
      name: 'profilbild',
      type: 'image',
      validation: (rule) => rule.required().error('Wird benötigt'),
    }),
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required().error('Wird benötigt'),
    }),
    defineField({
      name: 'beschreibung',
      type: 'text',
      validation: (rule) => rule.required().error('Wird benötigt'),
    }),
  ],
})
