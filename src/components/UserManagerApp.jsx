import { useRoutes } from "react-router-dom";
import { routes } from '../routes.jsx';
import toast, { Toaster } from 'react-hot-toast';

export const UserManagerApp = () => {
  let element = useRoutes(routes);
  return (
    <>
        {element}
        <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}
