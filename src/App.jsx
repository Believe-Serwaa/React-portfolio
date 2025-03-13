import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import AboutPage from './pages/AboutPage';
import ContactForm from './pages/ContactForm';
import Experience from './pages/Experience';
import HeroPage from './pages/HeroPage';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import ServicesPage from './pages/ServicesPage';

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "about", element: <AboutPage /> },
    { path: "experience", element: <Experience /> },
    { path: "hero", element: <HeroPage /> },
    { path: "services", element: <ServicesPage /> },
    { path: "portfolio", element: <Portfolio /> },
    { path: "contact", element: <ContactForm /> },
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
