
import OutdoorPlantersImg from '../assets/ImgCategory/640hagepotter.png'
import GardenUtilities from '../assets/ImgCategory/Potes.png'
import GardenBlog from '../assets/ImgCategory/rosebed.png'


export const categoryList = {
    "listArray": [
        {
            id: 0,
            type: 'image',
            title: "Outdoor Planters",
            imageUrl: OutdoorPlantersImg,
            alt: "Flower Pots",
            category: "Outdoor Planters",
            buttons: [
                {
                  label: 'Order Planters',
                  url: '/planters',
                  className: "buttonContainer",
                },
            ],
           
        }, {
            id: 1,
            type: 'image',
            title: "Flowers",
            imageUrl: GardenUtilities,
            alt: "Flowers",
            category: "flowers",
            buttons: [
                {
                  label: 'Order Flowers',
                  url: '/flowers',
                  className: "buttonContainer",
                },
            ],
        },{
            id: 2,
            type: 'image',
            title: "Garden Utilities",
            imageUrl: "/garden-andflowers/src/assets/ImgCategory/hageutstyr.png",
            alt: "Garden Utilities",
            category: "Garden Utilities",
            buttons: [
                {
                  label: 'Order Utilities',
                  url: '/utilities',
                  className: "buttonContainer",
                },
            ],
        },{
            id: 3,
            type: 'image',
            title: "Garden Blog",
            imageUrl: GardenBlog,
            alt: "Garden blog",
            category: "gardenBlog",
            buttons: [
                {
                  label: 'Greener Everyday',
                  url: '/gardenblog',
                  className: "buttonContainer",
                },
            ],
        }

    ],
    "categories": 4
}


    