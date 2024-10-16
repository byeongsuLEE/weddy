import ***REMOVED*** StrictMode ***REMOVED*** from 'react';
import ***REMOVED*** createRoot ***REMOVED*** from 'react-dom/client';
import ***REMOVED*** RecoilRoot ***REMOVED*** from 'recoil';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>,
);
