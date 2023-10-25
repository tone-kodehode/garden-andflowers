import {
    Routes, 
    Route, 
} from 'react-router-dom'

import { Announcement } from '../components/Navbar/Announcement'
import { Layout } from '../layouts/Layout/Layout'
import { GardenAndFlowers } from '../pages/GardenAndFlowers'
import { Flowers } from '../pages/Flowers'
import { Garden } from '../pages/Garden'
import { Blog } from '../pages/Blog'
import { About } from '../pages/About'


export const ReactRoutes = () => {
  return (
    <>
        <Announcement />
        <Layout>
          <Routes>
            <Route index element={<GardenAndFlowers />}/>
            <Route path="flowers" element={<Flowers />}/>
            <Route path="garden" element={<Garden />}/>
            <Route path="blog" element={<Blog />}/>
            {/* <Route path="cart" element={<Cart />}/> */}
            {/* <Route path="about" element={<About />}/> */}
            <Route path="about" element={<About />}/>
          </Routes>
        </Layout>
      </>
  )
}


  

