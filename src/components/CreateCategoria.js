import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { SweetAlert2 } from 'sweetalert2-react-content'
import Swal from 'sweetalert2'


const baseUrl = process.env.REACT_APP_BASE_URL


const CreateCategoria = () => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');


    const redirect = useNavigate();


    // agregar sweetalert2

    const handleSubmit = async (e) => {
        e.preventDefault();
        const categoria = { nombre, descripcion };
        await axios.post(baseUrl, categoria);
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
                            <label htmlFor='descripcion' className='form-label'>Descripción</label>
                            <input
                                className='form-control'
                                id='descripcion'
                                name='descripcion'
                                maxLength={255}
                                value={descripcion}
                                required
                                onChange={(e) => setDescripcion(e.target.value)}
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

export default CreateCategoria