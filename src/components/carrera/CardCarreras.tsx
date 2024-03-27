import React from 'react'
import { Carr } from '@/components/carrera/carr-interface';

const CardCarreras = async () => {

    const apiCursos = async () => {
        const data: Carr[] = await fetch(`http://localhost:8080/api/carreraa`,
        {cache:'no-cache'}).then(carrera => carrera.json());
        console.log(data)
        return data;
    }

                
    const cursos = await apiCursos();

        
    return (
  <>
  {
    cursos.length ===0 ?(<div>Cargando</div>):
  
  cursos.map((curso,id) => (
    <div key={curso.id_carrera} className="max-w-sm  rounded overflow-hidden shadow-lg my-3">
            <img  src={curso.image_carera} className='w-full' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{curso.nombre} </div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Duracion: {curso.duracion} años</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Estado: {
                        curso.status ? 'Activo':'Inactivo'
                } </span>

            </div>
    </div>
))
}
  </>


    )
}

export default CardCarreras
