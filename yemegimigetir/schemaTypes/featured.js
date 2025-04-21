import {defineType} from 'sanity'
export default defineType({
  name: 'featured',
  title: 'Öne Çıkan Restoranlar',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restoran Adı',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Restoran Açıklaması',
      type: 'string',
      validation: (rule) => rule.max(200),
    },
    {
      name: 'restaurants',
      title: 'Restoranlar',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
})
