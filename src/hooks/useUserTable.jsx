import { useEffect, useState } from "react"
import { getUsersRequest } from "../services/userServices"
import { useNavigate } from "react-router-dom"

export const useUserTable = (updateTable, setIsOpen) => {

    const [users, setUsers] = useState()
    const [user, setUser] = useState()
    let navigate = useNavigate()

    useEffect(() => {
      getUsersRequest().then((users) => {
        setUsers(users)
      })
      
      setUser(JSON.parse(localStorage.getItem('user')))
    }, [updateTable])
    
    const handleLogOut = () => {
      localStorage.clear()
      navigate("/")
    }

    const handleChangePassword = () => {
      setIsOpen(true)
    }

    return {
      handleLogOut,
      handleChangePassword,
      users,
      user
    }
}
