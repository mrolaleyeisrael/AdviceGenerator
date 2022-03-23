import { useState } from 'react'
import logo from './logo.svg'
import Advice from './components/Advice'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' rounded-lg sm:w-1/4 mx-4 sm:mx-auto bg-dark-gray-blue shadow-xl flex-col justify-center px-3 relative z-10'>

      <div className=' pt-8 pb-16 flex-col justify-center items-center'>

        <h6 className=' flex justify-center text-neon-green text-xs tracking-widest'>ADVICE #55</h6>

        <Advice />
        

        <svg className=' mx-auto' width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>


        <button className=' rounded-full p-4 inline-block bg-neon-green absolute right-1/2 -bottom-7 transform translate-x-1/2 hover:shadow-neon-green hover:shadow-xl z-30'>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
        </button>

      </div>

    </div>
  )
}

export default App
