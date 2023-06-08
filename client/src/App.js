import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { ROUTES } from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContextProvider } from './context/UserContext';
function App() {
  const routes = createBrowserRouter(ROUTES)
  return (
    <>
    <UserContextProvider>
     <RouterProvider router={routes}>

     </RouterProvider>
     </UserContextProvider>
    </>
  );
}

export default App;
