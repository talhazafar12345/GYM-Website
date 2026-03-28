import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Service from '../Pages/Service'
import Membership from '../Pages/Membership'

function Routing() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        
        {
            path: "/about-page",
            element: <About />
        },

        {
            path: "/service-page",
            element: <Service />
        },

        {
            path: "/membership-page",
            element: <Membership />
        },
      
    ])
    return (
        <RouterProvider router={router} />
    )
}
export default Routing

