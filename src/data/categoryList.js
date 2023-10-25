
import OutdoorPlantersImg from '../assets/ImgCategory/640hagepotter.png'
import Flowers from '../assets/ImgCategory/Potes.png'
import GardenBlog from '../assets/ImgCategory/rosebed.png'
import GardenUtilities from '../assets/ImgCategory/hageutstyr.png'


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
            imageUrl: Flowers,
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
            imageUrl: GardenUtilities,
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


    