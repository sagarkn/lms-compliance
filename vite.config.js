import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    // Allows specific hosts
    //allowedHosts: ['your-custom-domain.com', '.another-domain.com'], 
    // Or, to allow any host (not recommended for production due to security risks)
     allowedHosts: true, 
  },
})
