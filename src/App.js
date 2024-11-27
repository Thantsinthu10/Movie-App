import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router';
import NotFoundPage from './components/NotFoundPage';
import Details from './components/Details';

const App = () => {
  return (
    <div>
      <Header/>

<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/home" element={<Home/>} />
  <Route path="/movies/details/:movieId" element={<Details/>} />

  <Route path="*" element={<NotFoundPage/>} />

</Routes>

    </div>
  );
}

export default App;
