import axios from "axios"

export const register = async(user) => {
    try {
        const {data} = await axios.post(`http://localhost:8080/auth/register`, user)
        return data
    } catch (error) {
        throw error
    }
}

export const login = async (user) => {
    try {
        const resp = await axios.post(`http://localhost:8080/auth/login`, user)
        
        if(resp.status === 200){
            localStorage.setItem('token', resp.data.payload.token)
            localStorage.setItem('user', JSON.stringify(resp.data.payload.user))
            return resp.data.payload
        }

    } catch (error) {
        throw error
    }
}