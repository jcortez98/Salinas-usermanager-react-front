import { Login } from "../components/auth/Login.jsx"
import { Register } from "../components/auth/Register.jsx"
import { useAuth } from "../hooks/useAuth.jsx"

export const AuthPage = () => {

  const {isRegister, onRegister} = useAuth()

  return (
    <>
      {isRegister ? 
      (<Register onRegister={onRegister}/>) :
      (<Login onRegister={onRegister}/>)}
    </>
  )
}
