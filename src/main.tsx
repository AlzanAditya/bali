import React from 'react'; import { createRoot, hydrateRoot } from 'react-dom/client'; import { RouterProvider } from '@tanstack/react-router'; import { router } from './router';
import './styles/vendor.css'; import './styles/theme.css'; import './styles/base.css'; import './styles/utilities.css'; import './styles/components.css'; import './styles/animations.css'; import 'flatpickr/dist/flatpickr.css';
const rootElement = document.getElementById('root')!;
const app = <React.StrictMode><RouterProvider router={router}/></React.StrictMode>;

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
