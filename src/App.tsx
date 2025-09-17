import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Discovery from './ui/Discovery';
import Collection from './ui/Collection';
import ErrorPage from './ui/ErrorPage';
import Car from './ui/Car';
import PageProduct from './ui/PageProduct';
import './App.css';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/',
        element: <Discovery />,
      },
      {
        path: '/collection',
        element: <Collection />,
      },
      {
        path: '/car',
        element: <Car />,
      },
      {
        path: '/product/:slug',
        element: <PageProduct />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
