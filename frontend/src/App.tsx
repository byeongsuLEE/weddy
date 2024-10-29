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
import PlannerList from "./pages/PlannerListPage";
import Planner from './pages/PlannerPage';
import Review from "./pages/ReviewPage";
import Schedule from './pages/SchedulePage';
import Sketch from './pages/SketchPage'


function AppContent() ***REMOVED***
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];
  const currentDetail = location.pathname.split('/')[2];

  return (
    <>
      ***REMOVED***currentPath !== "login" && <Navbar />***REMOVED***
      <Routes>
        <Route path="/" element=***REMOVED***<Main />***REMOVED*** />
        <Route path="/review" element=***REMOVED***<Review />***REMOVED*** />
        <Route path="/cart" element=***REMOVED***<Cart />***REMOVED*** />
        <Route path="/login" element=***REMOVED***<Login />***REMOVED*** />
        <Route path="/board" element=***REMOVED***<Board />***REMOVED*** />
        <Route path="/board/detail" element=***REMOVED***<BoardDetail />***REMOVED*** />
        <Route path="/planner" element=***REMOVED***<Planner />***REMOVED*** />
        <Route path="/planner/list/:category" element=***REMOVED***<PlannerList />***REMOVED*** />
        <Route path="/schedule" element=***REMOVED***<Schedule />***REMOVED*** />
        <Route path="/sketch" element=***REMOVED***<Sketch />***REMOVED*** />
        <Route path="/contract/:category" element=***REMOVED***<Contract />***REMOVED*** />
        <Route path="/contract/list" element=***REMOVED***<ContractList />***REMOVED*** />
        <Route path="/mypage" element=***REMOVED***<Mypage />***REMOVED*** />
        <Route path="/callback" element=***REMOVED***<CallBack />***REMOVED*** />
      </Routes>
      ***REMOVED***(currentPath !== "login") && (currentDetail !== "detail") && <Footer />***REMOVED***
    </>
  );
***REMOVED***

function App() ***REMOVED***
  const queryClient = new QueryClient();

  return (
    <>
   
    <div className='container'>
      <QueryClientProvider client=***REMOVED***queryClient***REMOVED***>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
    </>
  );
***REMOVED***

export default App;
