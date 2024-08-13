import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ConfiguredRoutes from "./configuredRoutes.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfiguredRoutes />
  </StrictMode>,
)
