import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { SweetAlert2 } from 'sweetalert2-react-content'
import Swal from 'sweetalert2'


const baseUrl = process.env.REACT_APP_BASE_URL


const CreateEstudiante = () => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [genero, setGenero] = useState('');
    const [edad, setEdad] = useState('');
    const [telefono, setTelefono] = useState('');


    const redirect = useNavigate();


    // agregar sweetalert2

    const handleSubmit = async (e) => {
        e.preventDefault();
        const estudiante = { nombre, correo, genero, edad, telefono };
        await axios.post(baseUrl, estudiante);
        redirect('/');
    }







  
  return (
    <div className='row mt-3'>
        <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
            <div className='card'>
                <div className='card-header bg-dark text-white'> Añadir Categoria</div>
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
                                <button type='submit' className='btn btn-primary'>Añadir</button>
                            </div>
                            

                        </form>
                    </div>
                </div>
        </div>
    </div>

  )
}

export default CreateEstudiante