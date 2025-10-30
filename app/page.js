'use client';
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SimilarGraph from "./components/SimilarGraph";
import MovieInfo from "./components/MovieInfo";
export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState(948);
  const [keepCompareOpen, setKeepCompareOpen] = useState(false);
  return (
    <div className="container-fluid">
      <div className="row p-2">
        <SearchBar setSelectedMovie={setSelectedMovie} />
        <button className="col-4" style={{ backgroundColor: keepCompareOpen ? 'green' : 'blue' }} onClick={() => setKeepCompareOpen(!keepCompareOpen)}>Comp</button>
      </div>
      <div className="row">
        <SimilarGraph movieId={selectedMovie} setSelectedMovie={setSelectedMovie} keepCompareOpen={keepCompareOpen} />
        <MovieInfo />
      </div>
    </div >
  );
}
