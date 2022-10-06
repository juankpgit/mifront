import React, { useEffect } from 'react'
import {allClientes} from '../funciones/funciones'

const Clientes = () => {

  useEffect( ()=> {
    allClientes()
  },[])

  return (
    <div>Clientes</div>
  )
}

export default Clientes