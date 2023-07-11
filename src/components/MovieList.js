import React from 'react'
import MoviesCard from './MoviesCard'
import "../styles/MovieList.css"
import Grid from '@mui/material/Grid';
import PageButton from './PageButton';
import Loading from './Loading';
export default function MovieList({movieslist,IsLoding, IsValue,Nomovie,setNoMovie,componentKey,page,setpage,handleSearch,inputvalue}) {
  Nomovie=false;
  setNoMovie(Nomovie);
  if(IsValue){
    Nomovie=false;
    setNoMovie(Nomovie);
    return <div className='prosess2'> Enter Movie Name !!!</div>
  }
  if(IsLoding){
    Nomovie=false;
    setNoMovie(Nomovie);
    return <div className='prosess'>
    <Loading className="my-loading-spinner" />


    </div>
  }
  else{
    if (!movieslist) {
      Nomovie=false;
    setNoMovie(Nomovie);
        return <div className='prosess2'>Not Found ...#</div>;
      }else{
        Nomovie=true;
    setNoMovie(Nomovie);
      }
      
    return (
      <div className='movies-list'>
        <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-end"
        
        sx={{ marginTop: '30px' }}
        >
        {movieslist.map(movie=> (
        <MoviesCard movie={movie} key={movie.imdbID} componentKey={componentKey}/>
        ))}
      </Grid>
      {/* {Nomovie && (
      <PageButton
        page={page}
        setpage={setpage}
        handleSearch={handleSearch}
        inputvalue={inputvalue}
      />
    )} */}
        </div>
      )
    }
}
