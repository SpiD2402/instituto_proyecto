
export const getCarrera= async()=>{

    const url  = `http://localhost:8080/api/carreraa`
    const token = localStorage.getItem('token')
    const option = {

        method:'GET',
        headers:{
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch (url,option);
    return  response.json();
}



export const getById= async(id:number)=>{

    const url  = `http://localhost:8080/api/carreraa/${id}`
    const token = localStorage.getItem('token')
    const option = {

        method:'GET',
        headers:{
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch (url,option);
    return  response.json();
}



interface carrera {
    nombre:string,
    duracion:number,
}


export async function  apiActualizar( id:number,form:carrera) {
    const url = `http://localhost:8080/api/carreraa/${id}`
    const token = localStorage.getItem('token')
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`

      },
      body: JSON.stringify(form)
    }
  
    const response = await fetch(url, options)
  
    return await response.json()
  }
  export const eliminarCarrera= async(id:number)=>{

    const url  = `http://localhost:8080/api/carreraa/${id}`
    const token = localStorage.getItem('token')
    const option = {

        method:'DELETE',
        headers:{
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch (url,option);
    return  response.json();
}



interface carrera2 {
    nombre:string,
    duracion:number,
    image_carera:string
}

export async function  apiGuardar( form:carrera2) {
    const url = `http://localhost:8080/api/carreraa`
    const token = localStorage.getItem('token')
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`

      },
      body: JSON.stringify(form)
    }
  
    const response = await fetch(url, options)
  
    return await response.json()
  }