import React, { useState, useEffect} from 'react'
import axios from 'axios'

const Advice = () => {
  const [advice, setAdvice] = useState('');

  const update = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((res) => {
      setAdvice(res.data);
    });
  };

  useEffect(update, []);

  if(!advice) return null;


  return (

    <div className=' pt-8 pb-16 flex-col justify-center items-center'>

      <h6 className=' flex justify-center text-neon-green text-xs tracking-widest'>ADVICE #{ advice.slip.id }</h6>
  
      <p className=' text-2xl py-4 text-white w-full'>"{ advice.slip.advice }"</p>
  
      <svg className=' mx-auto' width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>

      <button onClick={update} className=' rounded-full p-4 inline-block bg-neon-green absolute right-1/2 -bottom-7 transform translate-x-1/2 hover:shadow-neon-green hover:shadow-xl z-30'>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
      </button>

    </div>
  )
}

export default Advice











// const [advice, setAdvice] = useState([]);

// useEffect(() => {
//   const getAdvice = async () => {
//     try{
//       const response = await axios.get('https://api.adviceslip.com/advice');
//       console.log(response);
//       const myAdvice = response.data;
//       setAdvice(myAdvice);
//     } catch(error){
//       console.log(error)
//     }
//   };
//   getAdvice();
// }, []);

// const getAdvice = () => {
//   axios.get('https://api.adviceslip.com/advice')
//   .then(response => {
//     console.log(response)
//     const myAdvice = response.data;
//     setAdvice(myAdvice);
//   }) .catch ((error) {
//     console.log(error)
//   });
// };
// getAdvice()




// useEffect(() => getAdvice(), [])
