import {defineType} from 'sanity'
export default defineType({
  name: 'dish',
  title: 'Yemek',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Yemek Adı',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Yemek Açıklaması',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Yemeğin Resmi',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'price',
      title: 'Yemeğin Fiyatı',
      type: 'number',
      validation: (rule) => rule.required(),
    },
  ],
})
