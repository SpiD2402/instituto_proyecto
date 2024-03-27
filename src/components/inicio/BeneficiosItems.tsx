import React from 'react'



interface Props{
    icon:JSX.Element,
    nombre:string,
}


const BeneficiosItems = ({icon,nombre}:Props) => {
  return (
    <div className='flex flex-col items-center'>
    {icon}
    <div className='text-white my-1'>
    {nombre}
    </div>


    </div>
  )
}

export default BeneficiosItems
