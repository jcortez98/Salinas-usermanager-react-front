import { updateUsersRequest } from "../services/userServices"
import toast from "react-hot-toast"

export const useUpdateForm = (setOnUpdateUser) => {

    const handleSubmit = async (e, id, Iname, Isurname, Iemail, Istate) => {
        e.preventDefault()
        
        const user = {
            name: Iname,
            surname: Isurname,
            email: Iemail,
            state: Istate,
        }

        try {
            await toast.promise(
                updateUsersRequest(id, user), 
                {
                    loading: 'Editando...',
                    success: <b>Editado con éxito!</b>,
                    error: (err) => {
                        if (err.response && err.response.status === 409) {                            
                            return <b>El correo ya se encuentra registrado.</b>;
                        }
                        return <b>No se pudo editar el usuario.</b>;
                    },
                }
            );
            setOnUpdateUser(false)
        } catch (error) {
            console.error("Error en el registro:", error);
        }
    }

    return {
        handleSubmit
    }
}
