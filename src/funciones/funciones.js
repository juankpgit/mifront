import axios from "axios";

const allClientes = async (state)=> {
    const peticion = await axios.get('http://127.0.0.1/slim1/public/api/clientes')
    //console.log(peticion.data)
    state(peticion.data)

}

const unCliente = async(id, state) => {
    const peticion = await axios.get(`http://127.0.0.1/slim1/public/api/clientes/${id}`)
    // console.log(peticion.data)
    // console.log(peticion.data[0])
    state(peticion.data[0])
}



export { 
    allClientes, unCliente
}