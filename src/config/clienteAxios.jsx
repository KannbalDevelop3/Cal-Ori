import axios from "axios";
const clienteAxios = axios.create({
    baseURL: `https://lms.kannbal.com/api_crud/api/`
})
export default clienteAxios