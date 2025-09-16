import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import App from './01-css-global/App';
import "./01-css-global/styles/global.css";
import "./01-css-global/styles/variables.css";

import AppCssModules from './02-css-modules/AppCssModules';
import "./02-css-modules/styles/global.css";
import "./02-css-modules/styles/variables.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCssModules />
  </StrictMode>,
)
