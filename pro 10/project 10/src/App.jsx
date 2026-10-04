import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ReportCard from './reportcard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ReportCard />
    </div>
  )
}

export default App;
