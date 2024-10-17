import ***REMOVED*** BrowserRouter, Route, Routes ***REMOVED*** from 'react-router-dom'
import './App.css'
import Main from './pages/MainPage'
import Test from './test/test'

function App() ***REMOVED***

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=***REMOVED***<Main />***REMOVED*** />
          <Route path="/test" element=***REMOVED***<Test />***REMOVED***/>
        </Routes>
      </BrowserRouter>
    </>
  )
***REMOVED***

export default App
