import React from 'react'
import { FiActivity } from 'react-icons/fi'
import { GrLike } from 'react-icons/gr'
import { TiMortarBoard, TiWeatherSnow } from 'react-icons/ti'
import BeneficiosItems from './BeneficiosItems'


const menu = [

    {
        icon:<TiWeatherSnow size={70} />,
        nombre:'PRESTIGIO'
    },
    {
        icon:<TiMortarBoard size={70} />,
        nombre:' PROPUESTA EDUCATIVA'
    },
    {
        icon:<FiActivity size={70}/>,
        nombre:'DESARROLO ESTUDIANTIL'
    },
    {
        icon:<GrLike size={70}  />,
        nombre:'CONVENIOS UNIVERSITARIOS'
    },

]



const BeneficiosPage = () => {
    return (
        <div className=' bg-pink-500'>
            <div className='text-center py-10 mt-5'>
                <div>
                    <h1 className=' text-black-700 text-6xl font-mono'>Nuestros Beneficios</h1>
                    <div className='my-4 text-white'>
                    <p>Conoce más sobre lo que ofrece el Instituto Latam-Collage, tenemos más de 43 años activando el potencial de profesionales.
                    </p>
                    <p> Desde el 2012 el instituto Idat forma parte del Grupo Intercorp y está comprometido con el desarrollo y educación de los peruanos.</p>
                    </div>

                </div>
                <div className='flex items-center justify-center gap-10 flex-wrap'>

                        {
                            menu.map(item =>(

                                <BeneficiosItems key={item.nombre} {...item}/> 


                            ))
                        }

                </div>


            </div>

        </div>
    )
}

export default BeneficiosPage
