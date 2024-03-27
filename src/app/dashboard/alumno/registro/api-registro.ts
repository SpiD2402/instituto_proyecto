interface Alumno {
    nombre: string;
    ap_paterno: string;
    ap_materno: string;
}


export async function addAlumno( form:Alumno) {
    const url = 'http://localhost:8080/api/alumno'
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

  export async function deleteAlumno( id:number) {
    const url = `http://localhost:8080/api/alumno/${id}`
    const token = localStorage.getItem('token')
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`

      }
    }
  
    const response = await fetch(url, options)
  
    return await response.json()
  }