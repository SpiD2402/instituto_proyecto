'use client'
import React, { useEffect, useState } from 'react'
import { deleteProfesor, listProfesor } from './api-profesor'
import Link from 'next/link';

const ProfesorAll = () => {

  const [profesor,setProfesor]= useState <any[]>( []);

  const allProfesor=async() =>{

    const data  = await listProfesor();

      setProfesor(data);
      console.log(data)
  }

   const onclickDelete =async(id:number,e: React.FormEvent<HTMLButtonElement>) =>{
    e.preventDefault();
      const data = await deleteProfesor(id);
      allProfesor();
      console.log(data);

   }
    
  
  useEffect(()=>{

      allProfesor();

  },[])


  return (
    <div className="container mx-auto mt-8">
    <h1 className="text-3xl font-bold mb-4">Listado de Profesores</h1>
    <Link className="w-full  mx-5 bg-blue-700 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded text-center"
      href={"/dashboard/profesor/registro"}>Agregar Profes</Link>
    <table className="my-4 min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Nombre</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Ap Paterno</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Ap Materno</th>
                <th scope="col" className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Accion</th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {profesor.map((profesor, index) => (
                <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{profesor.nombre}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{profesor.ap_paterno}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{profesor.ap_materno}</td>
                    <td className='flex'>
                        <button className="w-full  my-2 mx-2 bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
                          onClick={(e) => onclickDelete(profesor.id_profesor,e)}
                          >Eliminar
                          </button>
                          <Link href={`/dashboard/profesor/actualizar/${profesor.id_profesor}`}                             
                          className="w-full  my-2 mx-2 bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
                          
                          >
                            Actualizar
                          </Link>

                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default ProfesorAll
