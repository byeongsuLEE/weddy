import ***REMOVED*** useState ***REMOVED*** from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() ***REMOVED***
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src=***REMOVED***viteLogo***REMOVED*** className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src=***REMOVED***reactLogo***REMOVED*** className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick=***REMOVED***() => setCount((count) => count + 1)***REMOVED***>
          count is ***REMOVED***count***REMOVED***
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
***REMOVED***

export default App
