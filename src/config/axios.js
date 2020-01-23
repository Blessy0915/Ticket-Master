import Axios from 'axios'

const axios = Axios.create({
    baseURL : 'http://localhost:3035'
})

export default axios