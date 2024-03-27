
interface LoginForm {
  username: string;
  password: string;
  // Agrega otras propiedades del formulario según sea necesario
}

export async function loginUser( form:LoginForm) {
  const url = 'http://localhost:8080/api/user/login'

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