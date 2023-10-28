import {
    Routes, 
    Route, 
} from 'react-router-dom'



import { Announcement } from '../layouts/Navbar/Announcement'
import { Layout } from '../layouts/Layout/Layout'
import { GardenAndFlowers } from '../pages/GardenAndFlowers'
import { Flowers } from '../pages/Flowers'
import { FlowerProductPage } from '../pages/FlowerProductPage'
import { Planters } from '../pages/Planters'
import { Utilities } from '../pages/Utilities'
import { GardenBlog } from '../pages/GardenBlog'
import { Cart } from '../pages/Cart'
import { About } from '../pages/About'
import { NoPage } from '../pages/NoPage'


export const ReactRoutes = () => {
  return (
    <>
        <Announcement />
          <Routes >
            <Route element={<Layout />} > 
              <Route index element={<GardenAndFlowers />} />

              <Route path="/flowers" element={<Flowers />} />
              <Route path='/flowers/:id' element={<FlowerProductPage />} />

              <Route path="/planters" element={<Planters />} />
              <Route path='/planters/:id' element={<FlowerProductPage />} />

              <Route path="/utilities" element={<Utilities />} />
              <Route path='/utilities/:id' element={<FlowerProductPage />} />

              <Route path="/gardenblog" element={<GardenBlog />} />
              <Route path='/gardenblog/:id' element={<FlowerProductPage />} />
            
              <Route path="/cart" element={<Cart />}/> 
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NoPage />} />
            </Route> 
          </Routes>
      </>
  )
}


  

