import ***REMOVED*** useEffect ***REMOVED*** from "react";
import ***REMOVED*** QueryClient, QueryClientProvider ***REMOVED*** from "react-query";
import ***REMOVED*** BrowserRouter, Route, Routes, useLocation, useNavigate ***REMOVED*** from "react-router-dom";
import ***REMOVED*** RecoilRoot, useRecoilValue ***REMOVED*** from "recoil";
import ***REMOVED*** saveFcmToken ***REMOVED*** from "./api/userApi";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import ***REMOVED*** onMessageListener ***REMOVED*** from "./firebase";
import "./index.css";
import BoardDetail from "./pages/BoardDetailPage";
import Board from "./pages/BoardPage";
import CallBack from "./pages/CallBack";
import Cart from "./pages/CartPage";
import ContractList from "./pages/ContractListPage";
import Contract from "./pages/ContractPage";
import DressImg from "./pages/DressImgPage";
import DressSketch from "./pages/DressSketchPage";
import Login from "./pages/LoginPage";
import Main from "./pages/MainPage";
import Mypage from "./pages/MyPage";
import NFTLoading from "./pages/NFTLoadingPage";
import Planner from "./pages/PlannerPage";
import Prompt from "./pages/PromptPage";
import RecommendLoading from "./pages/RecommendLoadingPage";
import Review from "./pages/ReviewPage";
import Schedule from "./pages/SchedulePage";
import Sketch from "./pages/SketchPage";
import UserInfo from "./pages/UserInfoPage";
import ***REMOVED*** firebaseTokenState ***REMOVED*** from "./store/firebaseToken";

const queryClient = new QueryClient();

function AppContent() ***REMOVED***
  const userId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("token");
  const fcmToken = useRecoilValue(firebaseTokenState);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];
  const currentDetail = location.pathname.split("/")[2];

  useEffect(() => ***REMOVED***
    // 비로그인 상태일 경우 로그인 페이지로 리다이렉트
    if (!token && currentPath !== "login" && currentPath !== "callback") ***REMOVED***
      navigate("/login");
    ***REMOVED***

    // FCM 토큰 저장
    if (userId && fcmToken) ***REMOVED***
      saveFcmToken(fcmToken, userId);
      console.log("fcmToken saved");
    ***REMOVED***

    // 포그라운드 메시지 리스너 설정
    const initializeMessageListener = async () => ***REMOVED***
      try ***REMOVED***
        const payload = await onMessageListener();
        console.log("Foreground message received:", payload);
      ***REMOVED*** catch (error) ***REMOVED***
        console.error("Error in foreground message listener:", error);
      ***REMOVED***
    ***REMOVED***;

    initializeMessageListener();
  ***REMOVED***, [token, userId, fcmToken]);

  return (
    <>
      ***REMOVED***currentPath !== "login" && currentPath !== "userinfo" && <Navbar />***REMOVED***
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
        <Route path="/schedule" element=***REMOVED***<Schedule />***REMOVED*** />
        <Route path="/dress" element=***REMOVED***<DressSketch />***REMOVED*** />
        <Route path="/dress/img" element=***REMOVED***<DressImg />***REMOVED*** />
        <Route path="/sketch" element=***REMOVED***<Sketch />***REMOVED*** />
        <Route path="/contract/:category/:contractId" element=***REMOVED***<Contract />***REMOVED*** />
        <Route path="/contract/list" element=***REMOVED***<ContractList />***REMOVED*** />
        <Route path="/mypage" element=***REMOVED***<Mypage />***REMOVED*** />
        <Route path="/callback" element=***REMOVED***<CallBack />***REMOVED*** />
        <Route path="/nft/loading" element=***REMOVED***<NFTLoading />***REMOVED*** />
        <Route path="/recommend/loading" element=***REMOVED***<RecommendLoading />***REMOVED*** />
      </Routes>
      ***REMOVED***currentPath !== "login" &&
        currentPath !== "userinfo" &&
        currentDetail !== "detail" && <Footer />***REMOVED***
    </>
  );
***REMOVED***

function App() ***REMOVED***
  return (
    <div className="container">
      <RecoilRoot>
        <QueryClientProvider client=***REMOVED***queryClient***REMOVED***>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
***REMOVED***

export default App;
