import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import * as Screens from './screens';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Screens.Home />} />
          <Route path="/favourites" element={<Screens.Favourites />} />
          <Route path="/rated" element={<Screens.Rated />} />
          <Route path="/film/:filmId" element={<Screens.SingleFilm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
