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
                "Plant your oasis with a combination of flowers, shrubs and trees. Plants build landscapes and bring the view to life. Fountain grass is a real show-stopper and Hostas make beautiful architectural plants. Evergreen shrub always have something to offer the display, giving visual impact to the garden, terraces or balconie.",
                "Draw pollinators like, bees and butterflys to your garden. It will ensure plants produce seeds and fruits, result is bigger and better crops for you. Coneflowers provide both pollen and nectar, meeting pollinators requirements. Plants that bloom at staggered times throughout the year and blossom for long periods, can draw pollinators. Flower shapes and colors also matter to pollinators. A mix of flower heights and textures can soften a hard landscap and repeating flowers can create cohesion.",
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
                  url: '/',
                  position: 'topLeft',
                  className: "buttonContainer",
                },
            ],
        },
        {
            id: 3,
            type: 'text',
            className: 'textSection',
            title: 'Planters',
            paragraphs: 
            [
                "Outdoor planters, are a great way to make custom built designs on your patio and garden area. Group pots of various shapes, sizes, and complementary styles. Flowers, trees, vegetables and herbs, adapt amazingly to growing in planters. Plants in pots need some care and maintenance to ensure your plants have the right soil to thrive, container gardening is much easier to master!",
                "Short on space and a bit of sunlight, you can still embrace the world of gardening. In a driveway or a balcony, outdoor planters in a variety, create a stunning display. Pick a palette that works with the house colors and stick to it in all your containers. Regardless of your preference, planters is a fantastic way to experiment with planting and design. Mix different textures, shapes, and colors to heighten visual interest. Want to show off a cool container? Pair it with plainer plants.",
            ],
        },
    ]
}