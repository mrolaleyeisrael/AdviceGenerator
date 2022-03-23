import { useState } from 'react'
import Advice from './components/Advice'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className=' rounded-lg max-w-sm mx-4 sm:mx-auto bg-dark-gray-blue shadow- shadow-neon-green flex-col justify-center px-3 relative z-10 h-[300px] md:w-[400px]'>

        <Advice />

      </div>

      <div className=' text-white mt-20 mx-auto'>
        <Footer />
      </div>


    </div>
   
  )
}

export default App
