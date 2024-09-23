import axios from "axios"

export const getUsersRequest = async () => {
    try {
        const {data} = await axios.get(`http://localhost:8080/api/v1/users/`)
        return data.payload
    } catch (error) {
        throw error
    }
}

export const deleteUsersRequest = async (id) => {
    try {
        const token = localStorage.getItem('token')
        
        const data = await axios.delete(`http://localhost:8080/api/v1/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        
        return data
    } catch (error) {
        throw error
    }
}

export const updateUsersRequest = async (id, user) => {
    try {
        const token = localStorage.getItem('token')

        const data = await axios.put(`http://localhost:8080/api/v1/users/${id}`, user, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data
    } catch (error) {
        throw error
    }
}

export const changePasswordRequest = async (id, passwords) => {
    try {
        const token = localStorage.getItem('token')

        const data = await axios.put(`http://localhost:8080/api/v1/users/update-password/${id}`, passwords, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data
    } catch (error) {
        throw error
    }
}