import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const baseUrl = process.env.REACT_APP_BASE_URL;


const EditarCategoria = () => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const { id } = useParams();
    const redirect = useNavigate();

    useEffect(() => {
        const getCategoria = async () => {
            const res = await axios.get(`${baseUrl}/${id}`); // se hace la peticion a la api con axios y se guarda en respuesta
            setNombre(res.data.categoriaResponse.categorias[0].nombre); // se guarda en el estado categorias la respuesta de la api respuesta.data.categoriaResponse.categorias: categoriaResponse es el nombre del objeto que devuelve la api y categorias es el nombre del array que devuelve la api
            setDescripcion(res.data.categoriaResponse.categorias[0].descripcion);
        }
        getCategoria();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const categoria = { nombre, descripcion };
        await axios.put(`${baseUrl}/${id}`, categoria);
        redirect('/');
    }


  return (
    <div className='row mt-3'>
    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
        <div className='card'>
            <div className='card-header bg-dark text-white'>Editar Categoria.</div>
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
                            <button type='submit' className='btn btn-primary'>Guardar</button>
                        </div>
                        

                    </form>
                </div>
            </div>
    </div>
</div>
  )
}

export default EditarCategoria