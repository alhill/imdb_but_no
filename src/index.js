import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RatingStoreProvider, FilmStoreProvider } from './contexts'
import { filmsInitialState, filmsReducer } from './reducers/filmsReducer';
import { ratingsInitialState, ratingsReducer } from './reducers/ratingsReducer';


ReactDOM.render(
  <React.StrictMode>
    <RatingStoreProvider initialState={ratingsInitialState} reducer={ratingsReducer}>
      <FilmStoreProvider initialState={filmsInitialState} reducer={filmsReducer}>
        <App />
      </FilmStoreProvider>
    </RatingStoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);