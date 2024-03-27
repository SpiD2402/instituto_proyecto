  'use client'
  import React, { useEffect, useState } from 'react'
  import { eliminarCarrera, getCarrera } from './apis-carrera'
import Link from 'next/link';

  const page = () => {

      const [carrera,setCarrera] = useState <any[]>( []);

      const listadoCarrera  =async()=>{

          const data = await getCarrera();
          setCarrera(data);
      }


      const deleteCarrera=async(id:number,e:React.FormEvent<HTMLButtonElement>) =>{
          e.preventDefault();
          const data = await eliminarCarrera(id);
          listadoCarrera();
          console.log(data);
      }


      useEffect(()=>{

        listadoCarrera()

      },[])

    return (
      <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Listado de Carreras</h1>
      <Link className="w-full  mx-5 bg-blue-700 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded text-center"
        href={"/dashboard/carrera/crear"}>Agregar Carrera</Link>
      <table className="my-4 min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
              <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Nombre</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Duración</th>
                  <th scope="col" className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Accion</th>
              </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
              {carrera.map((carreraItem, index) => (
                  <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">{carreraItem.nombre}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{carreraItem.duracion}</td>
                      <td className='flex'>
                          <button className="w-full  my-2 mx-2 bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
                            onClick={(e)=>deleteCarrera(carreraItem.id_carrera,e)}
                            >Eliminar
                            </button>
                            <Link href={`/dashboard/carrera/actualizar/${carreraItem.id_carrera}`}                             
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

export default page
