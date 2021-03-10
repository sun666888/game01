import axios from 'axios'

const request = axios.create({
    timeout: 8000 
})

request.interceptors.response.use(
    response => {
        if (response.data) {
          return Promise.resolve(response.data)
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default request
