import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layouts/Main.jsx';
import Login from './Components/Login/Login.jsx';
import './index.css';
import './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>
  },
  {
    path: 'login',
    element: <Login></Login>
  }
],{
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={router} future={{ v7_startTransition: true }}
    />
  </StrictMode>,
)
