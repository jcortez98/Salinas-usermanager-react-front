import { useNavigate } from "react-router-dom"
import { login } from "../services/authServices"
import toast from "react-hot-toast"

export const useLogin = () => {

    let navigate = useNavigate()

    const handleSubmitLogin = async (e, Iemail, Ipassword) => {
        e.preventDefault()

        const user = {
            email : Iemail,
            password: Ipassword,
        }

        try {
            await toast.promise(
                login(user), 
                {
                    loading: 'Iniciando...',
                    success: <b>Sesión iniciada con éxito!</b>,
                    error: (err) => {
                        if (err.response && err.response.status === 401) {                            
                            return <b>Credenciales incorrectas.</b>;
                        }
                        return <b>Hubo un error al iniciar sesión, intente en un momento.</b>;
                    },
                }
            );
            navigate("/dashboard")
        } catch (error) {
            console.error("Error en el registro:", error);
        }
    }

    return {
        handleSubmitLogin
    }
}
