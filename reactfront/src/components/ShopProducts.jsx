import React, { useState } from 'react'
import axios from 'axios'

const endpoint = 'http:localhost:8000/api'

function ShopProducts() {
    const [products, setProducts] = useState([])
    const [searchproducts, setSearchProducts] = useState([])
    const [busqueda, setBusqueda] = useState([])
  return (
    <>
    <div>Ventas</div>

    </>
  )
}

export default ShopProducts