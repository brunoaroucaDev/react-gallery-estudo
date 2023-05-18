import { useRoutes } from "react-router-dom";
import { Photos } from "../pages/Photos";
import { Albums } from "../pages/Albums";

export const MainRoutes = () => {

  return useRoutes([
    { path: '/', element: <Albums/>},
    { path: '/album/:id/photos', element: <Photos />},
  ]);
}