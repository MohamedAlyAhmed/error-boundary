import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';

const Home = () => {
    return <h2>Home Page</h2>;
  };
  
  
  const About = () => {
    return <h2>About Page</h2>;
  };

const router = createBrowserRouter([
    {
      path: "/",
      element: <ErrorBoundary><Layout /></ErrorBoundary>,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "error-page", element: <App /> },
      ],
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);