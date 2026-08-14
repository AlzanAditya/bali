import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { createAppRouter } from './router'
import './styles/vendor/app-CXiiNhT6.css'
import './styles/vendor/app-DOXEB0I_.css'
import './styles/site.css'

const router = createAppRouter()

const root = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
