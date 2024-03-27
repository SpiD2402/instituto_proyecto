'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getByIdProfesor, updateProfesor2 } from '../../api-profesor'


interface Props {

    params:{id:number}

}




const ActualizarPage = ({params}:Props) => {


    const profesor = {
        nombre: '',
        ap_paterno: '',
        ap_materno: ''
    }

    const [profesorData, setProfesor] = useState(profesor);
    const [message,setMessage] = useState('')


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setProfesor({ ...profesorData, [name]: value })
        console.log(value)
    };

    const updateProfesor =async(id:number,e: React.FormEvent<HTMLButtonElement>)=>
    {
        e.preventDefault();
        const data = await updateProfesor2(id,profesorData)
        if(data!= null)
        {
            setMessage("Profesor actualizado correctamente")
     
            setTimeout(()=>{
                setMessage("")
            },2000)
           
        }
     
        console.log(data)
    }


    const buscarPorId =async(id:number)=>{

        const data = await getByIdProfesor(id);
        setProfesor(data)
    }
    useEffect(()=>{

         buscarPorId(params.id);
    },[])



  return (
    <div className="container mx-auto text-black flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Actualizar Profesor</h1>
            <div className='flex flex-col gap-5'>
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium">Nombre:</label>
                    <input
                        placeholder='nombre'
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={profesorData.nombre}
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
                        value={profesorData.ap_paterno}
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
                        value={profesorData.ap_materno}
                        onChange={handleChange}
                        className="form-input mt-1 block my-2 w-72 rounded-lg px-4 py-2 bg-blue-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 hover:bg-gray-200 hover:border-gray-400"
                    />

                </div>
                {message && (
    <div
      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
    </div>
  )}
                <div className='flex  justify-center'>
                    <button 
                        onClick={(e) =>updateProfesor(params.id,e)}
                        type="submit" 
                        className="w-full my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">Actualizar
                    </button>
                    <Link
                        href={"/dashboard/profesor"}
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
