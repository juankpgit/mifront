import axios from "axios";

const allClientes = async ()=> {
    const peticion = await axios.get('http://127.0.0.1/slim1/public/api/clientes')
    console.log(peticion.data)
}

export { 
    allClientes 
}