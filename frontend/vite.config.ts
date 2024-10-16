import ***REMOVED*** defineConfig ***REMOVED*** from 'vite'
import react from '@vitejs/plugin-react-swc'
import ***REMOVED*** VitePWA ***REMOVED*** from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(***REMOVED***
  plugins: [
    react(),
    VitePWA(***REMOVED***
      registerType: 'autoUpdate',
      manifest: ***REMOVED***
        name: 'My React App',
        short_name: 'ReactApp',
        description: 'My Awesome React App with PWA support',
        theme_color: '#ffffff',
        icons: [
          ***REMOVED***
            src: '/icons/icon-196x196.png',
            sizes: '196x196',
            type: 'image/png',
          ***REMOVED***,
          ***REMOVED***
            src: '/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          ***REMOVED***,
        ],
      ***REMOVED***,
    ***REMOVED***),
  ],
***REMOVED***)
