import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { unCliente } from '../funciones/funciones'

const Cliente = () => {
  const [cliente, setCliente] = useState(null)
  const params = useParams()
  useEffect( () =>{
    unCliente(params.id, setCliente)
  },[])
  
  return (
    <>
      { cliente != null ? ( 
        <>
          <h1>Cliente por ID {params.id}</h1>
          <p>Nombre: {cliente.nombre}</p>
        </>
      ) : ('sin datos') }

    </>
  
 
  )
}

export default Cliente