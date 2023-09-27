import axios from 'axios'

const usersAPI = axios.create({
    baseURL: 'http://localhost:3050/users'
})

export default usersAPI