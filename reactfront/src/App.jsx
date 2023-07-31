import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowProducts from './components/ShowProducts'
import CreateProduct from './components/CreateProduct'
import EditProdcut from './components/EditProduct'
function App() {

  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<ShowProducts isView/>} />
            <Route path='/store' element = {<ShowProducts isView = {false}/>} />
            <Route path='/create' element = {<CreateProduct/>} />
            <Route path='/edit/:id' element = {<EditProdcut/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
