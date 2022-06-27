import React from "react";
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { fetchAlbums } from './actions'
import CircularProgress from '@mui/material/CircularProgress';


function App() {
  const isLoaded = useSelector(state => state.isLoaded)
  const albums = useSelector(state => state.albums)
  const text = useSelector(state => state.text)
  const dispatch = useDispatch();

  return (
    <div className="App">

      <div className="header">
        <span className="header_searchbar">

          <input
            id="searchBar"
            className="search-input"
            type="text"
            placeholder="Search..."
            onKeyPress={(e) => {
              dispatch(fetchAlbums())
            }}
          />

          <button
            className="search-btn"
            type="submit"
            onClick={(e) => {
              dispatch(fetchAlbums())
            }}>
            Search
          </button>
        </span>
      </div>

      <div className="body">
        <div className="intro">
          {isLoaded ? <CircularProgress /> : <h3>{text}</h3>}

        </div>
        {/*Albums load here*/}
        <div className="results_albums">
          {albums.map((album) => (
            <div className="albums_card">
              <img className="album_art" src={album.artworkUrl100} alt="album art" />
              <p className="album_name">{album.collectionName}</p>
              <p className="album_copyright">{album.copyright}</p>
            </div>
          ))}
        </div>
      </div>




    </div>
  );
}


export default App;
