import { useState } from "react";
import { UserTable } from "../components/dashboard/UserTable";
import { UpdateForm } from "../components/dashboard/UpdateForm";
import { PrivateRoute } from "../components/PrivateRoute";

export const DashboardPage = () => {
  const [onUpdateUser, setOnUpdateUser] = useState(false)
  const [user, setUser] = useState()

  return (
    <>
        <PrivateRoute element={onUpdateUser ? <UpdateForm setOnUpdateUser={setOnUpdateUser} user={user}/> : <UserTable setOnUpdateUser={setOnUpdateUser} setUser={setUser}/>} />
    </>
  )
}
