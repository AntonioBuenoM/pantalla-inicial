import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
  return <div className='pt-16 pb-16' id='Servicios'>
    <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>Qué ofrecemos:</h1>
    <div className='mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 gap-12'>
        {/* Campos WhyChoose */}
        
        <div>
           <WhyChooseCard image="/images/servicio.png" title="Inspección de Ascensores" body='Inspección de aparatos de elevación de velocidad superior a 0,15 m/s, según ITC AEM 1 "Ascensores"'/>
        </div>
        <div>
           <WhyChooseCard image="/images/servicio.png" title="Inspección de Ascensores de Velocidad Reducida"body='Inspección de aparatos de elevación de velocidad inferior a 0,15 m/s, según ITC AEM 1 "Ascensores"'/>
        </div>
        
    </div>
  </div>
  
}

export default WhyChoose