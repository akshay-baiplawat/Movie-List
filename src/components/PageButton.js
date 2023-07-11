import React from 'react'
import {Box,ButtonGroup,Button} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import axios from 'axios';
const API_URL = 'http://www.omdbapi.com';

export default function PageButton({page,setpage,inputvalue}) {

    const  backButton = async () => {
        if(page>1){
            page -= 1;
            setpage(page);
            // handleData();
        }
      };

      const  NextButton = async () => {
        let response = await axios.get(
          `${API_URL}/?&s=${inputvalue}&page=${page+1}&apikey=9aa77e03`
        );
        console.log(response.data.Search);
        if(response.data.Search) {
        page += 1;
        setpage(page);
        }
      };

  return (
    <div  >
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                  m: 3,
                  display: "block",
                },
              }}
        >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button
  onClick={backButton}
  ><NavigateBeforeIcon/></Button>
  <Button>{page}</Button>
  <Button
  onClick={NextButton}
  ><NavigateNextIcon/></Button>
</ButtonGroup>
        </Box>
    </div>
  )
}
