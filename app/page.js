'use client';
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import SimilarGraph from "./components/SimilarGraph";
import MovieInfo from "./components/MovieInfo";
export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [keepCompareOpen, setKeepCompareOpen] = useState(false);
  function changeSelectedMovie(newId) {
    setSelectedMovie(newId);
    localStorage.setItem('lastMovie', newId);
  }
  useEffect(() => {
    if (localStorage.getItem('lastMovie') != undefined)
      setSelectedMovie(localStorage.getItem('lastMovie'));
    else
      setSelectedMovie(944)
  }, [])
  return (
    <div className="container-fluid">
      <div className="row p-2">
        <SearchBar setSelectedMovie={changeSelectedMovie} />
        <button className="col-4" style={{ backgroundColor: keepCompareOpen ? 'green' : 'blue' }} onClick={() => setKeepCompareOpen(!keepCompareOpen)}>Comp</button>
      </div>
      <div className="row">
        <SimilarGraph movieId={selectedMovie} setSelectedMovie={changeSelectedMovie} keepCompareOpen={keepCompareOpen} />
        <MovieInfo />
      </div>
    </div >
  );
}
