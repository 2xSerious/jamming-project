import './App.css';
import React, { useEffect, useState } from 'react';
import { SearchResults } from './components/SearchResults/SearchResults';
import { Playlist } from './components/Playlist/Playlist';
import { SearchBar } from './components/SearchBar/SearchBar';
import Spotify from './util/Spotify';


function App() {
  // const defaultState = {name:, artist, album, id};
 
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    window.addEventListener('load', () => {Spotify.getAccessToken()});
  }, []);

  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) return;
    setPlaylistTracks(prev => [...prev, track]);
  }
  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  }
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }
  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(playlistName, trackURIs);
    setPlaylistName('');
    setPlaylistTracks([]);
  }
  const search = (term) => {
   Spotify.search(term).then(results => setSearchResults(results));
  }


  return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing<span className='author'>...by Teodor</span></h1>
  
  <div className="App">
    <SearchBar
    onSearch={search} />

    <div className="App-playlist">
      <SearchResults 
      searchResults={searchResults}
      onAdd={addTrack}
      isRemoval={false}
      />

      <Playlist 
      name={playlistName}
      tracks={playlistTracks}
      onRemove={removeTrack}
      isRemoval={true}
      onNameChange={updatePlaylistName}
      onSave={savePlaylist}
       />
    </div>
  </div>
</div>
  )
}


export default App;
