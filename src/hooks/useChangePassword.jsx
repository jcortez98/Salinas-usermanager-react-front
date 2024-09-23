import { changePasswordRequest } from "../services/userServices";
import toast from "react-hot-toast";

export const useChangePassword = (setIsOpen) => {

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleChangePassword = async (e, IoldPassword, InewPassword) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem('user'))

        const passwords = {
            oldPassword: IoldPassword,
            newPassword: InewPassword,
        }

        try {
            await toast.promise(
                changePasswordRequest(user.id, passwords), 
                {
                    loading: 'Actualizando...',
                    success: <b>Contraseña actualizada con éxito!</b>,
                    error: (err) => {
                        if (err.response && err.response.status === 401) {                            
                            return <b>La contraseña antigua no coincide.</b>;
                        }
                        return <b>No se pudo actualizar la contraseña.</b>;
                    },
                }
            );
            closeModal()
        } catch (error) {
            console.error("Error al cambiar contraseña", error);
        }
      };
    
    return {
        closeModal,
        handleChangePassword
    }
}
