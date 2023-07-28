import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'
const endpoint = 'http://192.168.0.32:8000/api'
function ShowProducts() {
    const [products, setProducts] = useState([])
    useEffect (() => {
        getAllProduct()
    }, [])

    const getAllProduct = async () =>  {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
    }

    const deleteProduct = async (id) =>{
        const response = await axios.delete(`${endpoint}/product/${id}`)
        getAllProduct()
    }

  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar</Link>
        </div>

        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Stock</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                { products.map ((product) =>(
                    <tr key={product.id}>
                        <td> {product.name} </td>
                        <td> {product.descripcion} </td>
                        <td> {product.stock} </td>
                        <td> {product.price} </td>
                        <td>
                            <Link to={`/edit/${product.id}`} className='btn btn-warning'>
                                Editar
                            </Link>
                            <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'>
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ShowProducts