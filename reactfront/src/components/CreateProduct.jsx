import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://192.168.0.40:8000/api/product'


function CreateProduct() {

    const [name, setName] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()

    const store = async (e) =>{
        e.preventDefault()
        await axios.post(endpoint, {name: name, descripcion: descripcion, price:price, stock:stock})
        navigate('/')

    }
  return (
    <div className='container'>
        <h3>Registro de Producto</h3>
        <form onSubmit={store}>
            <div className='mb-3 '>
                <label className='form-label'>Nombre</label>
                <input  value={name} 
                        onChange={ (e) => setName(e.target.value)}
                        type='text'
                        className='form-control'/>
            </div>
            <div className='mb-3 '>
                <label className='form-label'>Descripcion</label>
                <textarea   value={descripcion} 
                            onChange={ (e) => setDescripcion(e.target.value)}
                            className='form-control'
                            rows="3"/>
            </div>
            <div className='mb-3 '>
                <label className='form-label'>Precio</label>
                <input  value={price} 
                        onChange={ (e) => setPrice(e.target.value)}
                        type='text'
                        className='form-control'/>
            </div>
            <div className='mb-3 '>
                <label className='form-label'>Stock</label>
                <input  value={stock} 
                        onChange={ (e) => setStock(e.target.value)}
                        type='text'
                        className='form-control'/>
            </div>
            <button type='submit' className='btn btn-success btncreateproduct'>Registrar Producto</button>
        </form>
    </div>
  )
}

export default CreateProduct