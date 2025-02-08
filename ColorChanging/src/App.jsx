import { useState } from 'react'


function App() {
  const [color, setColor] = useState("beige")

  return (
    <div className='h-screen w-full duration-1000' style={{backgroundColor: color}}>
        <div className='fixed bottom-18 flex flex-wrap justify-center inset-x-2 rounded-2xl' >
          <div className='flex flex-wrap gap-3 px-2 py-2 rounded-3xl ' style={{backgroundColor: 'white'}}>
            <button onClick={()=>setColor("red")} className='px-4 py-2 mx-2 border-none rounded-2xl hover:shadow-md hover:scale-75 cursor-pointer' style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setColor("green")} className='px-4 py-2 mx-2 border-none rounded-2xl hover:shadow-md hover:scale-75 cursor-pointer' style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setColor("blue")} className='px-4 py-2 mx-2 border-none rounded-2xl text-white hover:shadow-md hover:scale-75 cursor-pointer' style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor("yellow")} className='px-4 py-2 mx-2 border-none rounded-2xl hover:shadow-md hover:scale-75 cursor-pointer' style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={()=>setColor("black")} className='px-4 py-2 mx-2 border-none rounded-2xl text-white hover:shadow-md hover:scale-75 cursor-pointer' style={{backgroundColor:"black"}}>Black</button>
            <button onClick={()=>setColor("beige")} className='px-4 py-2 mx-2 border-none rounded-2xl hover:shadow-md hover:scale-75 cursor-pointer' style={{backgroundColor:"beige"}}>Defalut</button>
          </div>
        </div>
    </div>
  )
}

export default App
