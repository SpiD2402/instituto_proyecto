import Image from 'next/image'
import React from 'react'

const HeaderMain = () => {
  return (
    <div className='mt-5 mx-5 flex items-center justify-center text-center' >
      <Image 
      src={'/images.jpg'} 
      alt=''
      width={1000}
        quality={100}
      height={80} />
    </div>
  )
}

export default HeaderMain
