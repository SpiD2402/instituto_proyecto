export const  listAlumno = async()=>
{

    const url = 'http://localhost:8080/api/alumno'
    const token = localStorage.getItem('token')
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  
    const response = await fetch(url, options)
  
    return await response.json()


}