import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Player } from '@lottiefiles/react-lottie-player';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import { Link } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {

  const { logout } = useAuth0()



  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex flex-wrap justify-center p-4 text-center text-gray-100">
        <div className='flex flex-col h-full sm:w-auto p-8 justify-center md:w-4/6'>
          <Player
            autoplay
            loop
            src="https://lottie.host/1bd95a40-15a8-4f26-8316-65a745bf596b/RAB5fZdDXn.json"
            style={{ height: '300px', width: '300px' }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BookList />} />
          <Route path='/register-book' element={<BookForm />} />
          <Route path='/edit-book/:id' element={<BookForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
