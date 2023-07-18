import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category Name',
      validation: rule => rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title: 'Category Description',
      validation: rule => rule.required()
    },
    {
      name: 'image1',
      type: 'image',
      title: 'Image of the Category',
      validation: rule => rule.required()
    },
    {
      name: 'image2',
      type: 'image',
      title: 'Image of the Category',
    },
    {
      name: 'image3',
      type: 'image',
      title: 'Image of the Category',
    },

  ],
})
