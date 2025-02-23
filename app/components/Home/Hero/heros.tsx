import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]' id='Home' >
        <div className='flex justify-center flex-col w-[90%]  h-full mx-auto' style={{ backgroundImage: "url('/images/fondo.jpg')" }}>
            <div className='grid grid-cols-1 items-center gap-12'>
                {/*Text content */}
                <div>
                    {/*Heading */}
                    <h1 className='text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 text-white md:leading-[3rem] lg:leading-[3.5rem] ml-3' style={{ fontSize: 50, fontWeight: 700 }}>Elevamos la seguridad <br/>de tus ascensores</h1>
                </div>
                {/*Image content */}  
            </div>
        </div>
    </div>
  )
}

export default Hero