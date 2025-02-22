import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebook, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return <div className='bg-white py-10'>
    <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8' id='Contacto'>
        <div className='grid grid-colds-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            <div>

            </div>
            {/**Logo and description */}
            <div>
                {/*Logo*/}
                <h1 className="text-xl md:text-2xl font-bold"><span className="text-3xl md:text-4xl"style={{ color: "#8cada4" }}>I</span>nspe<span className="text-3xl md:text-4xl"style={{ color: "#8cada4" }}>S</span>ur</h1>
                {/*Description*/}
                <p className='mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600'>
                Elevamos la seguridad de tus ascensores
                </p>
            </div>
            {/*Contact Info*/}
            <div>
                <h3 className='text-lg font-semibold text-gray-800'>Contacto:</h3>
                <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                    <li className='flex items-center'>
                        <FaMapMarkedAlt className='mr-2'/>
                        Peal de Becerro, Jaén
                    </li>
                    <li className='flex items-center'>
                        <FaPhoneAlt className='mr-2'/>
                        +34 123456789
                    </li>
                    <li className='flex items-center'>
                        <FaEnvelope className='mr-2'/>
                       info.example@gmail.com
                    </li>
                    <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                <span>Social : </span>
                 <Link href="#" className="text-gray-500 hover:text-gray-800">
                <FaFacebook/>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-800">
                <FaTwitter/>
                </Link>
            </div>
                </ul>
            </div>
        </div>
    </div>
  </div>
  
}

export default Footer