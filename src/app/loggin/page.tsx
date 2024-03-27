'use client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { loginUser } from './apiLogin'
import Link from 'next/link'

const LoginPage = () => {
  const user = {
    username:'',
    password:''
  };
 
  const [form, setUser] = useState(user);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (name === 'username') {
      setUsernameError('');
    }
    if (name === 'password') {
      setPasswordError('');
    }
    localStorage.setItem('username', form.username);
    setUser({ ...form, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!form.username) {
      setUsernameError('El campo de usuario no puede estar vacío');
      return;
    }

    if (!form.password) {
      setPasswordError('El campo de contraseña no puede estar vacío');
      return;
    }

    try {
      const response = await loginUser(form)
      console.log(response.token)  
      if(!response.token)
      {
        Swal.fire({
          icon: "error",
          title: "Error",
          text:response.error ,
        });
      }
      else{
        localStorage.setItem('token', response.token);
       
        window.location.href = '/dashboard/alumno';
      }
    }
    catch(error){
      console.log(error)
    }
    } ;

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-900">
    <div className="border mx-4 border-gray-950 p-8 rounded-lg w-96 bg-gray-800">
      <h2 className="text-white text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
      <form  className="py-5">
        <div className="mb-5">
          <label htmlFor="username" className="text-white block mb-2">
            Usuario:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            className="w-full px-2 py-2 rounded-md bg-gray-700 text-white"
          />
          {usernameError && <p className="text-red-500 pt-1">{usernameError}</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="text-white block mb-2">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="w-full px-2 py-2 rounded-md bg-gray-700 text-white"
            
          />
          {passwordError && <p className="text-red-500 pt-1">{passwordError}</p>}
        </div>
        <div>
          
        </div>

        <div className='flex  justify-between gap-3'>
          <div className='w-full'>
          <button
          type="button"
          className="w-full mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Ingresar
        </button>
          </div>
          <div className='w-full'>  
          <Link 
          href={"/register"}
          type="button"
          className="w-full mt-2 bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
        >
          Registrarse
        </Link>
          </div>

        </div>

      </form>


    </div>
  </div>
  )
}

export default LoginPage
