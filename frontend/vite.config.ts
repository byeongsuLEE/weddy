import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from "tailwindcss";
import path from 'path';

export default defineConfig({
  publicDir: 'public', 
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'WEDDY',
        short_name: 'ReactApp',
        description: 'My Awesome React App with PWA support',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/logos/icon-196x196.png',
            sizes: '196x196',
            type: 'image/png',
          },
          {
            src: '/logos/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5242880,
      },
      filename: 'firebase-messaging-sw.js', // 서비스 워커 파일 이름 변경
    })
    ,
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // server: {
  //   hmr: {
  //     overlay: false,  // 개발 중 발생하는 에러 오버레이 비활성화
  //   },
  // },
  // build: {
  //   sourcemap: true, // 디버깅을 위한 소스맵 활성화
  // },
});
