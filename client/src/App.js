import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useMemo } from "react"; 
import { useSelector } from "react-redux";
import {CssBaseline, ThemeProvider} from "@mui/material"; 
import { createTheme } from "@mui/material/styles"; 
import { themeSettings } from "./theme"; 
import WatchFavorites from '../src/Pages/WatchFavorites/WatchFavorites.jsx';
import WatchHome from '../src/Pages/WatchHome/WatchHome.jsx';
import WatchProfile from '../src/Pages/WatchFavorites/WatchProfile.jsx';




const Layout = () => {
return (
  <>
  <Outlet />
  </>
)


}


const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,

    children: [
      {
        path: '/', 
        element: <WatchHome />
      },
      {
        path: '/favorites', 
        element: <WatchFavorites />
      }, 
      {
        path: '/profile/:userId', 
        element: <WatchProfile />
      }, 
    ]
  }
])



function App() {

  const mode = useSelector((state) => state.mode); 
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); 
 // const isAuth = Boolean(useSelector((state) => state.token)); 
 
   return (
    <>
    <ThemeProvider theme={theme}>
     <CssBaseline />
   <RouterProvider router={router}></RouterProvider>
   </ThemeProvider>
    </>
   );
 }
 
 export default App;