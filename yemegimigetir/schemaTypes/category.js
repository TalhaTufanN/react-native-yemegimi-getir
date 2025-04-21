import {defineType} from 'sanity'
export default defineType({
  name: 'category',
  title: 'Kategori',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Kategori Adı',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Kategori açıklaması',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Kategori resmi',
      type: 'image',
      validation: (rule) => rule.required(),
    },
  ],
})
