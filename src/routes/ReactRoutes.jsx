import {
    Routes, 
    Route, 
} from 'react-router-dom'

import { Announcement } from '../components/Navbar/Announcement'
import { Layout } from '../layouts/Layout/Layout'
import { GardenAndFlowers } from '../pages/GardenAndFlowers'
import { Flowers } from '../pages/Flowers'
import { FlowerProductPage } from '../pages/FlowerProductPage'
import { Planters } from '../pages/Planters'
import { Utilities } from '../pages/Utilities'
import { GardenBlog } from '../pages/GardenBlog'
import { About } from '../pages/About'
import { NoPage } from '../pages/NoPage'


export const ReactRoutes = () => {
  return (
    <>
        <Announcement />
   
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route path='/' element={<GardenAndFlowers />} />
              <Route path="/flowers" element={<Flowers />} />
              <Route path='/flowers/:id' element={<FlowerProductPage />} />
              <Route path="/gardenblog" element={<GardenBlog />} />
              <Route path="/planters" element={<Planters />} />

              <Route path="/utilities" element={<Utilities />} />
            
            {/* <Route path="cart" element={<Cart />}/> */}
              <Route path="about" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
      
    
      </>
  )
}


  

