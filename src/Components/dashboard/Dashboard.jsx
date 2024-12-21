import React from 'react'
import './dashboard.css'

export default function Home() {
  return (
    <div className="text-black w-full h-[calc(100vh-68px)]">
      <div className="flex flex-col p-10  w-full h-full lg:flex-row">
      <div className='flex flex-1 gap-3 flex-col '>
        <h1 className='text-7xl'><span className='text-amber-400 font-bold'>ConQuor</span> the Fear of EV</h1>
        <h3 className='text-3xl text-zinc-500 italic text-center '>"Choose Smart Way to Travel"</h3>
        <img src="./public/assets/logo/pngegg.png" alt="" />
      </div>
      <div className='flex flex-1 overflow-hidden p-4 justify-center items-center w-full h-full'>
        <div className='relative flex justify-center items-center w-full h-full'>
          <div className='absolute transform scale-y-[-1] flex h-full justify-center '>
            <img src="https://cdn-icons-png.flaticon.com/512/4796/4796085.png" className="h-full  transform  animate-rotate360 " alt="" />
          </div>
          <div className='absolute  flex h-1/2 rounded-full overflow-hidden justify-center '>
            <img src="https://cdn-icons-png.flaticon.com/512/4796/4796085.png" className="h-full bg-green-400  rounded-full scale-[2] " alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
