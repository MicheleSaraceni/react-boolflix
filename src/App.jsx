import './App.css';
import HeaderComp from './components/HeaderComp';
import CardComp from './components/CardComp';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [movies, setMovies] = useState([]);

  function getData() {
    axios
      .get('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=one+piece')
      .then(res => {
        console.log(res);
        setMovies(res.data.results);
      })
      .catch(err => console.log(err))
      .finally();
  }

  function handleFetchMovies() {
    getData();
  }

  useEffect(() => {
    handleFetchMovies();
  }, []);

  return (
    <>
      <header>
        <HeaderComp />
      </header>

      <main className="bg-light-gray min-vh-100 pt-60 d-flex justify-content-between align-items-center flex-wrap">
        {
          movies.map((movie) => <CardComp content={movie} key={movie.id} />)
        }

      </main>
    </>
  )
}

export default App
