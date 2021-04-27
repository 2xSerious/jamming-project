import React from "react";
import { Tracklist } from '../Tracklist/Tracklist';
import './SearchResults.css';

export const SearchResults = (props) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist
      tracks={props.searchResults}
      onAdd={props.onAdd}
      isRemoval={props.isRemoval}
       />
    </div>
  );
};
