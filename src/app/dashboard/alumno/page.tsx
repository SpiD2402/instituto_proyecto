'use client'
import React, { useEffect, useState } from 'react'
import { listAlumno } from './api-alumno';
import { Alumno } from '@/components-dashboard/alumno/alumno-interface';
import { IoPersonSharp } from 'react-icons/io5';
import Link from 'next/link';
import { deleteAlumno,  } from './registro/api-registro';


const page = () => {

  const [alumnos, setAlumnos] = useState<Alumno[] | null>(null);

  useEffect(() => {


    fetchData();
  }, []); // Ejecutar una vez al montar el componente
  const fetchData = async () => {
    try {
      const data = await listAlumno() as Alumno[];
      setAlumnos(data);
    } catch (error) {
      console.error('Error al obtener los datos de los alumnos:', error);
    }
  };

  const onDelete=async(id:number,e: React.FormEvent<HTMLButtonElement>) =>
  {
    e.preventDefault();
      const data = await deleteAlumno(id); 
      fetchData()
      console.log(data);
  }



  return (
    <div className="container mx-auto py-6 text-black">
    <h1 className="text-3xl font-bold mb-4 text-center" >Lista de Alumnos</h1>
        <Link 
          href={"/dashboard/alumno/registro"}
          type="button"
          className=" my-4 ml-16 bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
        >
          Agregar
        </Link>

    {alumnos === null ? (
      <p>Cargando...</p>
    ) : (
      <div className=" gap-4 flex flex-wrap justify-center text-center">
        {alumnos.map(alumno => (
          <div key={alumno.id_alumno} className="w-80 bg-white rounded-lg shadow-md p-4 items-center">
          <div className="flex justify-center">
          <IoPersonSharp size={90} />
        </div>
            <div className="text-center">
              <p className="text-xl font-semibold">{alumno.nombre}</p>
              <p className="text-lg">{alumno.ap_paterno} {alumno.ap_materno}</p>
            </div>
            <button 
            onClick={ (e) => onDelete(alumno.id_alumno,e)}
          type="button"
          className=" my-4 mx-2 bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
        >
          Eliminar
        </button>


        <Link 
            href={`/dashboard/alumno/actualizar/${alumno.id_alumno}`}
        
          type="button"
          className=" my-4 mx-2 bg-yellow-300 hover:bg-green-500 text-white font-bold py-2 px-4 rounded text-center"
        >
          Actualizar
        </Link>
          </div>
        ))}
      </div>
    )}
  </div>
  )
}

export default page
