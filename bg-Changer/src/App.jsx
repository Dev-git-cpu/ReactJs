import { useState } from 'react'
import './App.css'

function App() {
const [color, setColor] = useState("lavender")
  return (
      <div className='w-full h-screen duration-2000'
      style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px2'>
<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-4xl'>
<button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>Red</button>
<button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"blue"}} onClick={()=> setColor("blue")}>Blue</button>
<button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"green"}} onClick={()=> setColor("green")}>Green</button>
<button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"black"}} onClick={()=> setColor("black")}>Black</button>
</div>
        </div>
      </div>

  )
}

export default App
