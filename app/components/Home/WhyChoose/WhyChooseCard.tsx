import Image from 'next/image';
import React from 'react'

type Props ={
    title: string;
    image: string;
    body: string;
}

const WhyChooseCard = ({image, title, body}:Props) => {
  return <div>
    <Image src={image} alt={title} width={300} height={300} className='object-contain mx-auto'/>
    <h1 className='text-center text-lg mt-5 mb-5 font-semibold text-gray-800'>{title}</h1>
    <p className='text-gray-600 text-center font-medium text-sm mb-7'>{body}</p>
  </div>
}

export default WhyChooseCard