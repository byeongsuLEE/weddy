import ***REMOVED*** defineConfig ***REMOVED*** from 'vite';
import react from '@vitejs/plugin-react-swc';
import ***REMOVED*** VitePWA ***REMOVED*** from 'vite-plugin-pwa';
import tailwindcss from "tailwindcss";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(***REMOVED***
  plugins: [
    react(),
    VitePWA(***REMOVED***
      registerType: 'autoUpdate',
      manifest: ***REMOVED***
        name: 'WEDDY',
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
      workbox: ***REMOVED***
        maximumFileSizeToCacheInBytes: 5242880, // 5MB로 제한 증가
      ***REMOVED***
    ***REMOVED***),
  ],
  css: ***REMOVED***
    postcss: ***REMOVED***
      plugins: [tailwindcss()],
    ***REMOVED***,
  ***REMOVED***,
  resolve: ***REMOVED***
    alias: ***REMOVED***
      '@': path.resolve(__dirname, './src'),
    ***REMOVED***,
  ***REMOVED***,
***REMOVED***);
