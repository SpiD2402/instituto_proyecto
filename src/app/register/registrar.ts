export interface RegisterForm{

    username:string,
    password:string,
    role:string,
}



export async function singUser( form:RegisterForm) {
    const url = 'http://localhost:8080/api/user/singup'
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }
  
    const response = await fetch(url, options)
  
    return await response.json()
  }