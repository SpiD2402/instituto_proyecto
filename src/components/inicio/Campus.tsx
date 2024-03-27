import Image from 'next/image'
import React from 'react'

const CampusPage = () => {
  return (
    <div className='bg-blue-700 p-20 px-40 flex justify-center flex-wrap items-center gap-4'>
       <div  >
        <div >
        <h1 className='text-4xl font-bold text-white'>CAMPUS DEL</h1>
        <h1 className='text-4xl font-bold text-white'>INSTITUTO LATAM</h1>
        <div className='text-white text-1xl my-3'>
        <p>
        Nuestro instituto cuenta con espacios y servicios 
        </p>
        <p>   que están en permanente evolución.</p>
        </div>

        </div>
        <ul className='text-white list-disc ml-4 '>
            <li>Campus Arequipa</li>
            <li>Campus Lima</li>
            <li>Campus Cuzco</li>
            <li>Campus Apurimac</li>
            <li>Campus Tarapoto</li>
            <li>Campus Chiclayo</li>
        </ul>

       </div>

       <div>

       <Image
  src={'/fachada-lima-centro.jpg'} 
  alt=''
  width={500}
  quality={100}
  height={80}
  style={{ maxWidth: '100%', maxHeight: '100%' }}
/>

       </div>
    </div>
  )
}

export default CampusPage
