import React from 'react'
import HeaderMenu from './HeaderMenu'
import { HiOutlineAcademicCap } from 'react-icons/hi'
import Link from 'next/link'

const menuItem = [

    {
        path: '/header/inicio',
        name: 'Inicio'

    },
    {
        path: '/header/carrera',
        name: 'Carreras'

    },
    ,

    {
        path: '/header/blog',
        name: 'Blog'

    },
    {
        path: '/header/contacto',
        name: 'Contacto'

    }

]



const Header = () => {
    return (
        <div className='bg-blue-900 w-full'>
            <div className='flex items-center  justify-between p-5 text-gray-100 mx-5 flex-wrap '>
                <div className='flex items-center gap-2 text-center'>   
                <HiOutlineAcademicCap  size={32}/>
                Latam-Institute
                </div>
                <div>
                    <ul className='flex  gap-6 flex-wrap justify-center text-center'>
                       {
                        menuItem.map(item =>(

                                <HeaderMenu key={item?.name}  path={item?.path} name={item?.name}/>
                        ))
                       }
                    </ul>

                </div>
                <div>
                    <Link href={'/loggin'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Loggin
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default Header
