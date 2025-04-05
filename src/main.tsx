import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Hidden Easter egg in console
console.log(
  '%c ⚡ Albez0-An7h Portfolio %c © 2025 All Rights Reserved ',
  'background: #35374B; color: #78A083; font-size: 18px; font-weight: bold; padding: 8px; border-radius: 5px 0 0 5px; border-left: 4px solid #78A083;',
  'background: #50727B; color: white; font-size: 14px; padding: 8px; border-radius: 0 5px 5px 0;'
);
console.log(
  '%c💻 Designed & Developed with %c❤️ %cby Albez0-An7h',
  'color: white; font-size: 14px;', 
  'color: #ff6b6b; font-size: 14px;',
  'color: #78A083; font-size: 14px; font-weight: bold;'
);

import Terminal from './Terminal.tsx'
import About from './About.tsx'
import Projects from './Projects.tsx'
import Skills from './Skills.tsx'
import Contact from './Contact.tsx'
import Error404 from './Error404.tsx'
import Layout from './components/Layout.tsx'
import CustomCursor from './components/CustomCursor.tsx'

// Define routes with layout wrapper for all pages except Terminal
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <CustomCursor />
        <Terminal />
      </>
    ),
    errorElement: <Error404/>
  },
  {
    path: '/about',
    element: <Layout><About /></Layout>,
  },
  {
    path: '/projects',
    element: <Layout><Projects /></Layout>,
  },
  {
    path: '/skills',
    element: <Layout><Skills /></Layout>,
  },
  {
    path: '/contact',
    element: <Layout><Contact /></Layout>,
  },
  {
    // Wrap the 404 page with layout too
    path: '*',
    element: <Layout><Error404 /></Layout>,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomCursor />
    <RouterProvider router={router} />
  </StrictMode>,
)
