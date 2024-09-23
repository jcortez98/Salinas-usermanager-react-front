import React, { useState } from 'react'
import { useUserTable } from '../../hooks/useUserTable'
import { ButtonGroup } from './ButtonGroup'
import { ChangePasswordModal } from './ChangePasswordModal'

export const UserTable = ({setOnUpdateUser, setUser}) => {

  const [updateTable, setUpdateTable] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const { handleLogOut, handleChangePassword, users, user:userData } = useUserTable(updateTable, setIsOpen)

  return (
    <>
    {
      isOpen && 
        (
          <ChangePasswordModal setIsOpen={setIsOpen}/>
        )
    }
    {
      userData &&
        (
          <h1 className="relative top-4 left-4 text-2xl mb-2" ><strong>Bienvenido, </strong>{userData.name} {userData.surname}</h1>
        )
    }
      <div className='flex justify-center py-10 '>
        <div className="container px-20">
        <button onClick={handleLogOut} className="absolute top-4 right-4 bg-stone-950 hover:bg-stone-950 text-base text-white font-semibold py-1 px-2 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Cerrar sesión
        </button>
        <button onClick={handleChangePassword} className="absolute top-4 right-40 bg-stone-950 hover:bg-stone-950 text-base text-white font-semibold py-1 px-2 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Cambiar contraseña
        </button>
        <h1 className="text-2xl font-bold" >Usuarios registrados</h1>
        {
          users &&
            <ul role="list" className="divide-y divide-gray-100 mx-4">
              {users.map((user) => (
                <li key={user.email} className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900 me-1">Id de usuario: {user.id}</p>
                      <div className="flex">
                        <p className="text-sm font-semibold leading-6 text-gray-900 me-1">{user.name}</p>
                        <p className="text-sm font-semibold leading-6 text-gray-900">{user.surname}</p>
                      </div>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <div className="flex">
                      <div className="me-4">
                        <p className={`text-sm font-semibold leading-6 text-gray-900 ${user.state === 'ACTIVO' ? "text-lime-600" : "text-red-600"}`}>ESTADO: {user.state}</p>
                        <p className="text-sm leading-6 text-gray-900">Roles de usuario:</p>
                        {user.roles.map((role) => (
                          <p key={role.id} className="text-sm font-semibold leading-6 text-gray-900">{role.name}</p>
                        ))}
                      </div>
                      {
                        userData.roles.some(role => role.name === 'ROLE_ADMIN') &&
                          <ButtonGroup user={user} setUpdateTable={setUpdateTable} updateTable={updateTable} setOnUpdateUser={setOnUpdateUser} setUser={setUser}/>
                      }
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          }
        </div>
      </div>
    </>
  )
}
