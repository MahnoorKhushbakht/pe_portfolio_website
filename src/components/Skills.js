import * as React from 'react';
import Stack from '@mui/material/Stack';
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';
import Card3 from './Cards/Card3';
import Typography from '@mui/material/Typography';
export default function Skills() {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
  };

  return (
    <div style={containerStyles} id="skills">
              <Typography color={'white'} variant="h5" fontWeight='bold' marginBottom={'10px'} fontFamily="'Rubik', sans-serif">
              My Skill Set
            </Typography>
            <Typography color={'white'} variant="h8" marginBottom={'20px'} fontFamily="'Rubik', sans-serif">
            Elevate Your Project with My Proficiencies
            </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ margin: '0 2%' }}
        display="flex" data-aos="fade-down"
      >
        <Card1 />
        <Card2 />
        <Card3 />
      </Stack>
    </div>
  );
}
