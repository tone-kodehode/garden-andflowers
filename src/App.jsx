import GardenAndFlowers from './routes/GardenAndFlowers'


import "/src/styles/index.css"
import "/src/styles/palette.css"
import "/src/styles/root.css"
import "/src/styles/universal.css"

function App() {

  return (
    <>
      <GardenAndFlowers /> 
    </>
  )
}

export default App

// import { 
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom'

// import GardenAndFlowers from './routes/GardenAndFlowers'
// import Flowers from './routes/Flowers'
// import FlowerProductPage from './routes/FlowerProductPage'
// import Garden from './routes/Garden'
// import About from './routes/About'
// import NoPage from './routes/NoPage'


// export default function App() {
//   const customBasename = `${process.env.PUBLIC_URL}`;

//   return (

//     <>
//       <Router basename={customBasename}>   
//         <Routes>   
//             <Route path='' element={<GardenAndFlowers />} />
//             <Route path="/flowers" element={<Flowers />} />
//             <Route path="/flowers/:id" element={<FlowerProductPage />} />
//             <Route path="/garden" element={<Garden />} />          
//             <Route path="/about" element={<About />} />
//             <Route path="*" element={<NoPage />} />
//         </Routes>
//       </Router>
//     </>
   
//   )
// }
