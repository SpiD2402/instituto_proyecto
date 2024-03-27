'use client'
import React, { ChangeEvent, useState } from 'react'
import { singUser } from './registrar';
import { useRouter } from 'next/router';

const page = () => {

  const user = {
    username:'',
    password:'',
    role:''
  };

     
  const [form, setUser] = useState(user);

  const [mensaje, setMensaje] = useState("");

  const handleChange=(e: React.FormEvent<HTMLInputElement>) =>{
      const {name,value} = e.currentTarget;

      setUser({...form,[name]:value})
      console.log(name,value)
  }
  const handleChange2 = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setUser({ ...form, [name]: value });
    console.log(name,value)
  };

  const registrarUsuario=async(e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = await singUser(form);
    if(data!=null)
    {
      setMensaje("Registro exitoso")
      setTimeout(()=>{

        setMensaje("")
        window.location.href="/loggin"
      },4000)

 

    }

     

    console.log(data);

  }



  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-gray-800">
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-6 ">Registro de Usuario</h2>
      <form className="space-y-4">

        <div>
          <label htmlFor="username" className="block text-sm font-medium">Username:</label>
          <input type="text" id="username"
          name='username'
          onChange={handleChange}
           className="form-input mt-1 block w-full rounded-lg px-4 py-2 bg-gray-100 text-gray-900" />
        
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">Contraseña:</label>
          <input type="password" 
           name='password'
          onChange={handleChange}
          id="password" className="form-input mt-1 block w-full rounded-lg px-4 py-2 bg-gray-100 text-gray-900" />
        </div>
        <div>
  <label htmlFor="role" className="block text-sm font-medium">Role:</label>
  <select id="role"
  value={form.role}
  onChange={handleChange2}
  className="form-select mt-1 block w-full rounded-lg px-4 py-2 bg-gray-100 text-gray-900">
    <option value="user" className="py-2">User</option>
    <option value="admin" className="py-2">Administrador</option>
    {/* Agrega más opciones según sea necesario */}
  </select>
</div>
      <div>

      {
        mensaje &&       <div
        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <span className="block sm:inline">{mensaje}</span>
      </div>
      }


      <button 
      onClick={registrarUsuario}
          type="button"
          className="w-full mt-2 bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
        >
          Registrarse
        </button>
      </div>
      </form>
    </div>
  </div>
  )
}

export default page
