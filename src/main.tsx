import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';
import './styles/vendor.css';
import './styles/theme.css';
import './styles/base.css';
import './styles/utilities.css';
import './styles/components.css';
import './styles/animations.css';
import 'flatpickr/dist/flatpickr.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
