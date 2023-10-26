import RosePinkMeilove from '../assets/ImgFlowers/rose640-426.jpg'
import Pansies from '../assets/ImgFlowers/pensies640-426.jpg'
import HydrangeaMagical from '../assets/ImgFlowers/hydrangea640-426.jpg'
import PetuniaMilliflora from '../assets/ImgFlowers/petunia640-426.jpg'
import Daylily from '../assets/ImgFlowers/lilies.jpg'
import DrumstickAllium from '../assets/ImgFlowers/DrumstickAlliumFlower640.jpg'
import CampanulaGetMee from '../assets/ImgFlowers/bellflower640.jpg'
import IrisSibirica from '../assets/ImgFlowers/iris640.jpg'
import Cone from '../assets/ImgFlowers/cone640.jpg'
import TulipPamplona from '../assets/ImgFlowers/tulip640.jpg'
import BellisPerennis from '../assets/ImgFlowers/Tusenfryd.jpeg'
import Peony from '../assets/ImgFlowers/peony640.jpg'

export const flowerList = {
    "listArray": [
        {
            id: 0,
            title: "Rosa, Pink Meilove",
            category: "Bush",
            color: "",
            price: 349,
            currency: "NOK",
            shortDescription: "Pink Meilove is a compact, pleasing rose bush with pink flowers. Very rich blooming and upright growth. Fits well in pots and in beds.",
            description: "Rosa are a classic garden beauties bringing history, elegance and blooming power for every style of garden. Pink Meilove flower abundantly with stuffed roses, that bloom all summer. Remove wilted flowers to promote new growth. Plant in rich, moist but well-drained soil. Ideally prune them annually. When watering, direct the flow onto the soil to prevent fungal diseases and avoid excess water use. When established, water only once a week with one large watering can per plant during dry.",
            imageUrl: RosePinkMeilove,
            alt: "Rose by Moshe Harosh from Pixabay",
            climateZone: "Climate Zone: 1-3",
            height: {heightIcon: "/src/assets/Icon/height48.svg", cm: "Height 50 cm"},
            diameter: {diameterIcon: "/src/assets/Icon/diameter48.svg", diameter: "Diameter cm"},
            cycle: "July - September",
            lightRequirement: {sun: ""},
            pollinators: "",
        }, {
            id: 1,
            title: "Pansies",
            category: "Perennial",
            color: "",
            price: 79,
            currency: "NOK",
            shortDescription: "Pansies are vigorous, fast-growing plant with smal delicate edible flowers. Thrives in the sun, part shade and can be planted out early spring.",
            description: "Pansies are a type of Viola, that love cool weather and are popular to grow in spring and fall. In the right climate they can blossom throughout the season and stay alive to bloom again. Plant in moist, humus-rich, well-drained soil. Pensy from seeds may be slow to germinate. Common reasons pansies fail is that they ar not watered enough. Remove faded/ dead flowers to encourage the plants to produce more blooms and prolong the blooming season.",
            imageUrl: Pansies,
            alt: "Pensies by Joydeep Sengupta on Unsplash.",
            climateZone: "Climate Zone: 6",
            height: { heightIcon: "src/assets/Icon/height48.svg", cm: "30cm cm"},
            diameter: {diameterIcon: "src/assets/Icon/diameter48.svg", diameter: "Diameter cm"},
            flowerCycle: "February - October",
            lightRequirement: {sun: "", partlyCloudy: ""},
            pollinators: {Bee: "src/assets/Icon/bee48.svg"},
        }, {
            id: 2,
            title: "Hydrangea, Magical",
            category: "Bush",
            color: "",
            price: 299,
            currency: "NOK",
            shortDescription: "Hydrangea have large showy clusters of flowers. The special thing about the Hydrangea is that the soil determines the color of the flowers.",
            description: "Flowering hydrangeas enlighten any garden with a blooming revolution. With long lasting coloured mop head of blooming enjoyment. Thrives in partial shade in moisture-retaining soil. The elegant ornamental shrub changes color during flowering. Planted in acidic soil, with a low pH, changes in shades of blue while a hydrangea planted in neutral soil changes to pink. In mild climates, hydrangea can overwinter in beds, but it may not bloom after the first winter. With a little patience, it might bloom again next year!",
            imageUrl: HydrangeaMagical,
            alt: "Hydrangea by Josué Salgado on Unsplash",
            climateZone: "Climate Zone: 1-3",
            height: { heightIcon: "src/assets/Icon/height48.svg", cm: "100 cm"},
            diameter: {diameterIcon: "src/assets/Icon/diameter48.svg", diameter: "Diameter cm"},
            flowerCycle: "July - August",
            lightRequirement: {partlyCloudy: "src/assets/Icon/partlyCloudyDay48.svg"},
            pollinators: "",
        }, {
            id: 3,
            title: "Petunia, Milliflora",
            category: "Summer flower",
            color: "",
            price: 129,
            currency: "NOK",
            shortDescription: "Petunias have a wealth of small flowers. Thrive with plenty of light. Amazingly easy to grow, both in the garden and in containers.",
            description: "Petunia thrives best in warm and sunny places, where it receives regular water and fertiliser. Normal potting soil with good drainage is preferable. Petunias tolerates some drought, but shines best with regular watering. Also attracts lots of butterflies and other pollinating insects. In cold climates, petunias are annuals and only last one growing season. However, they will self-seed for continued growth within a warmer growing zones. Petunias are fast-growing plants that will reach full size by late spring.",
            imageUrl: PetuniaMilliflora,
            alt: "Purple Petunia flowers by Christine Clair, Pexels",
            climateZone: "Climate Zone:",
            height: { heightIcon: "src/assets/Icon/height48.svg", cm: "25 cm"},
            diameter: {diameterIcon: "src/assets/Icon/diameter48.svg", diameter: "Diameter cm"},
            flowerCycle: "May - August",
            lightRequirement: { sun: "src/assets/Icon/sunny48.svg", partlyCloudy: "src/assets/Icon/partlyCloudyDay48.svg"},
            pollinators: {Butterfly: "src/assets/Icon/butterfly48.svg", Bee: "src/assets/Icon/bee48.svg"},
        }, {
            id: 4,
            title: "Daylily",
            category: "Perennial",
            color: "",
            price: 99,
            currency: "NOK",
            shortDescription: "Daylily is low-maintenance, showy robust flower. With curving foliage similar to ornamental grass, making the plant beautiful even when not in bloom.",
            description: "The bright trumpet-shape flower rise on tall stems above the foliage from fleshy roots. Daylilies can be planted in the spring after the frost or in early fall before the frost. They have a rapid growth and caring for established daylilies is very simple. Watering during prolonged dry and occasional pruning. Tolerant of many soil conditions if they have good drainage. Prefer an organically rich, moist soil and full sun for rich blooming, but will tolerate light shade. Annual fertilization may be helpful in producing more flowers.",
            imageUrl: Daylily,
            alt: "Photo by Stan Green on Unsplash",
            climateZone: "Climate Zone:",
            height: {heightIcon: "src/assets/Icon/height48.svg", cm: "80 cm"},
            diameter: {diameterIcon: "src/assets/Icon/diameter48.svg", diameter: "Diameter cm"},
            flowerCycle: "June - August",
            lightRequirement: {sun: "src/assets/Icon/sunny48.svg"},
            pollinators: {Butterfly: "src/assets/Icon/butterfly48.svg", Bee: "src/assets/Icon/bee48.svg"},
        }, {
            id: 5,
            title: "Drumstick Allium",
            category: "Flower onion",
            color: "",
            price: 85,
            currency: "NOK",
            shortDescription: "Drumstick Allium, are easy to grow and providing color and texture to the garden. The blooms start out green and darken throughout the summer.",
            description: "Ornamental Allium sphaerocephalon have tall, thin stems topped with a tight knot of flowers and travis in the sun. These unusual flowers are members of the onion family. These stunners are loved by pollinators like bees. In general they blossom from late spring until late summer and do best in well-draining, slightly sandy soil. They can handle a bit of drought, but they will need a bit of protecton from the harsh afternoon light. Need protecton or support from wind to prevent toppling or breakage.",
            imageUrl: DrumstickAllium,
            alt: "Drumstick Allium Flower by John Foster fra Pixabay",
            climateZone: "Climate Zone:",
            height: { heightIcon: "src/assets/Icon/height48.svg", cm: "60 cm"},
            diameter: {diameterIcon: "src/assets/Icon/diameter48.svg", diameter: "Diameter cm"},
            flowerCycle: "May - June",
            lightRequirement: {sun: "src/assets/Icon/sunny48.svg"},
            pollinators: {Butterfly: "src/assets/Icon/butterfly48.svg", Bee: "src/assets/Icon/bee48.svg"},
        }, {
            id: 6,
            title: "Campanula, Get Mee",
            category: "Perennial",
            color: "",
            price: 48,
            currency: "NOK",
            shortDescription: "Mini Campanula, Get Mee, with their happy nodding heads will bloom heaviest in the summer, but can delight with flowers all the way to autumn.",
            description: "The mini variant of the bellfower, thrives in sun-part shade in nutrient-rich, moist and well-drained soil. However prefers partial shade, especially on hot summer days. An evergreen, easy-care plant, but requires a mild climate. In summer, the green foliage is covered with masses of erect, bell-like flowers. Stimulate abundant flowering by pinching off spent flowers. Give the plant a boost with long-acting nutrition or give liquid nutrition with each watering. Campanula <q>Get Mee</q> will enliven the landscape in borders and rock gardens.",
            imageUrl: CampanulaGetMee,
            alt: "Bellflower",
            climateZone: "Climate Zone: 4",
            height: { heightIcon: "src/assets/Icon/height48.svg", cm: "30 cm"},
            diameter: {diameterIcon: "src/assets/Icon/diameter48.svg", diameter: "Diameter cm"},
            flowerCycle: "May - August",
            lightRequirement: {partlyCloudy: "src/assets/Icon/partlyCloudyDay48.svg"},
            pollinators: {Bee: "src/assets/Icon/bee48.svg"},
        }, {
            id: 7,
            title: "Iris, Sibirica",
            category: "Perennial",
            color: "",
            price: 99,
            currency: "NOK",
            shortDescription: "The Siberian iris is a beautiful cut flower. Characterised by narrow distinguished foliage, and thin-stemmed graceful flowers, very artistic in effect.",
            description:  "The characteristic Iris sibirica thrives best in evenly moist, calcareous soil, and the plant tolerates both occasional drought and standing in water, in sun and partial shade. This is a very hardy and vigorous growing perennial that forms beautiful large tufts. Irises need to be divided every 3-4 years. If your iris thrives, you will eventually see that it grows best at the outer edges of the plant, while it becomes less and less lush in the middle. It is a sign that it is time to divide the plant.",
            imageUrl: IrisSibirica,
            alt: "/src/assets/ImgFlowers/iris640.jpg",
            climateZone: "Climate Zone: 7",
            height: {heightIcon: "src/assets/Icon/height48.svg", cm: "80 cm"},
            diameter: {diameterIcon: "src/assets/Icon/diameter48.svg", diameter: "Diameter cm"},
            flowerCycle: "May - August",
            lightRequirement: {sun: "src/assets/Icon/sunny48.svg"},
            pollinators: {Butterfly: "src/assets/Icon/butterfly48.svg", Bee: "src/assets/Icon/bee48.svg"},
        }, {
            id: 8,
            title: "Cone",
            category: "Perennial",
            color: "",
            price: 279,
            currency: "NOK",
            shortDescription: "Coneflowers are beloved by butterflies, bees, and songbirds. They are heat and drought resistant, easy to grow and make great cut flowers.",
            description: "These easy-care perennials prefer full sun, medium moisture and well-draining soil. Coneflowers will keep producing without spipping off spend blooms. The big blooms shine in a variety of garden settings. Plant landscaping options are almost limitless. Plant coneflower in the spring or early fall. Keep it watered for at lest one week, until the plant is established. Place the plant in a pot or flower bed, dig a hole about twice the diameter of the nursery pot and about the same depth. Gently tamp down the soil.",
            imageUrl: Cone,
            alt: "Cone by Mariusz from Pixabay",
            climateZone: "Climate Zone: 1-5",
            height: {heightIcon: "src/assets/Icon/height48.svg", cm: "100 cm"},
            diameter: {diameterIcon: "src/assets/Icon/diameter48.svg", diameter: "Diameter cm"},
            flowerCycle: "August",
            lightRequirement: {sun: "src/assets/Icon/sunny48.svg"},
            pollinators: {Butterfly: "src/assets/Icon/butterfly48.svg", Bee: "src/assets/Icon/bee48.svg"},
        }, {
            id: 9,
            title: "Tulip, Pamplona",
            category: "Flower onion",
            color: "",
            price: 99,
            currency: "NOK",
            shortDescription: "Pamplona, tulip with peony-shaped flowers. Layers of petals make up this magnificent flower. The double late tulip can be as much as 25 cm wide.",
            description: "Flower bulbs certainly give the most reward for the effort you put in. Tulip bulbs are planted in autumn before the frost settles. The earlier before the frost, the better time to form roots. Tulips do not need fertilizer, but a small dose of high phosphorus fertilizer can help the bulbs establish and produce more flowers. When the tulip starts to sprout in the spring, make sure the soil stays moist. However, avoid overwatering as this can lead to rot. Pamplona is an eye-catching tulip well worth waiting for until spring.",
            imageUrl: TulipPamplona,
            alt: "Tulip by Serhii Kalyn on Unsplash",
            climateZone: "Climate Zone: 6",
            height: {heightIcon: "src/assets/Icon/height48.svg", cm: "50 cm"},
            diameter: {diameterIcon: "src/assets/Icon/diameter48.svg", diameter: "Diameter cm"},
            flowerCycle: "May",
            lightRequirement: { sun: "src/assets/Icon/sunny48.svg", partlyCloudy: "src/assets/Icon/partlyCloudyDay48.svg"},
            pollinators: "",
        }, {
            id: 10,
            title: "Bellis Perennis",
            category: "Perennial",
            color: "",
            price: 149,
            currency: "NOK",
            shortDescription: "Bellis perennis is an outstanding flower that bring early cheer to the garden. They make charming potted plant companions or as lawn landscape daisy.",
            description: "The <q>English daisy</q> can be planted indoors six to eight weeks before the last frost. The vigorous flower thrive in mild conditions with sun or partly cloudy and seed themselves, setting the stage for future blooms. In areas with cool summers, the plants might bloom throughout the season, but they do not like soggy conditions. These plants prefer organically rich, loamy soil with good drainage and need regular watering to stay in bloom. Bellis perennis prefer the same soil conditions as roses and vegetables. ",
            imageUrl: BellisPerennis,
            alt: "Tusenfryd, by PixelAnarchy from Pixabay.jpeg",
            climateZone: "Climate Zone: 6",
            height: { heightIcon: "src/assets/Icon/height48.svg", cm: "15 cm"},
            diameter: {diameterIcon: "src/assets/Icon/diameter48.svg", diameter: "Diameter cm"},
            flowerCycle: "May",
            lightRequirement: {sun: "src/assets/Icon/sunny48.svg", partlyCloudy: "src/assets/Icon/partlyCloudyDay48.svg"},
            pollinators: {Butterfly: "src/assets/Icon/butterfly48.svg", Bee: "src/assets/Icon/bee48.svg"},
        }, {
            id: 11,
            title: "Peony",
            category: "Perennial",
            color: "",
            price: 199,
            currency: "NOK",
            shortDescription: "Peonies are easy to grow and magnificent cut flowrs. Once settled in the garden, the breathtaking flower can be enjoyed for generations.",
            description: "Peonies bloom best in a sunny spot. The lage blooms can make them top-heavy, but sakes hold them up, or shelter from winds if necessary. Peony plants require little maintenance as long as they are planted in deep, fertile, moist soil that drains well. Dig a generous-sized hole or large pot in a sunny spot with well-drained soil. They usually need a few years to eatablish themselvs, bloom, and grow. Peonies thrive on benign neglect. The majestic flower make fine sentinals lining walkways or lovely low hedge. After its sunning bloom, peony´s bushy glossy green leaves lasts all summer, then turns purplish-red in the fall.",
            imageUrl: Peony,
            alt: "Peony by 💚🌺💚Nowaja💚🌺💚 fra Pixabay",
            climateZone: "Climate Zone: 1-5 ",
            height: {heightIcon: "src/assets/Icon/height48.svg", cm: "80 cm"},
            diameter: {diameterIcon: "src/assets/Icon/diameter48.svg", diameter: "Diameter cm"},
            flowerCycle: "June - July",
            lightRequirement: {sun: "src/assets/Icon/sunny48.svg"},
            pollinators: {Bee: "src/assets/Icon/bee48.svg"},
        }
    ],
    "flowerCount": 11
}


    