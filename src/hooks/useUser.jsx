import { useState } from "react";
import { deleteUsersRequest } from "../services/userServices";
import toast from "react-hot-toast";

export const useUser = (setUpdateTable, updateTable, setOnUpdateUser) => {

    const handleDeleteUser = async(id) => {

        try {
            if(JSON.parse(localStorage.getItem('user')).id === id){
                toast.error("No es posible eliminar al usuario logueado!")
                return
            }

            toast((t) => (
                <span className="text-center">
                  Desea realizar la eliminación?
                  <div className="mt-2">
                    <button onClick={async() => {
                        toast.dismiss(t.id)

                        await toast.promise(
                            deleteUsersRequest(id), 
                            {
                                loading: 'Eliminando...',
                                success: <b>Eliminado con éxito!</b>,
                                error: <b>Hubo un error al eliminar!</b>
                            }
                        );
                        setUpdateTable(!updateTable)
                    }} 
                    className="bg-sky-900 hover:bg-sky-950 text-base text-white font-semibold py-1 px-2 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 me-1">
                        Aceptar
                    </button>
                    <button onClick={() => {
                        toast.dismiss(t.id)
                    }} 
                    className="bg-red-700 hover:bg-red-800 text-base text-white font-semibold py-1 px-2 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Cancelar
                    </button>
                  </div>
                </span>
            ));

        } catch (error) {
            console.error("Error en el registro:", error);
        }
    }

    const handleUpdateUser = (user, setUser) => {
        setUser(user)
        setOnUpdateUser(true)
    }

    return {
        handleDeleteUser,
        handleUpdateUser,
    }
}
