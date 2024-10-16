import ***REMOVED*** BrowserRouter, Route, Routes ***REMOVED*** from 'react-router-dom'
import './App.css'
import Main from './pages/MainPage'

function App() ***REMOVED***

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=***REMOVED***<Main />***REMOVED*** />
        </Routes>
      </BrowserRouter>
    </>
  )
***REMOVED***

export default App
