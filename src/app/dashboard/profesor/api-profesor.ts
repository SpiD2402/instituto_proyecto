export const listProfesor =async()=>{

    const url = `http://localhost:8080/api/profesor`
    const token = localStorage.getItem('token')
    const option={
        method:"GET",
        headers:{
            'Authorization':`Bearer ${token}`
        }
    }

    const data = await fetch(url,option);
    return data.json();
}


export const getByIdProfesor =async(id:number)=>{

    const url = `http://localhost:8080/api/profesor/${id}`
    const token = localStorage.getItem('token')
    const option={
        method:"GET",
        headers:{
            'Authorization':`Bearer ${token}`
        }
    }

    const data = await fetch(url,option);
    return data.json();
}


export const deleteProfesor =async(id:number)=>{

    const url = `http://localhost:8080/api/profesor/${id}`
    const token = localStorage.getItem('token')
    const option={
        method:"DELETE",
        headers:{
            'Authorization':`Bearer ${token}`
        }
    }

    const data = await fetch(url,option);
    return data.json();
}


interface Profesor {
    nombre: string;
    ap_paterno: string;
    ap_materno: string;
}



export const addProfesor =async(form:Profesor)=>{

    const url = `http://localhost:8080/api/profesor`
    const token = localStorage.getItem('token')
    const option={
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
        },
        body: JSON.stringify(form)
    
    }

    const data = await fetch(url,option);
    return data.json();
}


export const updateProfesor2 =async(id:number,form:Profesor)=>{

    const url = `http://localhost:8080/api/profesor/${id}`
    const token = localStorage.getItem('token')
    const option={
        method:"PUT",
        headers:{
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
        },
        body: JSON.stringify(form)
    
    }

    const data = await fetch(url,option);
    return data.json();
}