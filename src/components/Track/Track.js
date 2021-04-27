import React, { useRef, useState } from "react";
import './Track.css';

export const Track = (props) => {
  // let preview = new Audio(props.track.previewUrl)
  const [playing, setPlaying] = useState(false);
  const ref = useRef();

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-Action" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-Action" onClick={addTrack}>
        +
      </button>
    );
  };
  const addTrack = () => {
    props.onAdd(props.track);
  };
  const removeTrack = () => {
    props.onRemove(props.track);
  };
  const playPreview = () => {
    ref.current.play();
    console.log(playing);
    setPlaying(true);
  };
  const pausePreview = () => {
    ref.current.pause();
    console.log(playing);
    setPlaying(false);
    
  };

  return (
    <div className="Track">
      <img src={props.track.imageUrl} alt='Cover' />
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}{" "}
        </p>
        <audio ref={ref} src={props.track.previewUrl} />
          <button className='preview' onClick={playing ? pausePreview : playPreview}>{(props.track.previewUrl === null) ? 'No preview available' : 'Preview'}</button>
        
        
      </div>
      {renderAction()}
      
    </div>
    
  );
};
