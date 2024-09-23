import { useUser } from "../../hooks/useUser";

export const ButtonGroup = ({user, setUpdateTable, updateTable, setOnUpdateUser, setUser}) => {

  const { handleDeleteUser, handleUpdateUser } = useUser(setUpdateTable, updateTable, setOnUpdateUser)
  
  return (
    <>
      <div className="flex flex-col space-y-2">
        <button onClick={() => {handleUpdateUser(user, setUser)}} className="bg-sky-900 hover:bg-sky-950 text-base text-white font-semibold py-1 px-2 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Editar
        </button>
        <button onClick={() => {handleDeleteUser(user.id)}} className="bg-red-700 hover:bg-red-800 text-base text-white font-semibold py-1 px-2 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Eliminar
        </button>
      </div>
    </>
  );
};
