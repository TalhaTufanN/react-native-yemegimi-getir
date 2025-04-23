export default {
  name: 'restaurant',
  title: 'Restoranlar',
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
      name: 'image',
      title: 'Restoran Resmi',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'lat',
      title: 'Restoranın Enlemi (latitude)',
      type: 'number',
    },
    {
      name: 'lng',
      title: 'Restoranın Boylamı (longitude)',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restoran Adresi',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'rating',
      title: 'Restoran Yıldızı (1-5)',
      type: 'number',
      validation: (rule) =>
        rule.required().min(1).max(5).error('Lütfen 1 ile 5 arası bir sayı giriniz.'),
    },
    {
      name: 'reviews',
      title: 'Değerlendirme',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Kategori',
      validation: (rule) => rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      title: 'Yemekler',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
}
