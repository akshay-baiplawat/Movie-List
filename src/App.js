import './App.css';
import { useState, useEffect } from 'react';
import { NavBar, MovieList, PageButton, Loading } from './components';
import axios from 'axios';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import About from './page/About';
import Moviesdt from './page/Moviesdt';
const API_URL = 'https://www.omdbapi.com';

function App() {
  const [movies, setMovies] = useState([]);
  const [inputvalue, setinputvalue] = useState('');
  const [IsLoding, setIsLoding] = useState(false);
  const [IsValue, setIsValue] = useState(true);
  const [Nomovie, setNoMovie] = useState(false);
  const [page, setpage] = useState(1);
  const [componentKey, setComponentKey] = useState(0);
  const [clickTriggered, setClickTriggered] = useState(0);

  useEffect(() => {
    const handleData = async () => {
      setIsValue(false);
      if (inputvalue) {
        setIsLoding(true);
        let response = await axios.get(
          `${API_URL}/?&s=${inputvalue}&page=${page}&apikey=9aa77e03`
        );
        setMovies(response.data.Search);
        setIsLoding(false);
      } else {
        setIsValue(true);
      }
    };
    setNoMovie(false);
    handleData();
  }, [page, clickTriggered]);

  const handleClick = async () => {
    setpage(1);
    setNoMovie(false);
    setClickTriggered(clickTriggered+1);
    
  };

  const handleSearch = async () => {
    setpage(1);
    setNoMovie(false);
    
  };

  return (
    <div className="App">
      <CssBaseline />
      <Router>
      <NavBar
        setinputvalue={setinputvalue}
        inputvalue={inputvalue}
        handleClick={handleClick}
        setNoMovie={setNoMovie}
      />

    
      <Routes>

          <Route path="/" element={
            <MovieList
            IsLoding={IsLoding}
            movieslist={movies}
            IsValue={IsValue}
            Nomovie={Nomovie}
            setNoMovie={setNoMovie}
            page={page}
            setpage={setpage}
            handleSearch={handleSearch}
            inputvalue={inputvalue}
            key={componentKey}
          />
          } >
        </Route>

          <Route path="/About" element={
            <About/>
          } >
        </Route>

          <Route path="/:id" element={
            <Moviesdt/>
          } >
        </Route>

      </Routes>
    </Router>

    
      {Nomovie && (
        <PageButton
          page={page}
          setpage={setpage}
          handleSearch={handleSearch}
          inputvalue={inputvalue}
        />
      )}
      
    </div>
  );
}

export default App;
