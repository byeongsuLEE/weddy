import ***REMOVED*** QueryClient, QueryClientProvider ***REMOVED*** from "react-query";
import ***REMOVED*** BrowserRouter, Route, Routes, useLocation ***REMOVED*** from 'react-router-dom';
import Footer from './common/Footer';
import Navbar from './common/Navbar';
import FooterButton from "./components/BoardDetailPage/FooterButton";
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
import PlannerList from "./pages/PlannerListPage";
import Planner from './pages/PlannerPage';
import Schedule from './pages/SchedulePage';

function AppContent() ***REMOVED***
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];
  const currentDetail = location.pathname.split('/')[2];

  return (
    <>
      ***REMOVED***currentPath !== "login" && <Navbar />***REMOVED***
      <Routes>
        <Route path="/" element=***REMOVED***<Main />***REMOVED*** />
        <Route path="/cart" element=***REMOVED***<Cart />***REMOVED*** />
        <Route path="/login" element=***REMOVED***<Login />***REMOVED*** />
        <Route path="/board" element=***REMOVED***<Board />***REMOVED*** />
        <Route path="/board/detail" element=***REMOVED***<BoardDetail />***REMOVED*** />
        <Route path="/planner" element=***REMOVED***<Planner />***REMOVED*** />
        <Route path="/planner/list" element=***REMOVED***<PlannerList />***REMOVED*** />
        <Route path="/schedule" element=***REMOVED***<Schedule />***REMOVED*** />
        <Route path="/contract" element=***REMOVED***<Contract />***REMOVED*** />
        <Route path="/contractlist" element=***REMOVED***<ContractList />***REMOVED*** />
        <Route path="/mypage" element=***REMOVED***<Mypage />***REMOVED*** />
        <Route path="/callback" element=***REMOVED***<CallBack />***REMOVED*** />
      </Routes>
      ***REMOVED***currentPath !== "login" && (currentPath !== "board" && currentDetail!=="datail") && <Footer />***REMOVED***
      ***REMOVED***currentPath === "board" && currentDetail === "detail" && <FooterButton />***REMOVED***
    </>
  );
***REMOVED***

function App() ***REMOVED***
  const queryClient = new QueryClient();

  return (
    <div className='content'>
      <QueryClientProvider client=***REMOVED***queryClient***REMOVED***>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
***REMOVED***

export default App;
