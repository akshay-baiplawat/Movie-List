import React from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import MovieIcon from '@mui/icons-material/Movie';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../styles/NavBar.css";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


export default function NavBar({setinputvalue,inputvalue,searchfunc,handleClick}) {
  const  handleButtonClick = async () => {
    await handleClick();
    // setinputvalue(""); // Clear the input value
  };
  
  const  homepage = async () => {
    setinputvalue("");
    await handleClick();
     // Clear the input value
  };

  const  handleEnterClick = async (e) => {
    if(e.code ==="Enter"){
      await handleClick();
      // setinputvalue(""); // Clear the input value
    }
  };
  return (
    <>
      {/* <Box> */}
        <div className='navdiv'>
        <Link to={`/`} style={{ textDecoration: 'none' , color: 'inherit' }} >
       <> <MovieIcon fontSize='large' onClick={homepage} style={{ display: 'inline-block' }}/>
        <Typography variant='h4' sx={{ marginLeft: '20px' ,display: 'inline-block', marginTop: '-20px'}} onClick={homepage} >Movies List</Typography>
        </>
        </Link>
      <input
      onChange={(e)=>{
        setinputvalue(e.target.value);
      }}
      onKeyDown={handleEnterClick}
      placeholder='Search..'
      className='search'
      type='text'
      value={inputvalue}
      />
      <Button variant="outlined" color='inherit' startIcon={<SearchIcon />} onClick={handleButtonClick} >
        Search
      </Button>
        </div>
      {/* </Box> */}
    </>
  )
}
