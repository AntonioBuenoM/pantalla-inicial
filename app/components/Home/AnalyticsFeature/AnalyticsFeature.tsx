import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const AnalyticsFeature = () => {
  return <div className='pt-24 pb-16' id='Nosotros'>
    {/*Define Grid*/}
    <div className='w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2'>
        {/**Image Content */}
        <div className='bg-center'>
            <Image src="/images/logo2.jpeg" alt="image" width={400} height={400} className='mx-auto' />
        </div>
        {/**Text Content */}
        <div className='p-6'>
            <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>
                Sobre Nosotros:
            </h1>
            <p className='mt-4 text-gray-600 text-sm font-medium leading-[2rem] text-justify'>
            Somos un Organismo de Control Autorizado (OCA) con raíces andaluzas, nacido con el compromiso de garantizar la seguridad y el correcto funcionamiento de los ascensores. <br/>Aunque somos una empresa joven, contamos con una sólida experiencia en el sector, aportando un enfoque dinámico, profesional y cercano a cada inspección.
Nuestra misión es elevar los estándares de calidad y seguridad a través de un servicio ágil, transparente y eficiente. Creemos en la innovación y en la mejora continua, manteniéndonos siempre al día con la normativa vigente para ofrecer a nuestros clientes la máxima confianza. <br/>
Si buscas un equipo comprometido, con experiencia y pasión por su trabajo, estás en el lugar adecuado
            </p>
            <ul className='mt-7 space-y-2 text-gay-800'>
                <li className='flex items-center font-semibold'>
                    <FaCheckCircle className='text-green-500 mr-2'/>
                    Compromiso con la seguridad y calidad
                </li>
                <li className='flex items-center font-semibold'>
                    <FaCheckCircle className='text-green-500 mr-2'/>
                    Experiencia con enfoque joven y dinámico
                </li>
                <li className='flex items-center font-semibold'>
                    <FaCheckCircle className='text-green-500 mr-2'/>
                    Innovación y mejora continua
                </li>
            </ul>
        </div>
    </div>
    </div>
  
}

export default AnalyticsFeature