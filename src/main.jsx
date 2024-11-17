import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Param from './components/Parameter/Param.jsx'
import Github, { githubDataLoader } from './components/Github/Github.jsx'

//-------- Method 1
// const router = createBrowserRouter(
//   [
//     {
//       path : '/',
//       element : <Layout />,
//       children : [
//         {
//           path : '',
//           element : <Home />
//         },
//         {
//           path : 'about',
//           element : <About />
//         },
//         {
//           path : 'contact',
//           element : <Contact />
//         },
//         {
//           path : 'user/:id',
//           element : <Param />
//         }

//       ]
//     }
//   ]
// )

// ------- Method 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
        <Route path='' element ={<Home />} />
        <Route path='about' element ={<About />} />
        <Route path='contact' element ={<Contact />} />

        {/* useParams to access 'id' in 'Param' component */}
        <Route path='user/:id' element ={<Param />} />    

        {/* useLoaderData to get 'value returned by function' in 'Github' component */}
        <Route 
        path='github' 
        element ={<Github />} 
        loader = {githubDataLoader}
        />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
