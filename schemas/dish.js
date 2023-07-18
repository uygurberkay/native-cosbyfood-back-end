import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'dish',
    title: 'Dishes',
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
        title: 'Dish Description',
        validation: rule => rule.required()
        },
        {
        name: 'image1',
        type: 'image',
        title: 'Image of the Dish',
        validation: rule => rule.required()
        },
        {
        name: 'image2',
        type: 'image',
        title: 'Image of the Dish',
        },
        {
        name: 'image3',
        type: 'image',
        title: 'Image of the Dish',
        },
        {
        name: 'price',
        type: 'number',
        title: 'Price of the dish',
        },

    ],
})
