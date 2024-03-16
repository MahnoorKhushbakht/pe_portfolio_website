import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BackgroundExp from './BackgroundExp';
import ProfileImage from '../images/ProfileImage.jpeg';


const Container = styled('div')({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});


export default function AboutMe() {
  return (
    <div id='about' height='100vh'>
      <Container>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            width:'60%',
            height:'80%',
            alignItems: 'center',
          }}
        >


          <BackgroundExp/>

          <img
  style={{
    borderRadius: '50%',
    width: '250px',
    height: '250px',
    margin: '0 5px'
  }}
  src={ProfileImage}
  alt="avatar"
/>
        </Box>
        <Box
  sx={{
    flexGrow: 1,
    display: { xs: 'flex', md: 'none' },
    justifyContent: 'center',
    height: '60%',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>
  <img
    style={{
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      marginBottom: '30px'  
    }}
    src={ProfileImage}
    alt="avatar"
  />
  <BackgroundExp sx={{  height: '20%' ,margin: 0 }} /> 
</Box>

      </Container>
    <div className='text-center p-4' style={{ fontFamily:"'Rubik', sans-serif", backgroundColor: '#735DA5', color:'rgba(255, 255, 255, 0.856)'}}>
        © 2024 Copyright: Promise Emmananuel
    </div>
    </div>
  );
}
