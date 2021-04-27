import React from "react";
import { Tracklist } from '../Tracklist/Tracklist';
import './Playlist.css';

export const Playlist = (props) => {

  const handleNameChange = (e) => {
    props.onNameChange(e.target.value)
  }
  return (
    <div className="Playlist">
      <input type='text' defaultValue={""} placeholder='New Playlist' onChange={handleNameChange} />
      <Tracklist 
      tracks={props.tracks}
      setPlaylistTracks={props.setPlaylistTracks}
      onRemove={props.onRemove}
      isRemoval={props.isRemoval}
       />
      <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
};
