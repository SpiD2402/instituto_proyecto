'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {  IoBookOutline, IoLogoReact } from 'react-icons/io5'
import SidebarMenuIem from './SidebarMenu'
import Link from 'next/link'
import { RiUser2Line, RiUser3Fill, RiUser3Line } from 'react-icons/ri'


const menuItem=[

    {
        path:'/dashboard/alumno',
        icon:<RiUser3Line size={40} />  ,
        title:'Alumno',
        subTitle:'Crud Alumno',
    },
    {
        path:'/dashboard/carrera',
        icon:<IoBookOutline  size={40}/>,
        title:'Carrera',
        subTitle:'Crud Carrera'
    }
    ,
  
    {
        path:'/dashboard/profesor',
        
        icon:<RiUser2Line size={40} />,
        title:'Profesor',
        subTitle:'Crud Profesor'    
    }


]


const Sidebar = () => {

    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);


    const borrarLocal=(e: React.FormEvent<HTMLButtonElement>)=>
    {
        e.preventDefault()
        localStorage.removeItem('token')

    }


    return (
        <div id="menu" style={{ width: '300px'}} 
        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 top-0">

            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white flex items-center">
                    <IoLogoReact className='mr-2'/>
                    <span>Gestion </span> 
                <span className="text-blue-500">Academica</span>
                </h1>
    
            </div>
            <div id="profile" className="px-8 py-10">
                <p className="text-slate-500 py-3">Bienvenido :</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                    <RiUser3Fill size={20} />
                    
                    </span>
                    <span className="text-sm md:text-base font-bold">
                    {username}
                    </span>
                </a>
            </div>


            <div id="nav" className="w-full px-6">
                <div>
                {
                            menuItem.map(item  => (

                                <SidebarMenuIem key={item.path}  {...item}            
                                />

                            ))

                }

                </div>
                <div className='mt-8'>
                    <button onClick={borrarLocal}>
                    <Link
                    href={'/header/inicio'} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</Link>

                    </button>
     
                </div>


            </div>

        
        </div>
    )
}

export default Sidebar
