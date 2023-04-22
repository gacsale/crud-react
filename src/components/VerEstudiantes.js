import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { show_alert } from '../functions'
import { Link } from 'react-router-dom'

const baseUrl = process.env.REACT_APP_BASE_URL

const VerEstudiantes = () => {

    const [estudiantes, setEstudiantes] = useState([]);
   

    useEffect(() => { // se ejecuta cuando se carga el componente
        getEstudiantes();
    }, []);

    // con axios
    const getEstudiantes = async () => {
        const respuesta = await axios.get(baseUrl); // se hace la peticion a la api con axios y se guarda en respuesta
        setEstudiantes(respuesta.data); // se guarda en el estado categorias la respuesta de la api
        //respuesta.data.categoriaResponse.categorias: categoriaResponse es el nombre del objeto que devuelve la api y categorias es el nombre del array que devuelve la api
    }

    const deleteEstudiante = async (id) => {
        await axios.delete(baseUrl+'/'+id);
        getEstudiantes();
    }



  return (
    <div className='container'>
        <div className='row mt-3'>
            <div className='col-md-4 offset-md-4'>
                <div className='d-grid mx-auto'>
                    <Link to='/Create' className='btn btn-primary'>Añadir Estudiante</Link>
                 </div>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                <table className='table table-hover'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Genero</th>
                            <th>Teléfono</th>
                            <th>Edad</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {estudiantes.map((estudiante) => (
                            <tr key={estudiante.id}>
                                <td>{estudiante.id}</td>
                                <td>{estudiante.nombre}</td>
                                <td>{estudiante.correo}</td>
                                <td>{estudiante.genero}</td>
                                <td>{estudiante.telefono}</td>
                                <td>{estudiante.edad}</td>
                                <td>
                                    <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                                        <Link to={`/edit/${estudiante.id}`} className='btn btn-warning'>Editar</Link>
                                        <button className='btn btn-danger' onClick={() => deleteEstudiante(estudiante.id)}>Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>      
            </div>
        </div>
    </div>
    
  )
}

export default VerEstudiantes