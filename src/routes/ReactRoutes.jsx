import {
    Routes, 
    Route, 
} from 'react-router-dom'

import { Announcement } from '../components/Navbar/Announcement'
import { Layout } from '../layouts/Layout/Layout'
import { GardenAndFlowers } from '../pages/GardenAndFlowers'


import { About } from '../pages/About'

export const ReactRoutes = () => {
  return (
    <>
        <Announcement />
        <Layout>
          <Routes>
            <Route index element={<GardenAndFlowers />}/>
            <Route path="about" element={<About />}/>
            <Route path="about" element={<About />}/>
            <Route path="about" element={<About />}/>
            <Route path="about" element={<About />}/>
            <Route path="about" element={<About />}/>
            <Route path="about" element={<About />}/>
          </Routes>
        </Layout>
      </>
  )
}


  

