interface alumno  {
    nombre:string,
    ap_paterno:string,
    ap_materno:string,
}



export async function  apiActualizar( id:number,form:alumno) {
    const url = `http://localhost:8080/api/alumno/${id}`
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


  export async function  apiBuscar( id:number) {  
    const url = `http://localhost:8080/api/alumno/${id}`
    const token = localStorage.getItem('token')
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`

      }
    }
  
    const response = await fetch(url, options)
  
    return await response.json()
  }