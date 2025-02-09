import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { saveFcmToken } from "./api/userApi";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import { onMessageListener } from "./firebase";
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
import { firebaseTokenState } from "./store/firebaseToken";

const queryClient = new QueryClient();

function AppContent() {
  const userId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("token");
  const fcmToken = useRecoilValue(firebaseTokenState);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];
  const currentDetail = location.pathname.split("/")[2];
  const nowPath = location.pathname;

  useEffect(() => {
    if (!token && nowPath !== "/api/oauth2/authorization/google" && nowPath !== "/callback") {
      navigate("/login");
    }

    if (userId && fcmToken) {
      saveFcmToken(fcmToken, userId);
    }

    const initializeMessageListener = async () => {
      try {
        await onMessageListener();
      } catch {
        alert("포그라운드 메시지 리스너 오류 발생");
        // 포그라운드 메시지 리스너 오류 처리 로직
      }
    };

    initializeMessageListener();
  }, [token, userId, fcmToken, nowPath]);

  return (
    <>
      {currentPath !== "login" && currentPath !== "userinfo" && <Navbar />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/review/:productId" element={<Review />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/detail/:productId" element={<BoardDetail />} />
        <Route path="/prompt" element={<Prompt />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/dress" element={<DressSketch />} />
        <Route path="/dress/img" element={<DressImg />} />
        <Route path="/sketch" element={<Sketch />} />
        <Route path="/contract/:category/:contractId" element={<Contract />} />
        <Route path="/contract/list" element={<ContractList />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/callback" element={<CallBack />} />
        <Route path="/nft/loading" element={<NFTLoading />} />
        <Route path="/recommend/loading" element={<RecommendLoading />} />
      </Routes>
      {currentPath !== "login" &&
        currentPath !== "userinfo" &&
        currentDetail !== "detail" && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className="container">
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
