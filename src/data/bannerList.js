/**
 * @typedef {Object} ListItemButton
 * @property {string} label - button label
 * @property {string} url - button URL link
 * @property {string} position - button position 
 * @property {string} className - styles CSS class name
 */

/**
 * @typedef {Object} ListItem
 * @property {number} id - items unique identifier
 * @property {string} type - type of the item ('image' or 'text')
 * @property {string} className - styling CSS class name
 * @property {string} imageUrl - image URL
 * @property {string} alt - image alt text
 * @property {string} title - item title
 * @property {string|string[]} topLeftTagline - top-left tagline (string or string array)
 * @property {string} ButtonLeft - label for left button
 * @property {string} url - URL link 
 */

import TulipBannerImg from '../assets/ImgBanner/tulip1904-804.jpg'
import PeonyBannerImg from '../assets/ImgBanner/peony1904-804.jpg'




export const bannerList = {
    'listArray': [
        {
            id: 0,
            type: 'image',
            className: "imgSection",
            imageUrl: TulipBannerImg, 
            alt: 'Home page, Garden & Flowers',
            title: 'Garden & Flowers',
            topLeftTagline: 'A Greener Everyday Life',
            buttons: [
                {
                  label: 'See Our Flowers',
                  url: '/flowers',
                  position: 'topLeft',
                  className: "buttonContainer",
                },
            ],
        },  
        {
            id: 1,
            type: 'text',
            className: 'textSection',
            title: 'Flowers',
            paragraphs: 
            [
                "Plant your own oasis with a combination of flowers, shrubs and trees. Give the visual impact to the garden, terraces or balconie. Plants build scenic landscapes and bring the view to life.",
                "Connecting with nature, bees and butterflys in your very own oasis. Build up a field of vision with your own preferens of colors. A mix of flower heights and textures can soften a hard landscap and repeating flowers can create cohesion.",
            ],
        }, 
        {
            id: 2,
            type: 'image',
            className: 'imgSection',
            imageUrl: PeonyBannerImg, 
            alt: 'Page not found',
            title: 'Page not fond',
            topLeftTagline: 
            [
                'Oops! ', 
                '404 Page not found',
            ],
            buttons: [
                {
                  label: 'See Our Selection',
                  url: '/flowers',
                  position: 'topLeft',
                  className: "buttonContainer",
                },
            ],
        },
    ]
}