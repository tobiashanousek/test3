//React
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './app/layout/AppLayout';
import Home from './app/pages/Home';
import Services from './app/pages/Services';
import Prices from './app/pages/Prices';
import Offer from './app/pages/Offer';
//CSS
import './App.css';
import './normalize.css'
import AboutUs from './app/pages/AboutUs';
import Contact from './app/pages/Contact';
import ServiceProvider from './app/pages/ServiceProvider';
import Login from './app/pages/Login';
import Register from './app/pages/Register';


const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/services',
                element: <Services />,
            },
            {
                path: '/prices',
                element: <Prices />,
            },
            {
                path: '/about-us',
                element: <AboutUs />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/offer',
                element: <Offer />,
            },
            {
                path: '/service-provider',
                element: <ServiceProvider />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            }
        ],
    }
]);

const App = () => {
    return(
    <>
        <RouterProvider router={router} />
    </>)
}

export default App;