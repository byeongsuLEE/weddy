import ***REMOVED*** BrowserRouter, Route, Routes ***REMOVED*** from 'react-router-dom'
import './App.css'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Main from './pages/MainPage'

function App() ***REMOVED***

  return (
    <div className='content'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element=***REMOVED***<Main />***REMOVED*** />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  )
***REMOVED***

export default App
