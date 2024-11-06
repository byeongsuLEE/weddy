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
import ***REMOVED*** tokenState ***REMOVED*** from './store/token';

import ***REMOVED*** MessagePayload ***REMOVED*** from 'firebase/messaging';
import ***REMOVED*** useEffect ***REMOVED*** from 'react';
import ***REMOVED*** onMessageListener, requestForToken, requestNotificationPermission ***REMOVED*** from './firebase.ts';
import Test from "./pages/test.tsx";

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
        <Route path="/test" element=***REMOVED***<Test />***REMOVED*** />
      </Routes>
      ***REMOVED***(currentPath !== "login") && (currentPath !== "userinfo") && (currentDetail !== "detail") && <Footer />***REMOVED***
    </>
  );
***REMOVED***

function App() ***REMOVED***
  // Query Client 설정
  const queryClient = new QueryClient();

  // Recoil 상태에 토큰을 저장하기 위한 함수
  const setToken = useSetRecoilState(tokenState);

  // FCM 설정 및 서비스 워커 등록
  useEffect(() => ***REMOVED***
    if ('serviceWorker' in navigator) ***REMOVED***
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => ***REMOVED***
          console.log('Service Worker registered with scope:', registration.scope);
        ***REMOVED***)
        .catch((err) => ***REMOVED***
          console.error('Service Worker registration failed:', err);
        ***REMOVED***);
    ***REMOVED***
  ***REMOVED***, []);

  // FCM 알림 권한 및 토큰 요청, 메시지 리스너 설정
  useEffect(() => ***REMOVED***
    const requestPermissionsAndToken = async () => ***REMOVED***
      console.log("Requesting notification permission...");
      await requestNotificationPermission();  // 알림 권한 요청
      console.log("Notification permission requested.");
  
      const token = await requestForToken();  // FCM 토큰 요청
      console.log("Token request completed.");
  
      if (token) ***REMOVED***
        console.log("Token received:", token);
        setToken(token);  // Recoil 상태에 토큰 저장
      ***REMOVED*** else ***REMOVED***
        console.warn("No token received");
      ***REMOVED***
    ***REMOVED***;
  
    requestPermissionsAndToken();
    console.log("Setting up FCM onMessage listener...");
  
    // 메시지 수신 리스너 설정
    onMessageListener()
      .then((payload: MessagePayload) => ***REMOVED***
        console.log("Message received:", payload);  // 수신된 메시지 출력
        // TODO: 알림 처리 로직을 여기에 추가
      ***REMOVED***)
      .catch((err: any) => console.log("Failed to receive message:", err));
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
