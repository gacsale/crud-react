import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const baseUrl = process.env.REACT_APP_BASE_URL;


const EditarEstudiante = () => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [genero, setGenero] = useState('');
    const [edad, setEdad] = useState('');
    const [telefono, setTelefono] = useState('');
    const { id } = useParams();
    const redirect = useNavigate();

    useEffect(() => {
        const getEstudiante = async () => {
            const res = await axios.get(`${baseUrl}/${id}`); // se hace la peticion a la api con axios y se guarda en respuesta
            setNombre(res.data.nombre); // se guarda en el estado categorias la respuesta de la api respuesta.data.categoriaResponse.categorias: categoriaResponse es el nombre del objeto que devuelve la api y categorias es el nombre del array que devuelve la api
            setCorreo(res.data.correo);
            setGenero(res.data.genero);
            setEdad(res.data.edad);
            setTelefono(res.data.telefono);
        }
        getEstudiante();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const estudiante = { nombre, correo, genero, edad, telefono };
        await axios.put(`${baseUrl}/${id}`, estudiante);
        redirect('/');
    }


  return (
    <div className='row mt-3'>
    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
        <div className='card'>
            <div className='card-header bg-dark text-white'>Editar Estudiante.</div>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='nombre' className='form-label'>Nombre</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='nombre' 
                            name='nombre' 
                            maxLength={50}
                            value={nombre} 
                            required
                            onChange={(e) => setNombre(e.target.value)} 
                            />
                        <label htmlFor='correo' className='form-label'>Correo</label>
                        <input
                            className='form-control'
                            id='correo'
                            name='correo'
                            maxLength={255}
                            value={correo}
                            required
                            onChange={(e) => setCorreo(e.target.value)}
                            />

                        <label htmlFor='genero' className='form-label'>Genero</label>
                        <input
                            className='form-control'
                            id='genero'
                            name='genero'
                            maxLength={255}
                            value={genero}
                            required
                            onChange={(e) => setGenero(e.target.value)}
                            />

                        <label htmlFor='edad' className='form-label'>Edad</label>
                        <input
                            className='form-control'
                            id='edad'
                            name='edad'
                            maxLength={255}
                            value={edad}
                            required
                            onChange={(e) => setEdad(e.target.value)}
                            />

                        <label htmlFor='telefono' className='form-label'>Telefono</label>
                        <input
                            className='form-control'
                            id='telefono'
                            name='telefono'
                            maxLength={255}
                            value={telefono}
                            required
                            onChange={(e) => setTelefono(e.target.value)}
                            />
                        
                        <div className='d-grid gap-2 mt-3'>
                            <button type='submit' className='btn btn-primary'>Guardar</button>
                        </div>
                        

                    </form>
                </div>
            </div>
    </div>
</div>
  )
}

export default EditarEstudiante