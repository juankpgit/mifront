import React, { useEffect, useState } from 'react'
import {allClientes} from '../funciones/funciones'

const Clientes = () => {
  const [clientes, setClientes] = useState(null)

  useEffect( ()=> {
    allClientes(setClientes)
  },[])

  return (
    <>
      <h1>Clientes</h1>
      { clientes != null ? (
        clientes.map(cliente => (
          <div key={cliente.id}>
            <a href={`/cliente/${cliente.id}`}>{cliente.nombre}</a>
          </div>
        ))
      ) : ('No hay datos')}
    </>
  )
}

export default Clientes