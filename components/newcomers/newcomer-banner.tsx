import React from 'react'

const NewcomerBanner = () => {
  return (
    <div className='w-full h-64 bg-cover grid place-items-center bg-center bg-black/10' style={{ backgroundImage: "url('https://w.wallhaven.cc/full/ym/wallhaven-ym1m8l.jpg')" }}>
      <h1 className='text-5xl tracking-wide font-bold text-white text-center leading-[1.4] flex flex-col'><span>Welcome</span> <span className='text-xl'>to IIIT Lucknow</span></h1>
    </div>
  )
}

export default NewcomerBanner