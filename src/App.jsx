import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>

      </div>
      <Footer />
    </div>
  )
}

export default App
