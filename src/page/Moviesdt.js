import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Container, Typography, Card, CardContent,Grid } from '@mui/material';
import { Loading } from '../components';

export default function Moviesdt() {
    const[IsLoding,setIsLoding]=useState(true);
    const[MoviesDetails,setMoviesDetails]=useState(null);
    const {id}=useParams();
    useEffect(() => {
        const searchData= async ()=>{
            setIsLoding(true);
            const res=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=9aa77e03`);
            setMoviesDetails(res.data);
            setIsLoding(false);
            console.log(res.data);
        };
        searchData();
    },[id]);
    if(IsLoding){
        return (<div> <Loading/></div>)
    }else if(MoviesDetails){
  return (
    
    <Grid
    container
    spacing={0}
    direction="column"
    justifyContent="space-evenly"
    alignItems="center"
    
    sx={{ marginTop: '30px' }}
    >
      
        
        <img src={MoviesDetails.Poster} style={{ height: '100%' ,width:'30%' }} alt={MoviesDetails.Titel} />
          <br />
          <Typography variant="h4">{MoviesDetails.Type} : {MoviesDetails.Title}</Typography>
          <Typography variant="h5">Released : {MoviesDetails.Released}</Typography>

          <Typography variant="h5">IMDB Rating : {MoviesDetails.imdbRating}</Typography>
          <Typography variant="h5">BoxOffice : {MoviesDetails.BoxOffice}</Typography>
          <Typography variant="h6">Awards : {MoviesDetails.Awards}</Typography>
          <br />
          <Typography variant="h6">Director : {MoviesDetails.Director}</Typography>
          <Typography variant="h6">Actors : {MoviesDetails.Actors}</Typography>
          <Typography variant="h6">Writer : {MoviesDetails.Writer}</Typography>
          <br />
          <Typography variant="h6">Genre : {MoviesDetails.Genre}</Typography>
          <Typography variant="h6">Language : {MoviesDetails.Language}</Typography>
          <Typography variant="h6">Country : {MoviesDetails.Country}</Typography>
          <Typography variant="h7">Plot : {MoviesDetails.Plot}</Typography>
          <br />
          {/* Add more movie details as needed */}
        

    </Grid>

     
  )
}else
return null;
}
