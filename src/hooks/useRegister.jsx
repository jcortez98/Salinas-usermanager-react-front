import { useNavigate } from "react-router-dom";
import { register } from "../services/authServices";
import toast from "react-hot-toast";

export const useRegister = (onRegister) => {


    const handleSubmitRegister = async (e, Iname, Isurname, Iemail, Ipassword) => {
        e.preventDefault();
    
        const user = {
            name: Iname,
            surname: Isurname,
            email: Iemail,
            password: Ipassword,
        };
    
        try {
            await toast.promise(
                register(user), 
                {
                    loading: 'Guardando...',
                    success: <b>Agregado con éxito!</b>,
                    error: (err) => {
                        if (err.response && err.response.status === 409) {                            
                            return <b>El correo ya se encuentra registrado.</b>;
                        }
                        return <b>No se pudo crear el usuario.</b>;
                    },
                }
            );
            onRegister()
        } catch (error) {
            console.error("Error en el registro:", error);
        }
    }
    

    return {
        handleSubmitRegister
    }
}
