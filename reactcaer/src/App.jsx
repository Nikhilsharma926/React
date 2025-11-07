import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
 
  const [num, setA] = useState(0)
  return (
    <div>
        <Navbar/>
      <h1 className='bg-red-700 text-5xl'>Number is {num}</h1>
      <button onClick={()=>setA(num+10)}>Increment</button>
      <button onClick={()=>setA(num-10)}>Decrement</button>
      
    </div>
  )
}

export default App


