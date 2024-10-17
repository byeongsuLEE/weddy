import ***REMOVED*** BrowserRouter, Route, Routes ***REMOVED*** from 'react-router-dom'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Main from './pages/MainPage'
import Test from './test/Test'
import Login from './pages/LoginPage'
import './index.css'; 


function App() ***REMOVED***

  return (
    <div className='content'>
      <BrowserRouter>
      ***REMOVED***location.pathname !== "/login" && (
      <Navbar />)***REMOVED***
        <Routes>
          <Route path="/" element=***REMOVED***<Main />***REMOVED*** />
          <Route path="/login" element=***REMOVED***<Login />***REMOVED*** />
          <Route path="/test" element=***REMOVED***<Test />***REMOVED***/>
        </Routes>
      </BrowserRouter>
      ***REMOVED***location.pathname !== "/login" && (
      <Footer />)***REMOVED***
    </div>

  )
***REMOVED***

export default App
