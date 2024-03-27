'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { apiActualizar, apiBuscar } from '../api-actualizar';


interface Props{
    params:{id:number}
}

const ActualizarPage = ({params}:Props) => {

    const alumno = {
        nombre: '',
        ap_paterno: '',
        ap_materno: ''
    }

    const [alumnoData, setAlumnoData] = useState(alumno);
    const [mensaje,setMensaje]= useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setAlumnoData({ ...alumnoData, [name]: value })
        console.log(value)
    };
    const actualizarAlumno = async (e: React.FormEvent<HTMLButtonElement>,id:number) => {
        e.preventDefault();
        const data = await apiActualizar (id,alumnoData);
        if(data!=null)
        {
            setAlumnoData(alumno)
            setMensaje('El alumno fue actualizado')
        }
        else{
            setMensaje('Hubo un error')
        }
        console.log(data);
    }

    const buscarId=async(id:number) =>{

        const data = await apiBuscar(id);
        console.log(data);
        setAlumnoData(data);

    }

    useEffect(()=>{

        buscarId(params.id)

    },[])

    useEffect(() => {
        const timer = setTimeout(() => {
          setMensaje('');
        }, 5000);

        return () => clearTimeout(timer);
      }, [mensaje]);

    console.log(params.id)

  return (
    <div className="container mx-auto text-black flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Registro de Alumno</h1>
            <div className='flex flex-col gap-5'>
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium">Nombre:</label>
                    <input
                        placeholder='nombre'
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={alumnoData.nombre}
                        onChange={handleChange}
                        className="form-input mt-1 block w-72 my-2 rounded-lg px-4 py-2 bg-blue-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 hover:bg-gray-200 hover:border-gray-400"
                    />
                </div>
                <div>
                    <label htmlFor="ap_paterno" className="block text-sm font-medium">Apellido Paterno:</label>
                    <input
                        placeholder='Ap. Paterno'
                        type="text"
                        id="ap_paterno"
                        name="ap_paterno"
                        value={alumnoData.ap_paterno}
                        onChange={handleChange}
                        className="form-input mt-1 block w-72 my-2 rounded-lg px-4 py-2 bg-blue-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 hover:bg-gray-200 hover:border-gray-400"
                    />
                </div>
                <div>
                    <label htmlFor="ap_materno" className="block text-sm font-medium">Apellido Materno:</label>
                    <input
                        placeholder='Ap. Materno'
                        type="text"
                        id="ap_materno"
                        name="ap_materno"
                        value={alumnoData.ap_materno}
                        onChange={handleChange}
                        className="form-input mt-1 block my-2 w-72 rounded-lg px-4 py-2 bg-blue-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 hover:bg-gray-200 hover:border-gray-400"
                    />
    {mensaje && (
    <div
      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <span className="block sm:inline">{mensaje}</span>
    </div>
  )}
                </div>
                <div className='flex  justify-center'>
                    <button 
                        onClick={(e) =>actualizarAlumno(e,params.id)}
                        type="submit" 
                        className="w-full my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">Actualizar
                    </button>
                    <Link
                        href={"/dashboard/alumno"}
                        type="button"
                        className="w-full  my-2 mx-2 bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
                    >
                        Regresar
                    </Link>
                </div>

            </div>
        </div>
  )
}

export default ActualizarPage
