import ***REMOVED*** defineConfig ***REMOVED*** from 'vite';
import react from '@vitejs/plugin-react-swc';
import ***REMOVED*** VitePWA ***REMOVED*** from 'vite-plugin-pwa';
import tailwindcss from "tailwindcss";
import path from 'path';

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
            src: '/logos/icon-196x196.png',
            sizes: '196x196',
            type: 'image/png',
          ***REMOVED***,
          ***REMOVED***
            src: '/logos/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          ***REMOVED***,
        ],
      ***REMOVED***,
      workbox: ***REMOVED***
        maximumFileSizeToCacheInBytes: 5242880,
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
  // server: ***REMOVED***
  //   hmr: ***REMOVED***
  //     overlay: false,  // 개발 중 발생하는 에러 오버레이 비활성화
  //   ***REMOVED***,
  // ***REMOVED***,
  // build: ***REMOVED***
  //   sourcemap: true, // 디버깅을 위한 소스맵 활성화
  // ***REMOVED***,
***REMOVED***);
