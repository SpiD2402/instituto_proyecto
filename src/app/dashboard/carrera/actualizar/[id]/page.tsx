'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { apiActualizar, getById } from '../../apis-carrera'

interface Props {

    params :{id:number}
}


const ActualizarPage = ({params}:Props) => {
    const carrera ={
            nombre:"",
            duracion: 0,
    }

    const [form,setForm] = useState(carrera)
    const [mensaje,setMensaje] = useState('')


    const onClickActualizar=async(id:number,e:React.FormEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        const data = await apiActualizar(id,form);
        if(!!data)
        {
            setMensaje("Carrera actualizada correctamente")
            setTimeout(()=>{

                setMensaje("")
        },5000)

        }

        setForm( carrera)

    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value })
        console.log(value)
    };


    const geyById =async(id:number) =>{

        const data = await getById(id);
        setForm(data);
    }

    useEffect(()=>{

        geyById(params.id)

    },[])



  return (
    <div className="container mx-auto text-black flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Actualizar Curso</h1>
            <div className='flex flex-col gap-5'>
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium">Nombre:</label>
                    <input
                        placeholder='nombre'
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        className="form-input mt-1 block w-72 my-2 rounded-lg px-4 py-2 bg-blue-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 hover:bg-gray-200 hover:border-gray-400"
                    />
                </div>
                <div>
                    <label htmlFor="Duracion" className="block text-sm font-medium">Duracion:</label>
                    <input
                        placeholder='Duracion'
                        type="text"
                        id="duracion"
                        name="duracion"
                        value={form.duracion}
                        onChange={handleChange}
                        className="form-input mt-1 block w-72 my-2 rounded-lg px-4 py-2 bg-blue-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 hover:bg-gray-200 hover:border-gray-400"
                    />
                </div>
                {
                    mensaje && 
                    <div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <span className="block sm:inline">{mensaje}</span>
                  </div>
                }

                <div className='flex  justify-center'>
                    <button 
                        onClick={(e) =>onClickActualizar(params.id,e)}
                        type="submit" 
                        className="w-full my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">Actualizar
                    </button>
                    <Link
                        href={"/dashboard/carrera"}
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
