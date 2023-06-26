import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
//import { useMemo } from "react"; 
//import { useSelector } from "react-redux";
import WatchFavorites from './Pages/WatchFavorites.jsx';
import WatchHome from './Pages/WatchHome.jsx';
import WatchProfile from './Pages/WatchProfile.jsx';




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

 // const mode = useSelector((state) => state.mode); 
 // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); 
 // const isAuth = Boolean(useSelector((state) => state.token)); 
 
   return (
    <>
   
   <RouterProvider router={router}></RouterProvider>
    </>
   );
 }
 
 export default App;