import React from 'react'
import "../styles/MoviesCard.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

// Poster : "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
// Title :  "Avatar"
// Type : "movie"
// Year : "2009"
// imdbID : "tt0499549"

export default function MoviesCard({movie}) {
  // console.log(movie);
  return (
    <Link to={`/${movie.imdbID}`} style={{ textDecoration: 'none' , color: 'inherit' }}>
    <div className='movies-card' >
      
     <Card sx={{ maxWidth: 345 ,margin: '10px'}}  >
      <CardActionArea>
        <CardMedia
          component="img"
          height="400px"
          width="autoWidth"
          image={movie.Poster}
          alt={movie.Title+" Poster"}
        />
        <CardContent sx={{ maxHeight: 110  }} >
        <Typography gutterBottom variant="h6" component="div" sx={{ position: 'relative' }}>
    {movie.Title.length > 20
      ? `${movie.Type}: ${movie.Title.substring(0, 20)}...`
      : `${movie.Type}: ${movie.Title}`}
    {movie.Title.length < 20 && <span className="empty-line" />}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
          Year: {movie.Year}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
   
    </div>
    </Link>
  )
}
