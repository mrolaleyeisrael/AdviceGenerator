import { useState } from 'react'
import Advice from './components/Advice'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className=' rounded-lg max-w-sm mx-4 sm:mx-auto bg-dark-gray-blue shadow-xl flex-col justify-center px-3 relative z-10 h-[300px] w-[400px]'>

        <Advice />

      </div>

      <div className=' text-white mt-20 w-2/3 sm:w-1/2 mx-auto'>
        <Footer />
      </div>


    </div>
   
  )
}

export default App
