import ***REMOVED*** QueryClient, QueryClientProvider ***REMOVED*** from "react-query";
import ***REMOVED*** BrowserRouter, Route, Routes, useLocation ***REMOVED*** from 'react-router-dom';
import Footer from './common/Footer';
import Navbar from './common/Navbar';
import './index.css';
import BoardDetail from './pages/BoardDetailPage';
import Board from './pages/BoardPage';
import CallBack from './pages/CallBack';
import Cart from './pages/CartPage';
import ContractList from './pages/ContractListPage';
import Contract from './pages/ContractPage';
import Login from './pages/LoginPage';
import Main from './pages/MainPage';
import Mypage from './pages/MyPage';
import NFTLoading from "./pages/NFTLoadingPage";
import PlannerList from "./pages/PlannerListPage";
import Planner from './pages/PlannerPage';
import Prompt from './pages/PromptPage';
import RecommendLoading from "./pages/RecommendLoadingPage";
import Review from "./pages/ReviewPage";
import Schedule from './pages/SchedulePage';
import Sketch from './pages/SketchPage';
import UserInfo from "./pages/UserInfoPage";

import ***REMOVED*** useSetRecoilState ***REMOVED*** from 'recoil';
import ***REMOVED*** firebaseTokenState ***REMOVED*** from './store/firebaseToken.ts';

import ***REMOVED*** onMessage ***REMOVED*** from 'firebase/messaging';
import ***REMOVED*** useEffect ***REMOVED*** from 'react';
import ***REMOVED*** messaging, requestForToken, requestNotificationPermission ***REMOVED*** from './firebase.ts';

function AppContent() ***REMOVED***
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];
  const currentDetail = location.pathname.split('/')[2];

  return (
    <>
      ***REMOVED***(currentPath !== "login") && (currentPath !== "userinfo") && <Navbar />***REMOVED***
      <Routes>
        <Route path="/" element=***REMOVED***<Main />***REMOVED*** />
        <Route path="/review/:productId" element=***REMOVED***<Review />***REMOVED*** />
        <Route path="/cart" element=***REMOVED***<Cart />***REMOVED*** />
        <Route path="/login" element=***REMOVED***<Login />***REMOVED*** />
        <Route path="/userinfo" element=***REMOVED***<UserInfo />***REMOVED*** />
        <Route path="/board" element=***REMOVED***<Board />***REMOVED*** />
        <Route path="/board/detail/:productId" element=***REMOVED***<BoardDetail />***REMOVED*** />
        <Route path="/prompt" element=***REMOVED***<Prompt />***REMOVED*** />
        <Route path="/planner" element=***REMOVED***<Planner />***REMOVED*** />
        <Route path="/planner/list/:category" element=***REMOVED***<PlannerList />***REMOVED*** />
        <Route path="/schedule" element=***REMOVED***<Schedule />***REMOVED*** />
        <Route path="/sketch" element=***REMOVED***<Sketch />***REMOVED*** />
        <Route path="/contract/:category/:contractId" element=***REMOVED***<Contract />***REMOVED*** />
        <Route path="/contract/list" element=***REMOVED***<ContractList />***REMOVED*** />
        <Route path="/mypage" element=***REMOVED***<Mypage />***REMOVED*** />
        <Route path="/callback" element=***REMOVED***<CallBack />***REMOVED*** />
        <Route path="/nft/loading" element=***REMOVED***<NFTLoading />***REMOVED*** />
        <Route path="/recommend/loading" element=***REMOVED***<RecommendLoading />***REMOVED*** />
      </Routes>
      ***REMOVED***(currentPath !== "login") && (currentPath !== "userinfo") && (currentDetail !== "detail") && <Footer />***REMOVED***
    </>
  );
***REMOVED***

function App() ***REMOVED***
  const queryClient = new QueryClient();
  const setToken = useSetRecoilState(firebaseTokenState);

  useEffect(() => ***REMOVED***
    if ('serviceWorker' in navigator) ***REMOVED***
      navigator.serviceWorker.getRegistrations().then((registrations) => ***REMOVED***
        // 기존 등록된 서비스 워커가 있는지 확인
        const isRegistered = registrations.some((registration) => 
          registration.active && registration.scope === '/firebase-messaging-sw.js'
        );
  
        if (!isRegistered) ***REMOVED***
          // 서비스 워커가 등록되지 않았을 경우에만 등록
          navigator.serviceWorker.register('/firebase-messaging-sw.js')
            .then((registration) => ***REMOVED***
              console.log('Service Worker registered with scope:', registration.scope);
            ***REMOVED***)
            .catch((err) => ***REMOVED***
              console.error('Service Worker registration failed:', err);
            ***REMOVED***);
        ***REMOVED*** else ***REMOVED***
          console.log('Service Worker already registered');
        ***REMOVED***
      ***REMOVED***);
    ***REMOVED***
  ***REMOVED***, []);

  useEffect(() => ***REMOVED***
    // 푸시 알림 요청 및 토큰 처리
    const requestPermissionsAndToken = async () => ***REMOVED***
      await requestNotificationPermission();
      
      const token = await requestForToken();
      if (token) ***REMOVED***
        console.log("Token received:", token);
        setToken(token);
      ***REMOVED*** else ***REMOVED***
        console.warn("No token received");
      ***REMOVED***
    ***REMOVED***;

    requestPermissionsAndToken();

    // 기존 코드에서 삭제된 포그라운드 메시지 수신 리스너 부분
    // onMessage(messaging, (payload) => ***REMOVED***
    //   console.log("Message received in foreground:", payload);
    // ***REMOVED***);

  ***REMOVED***, [setToken]);

  return (
    <div className='container'>
      <QueryClientProvider client=***REMOVED***queryClient***REMOVED***>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
***REMOVED***

export default App;
