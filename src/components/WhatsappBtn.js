import { Button, Box } from '@chakra-ui/react';
import * as React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppBtn() {
  const handleWhatsappClick = () => {
    window.open('whatsapp://send?phone=+2349065956246', '_blank');
  };

  return (
    <Button
    onClick={handleWhatsappClick}
    size='md'
    display='flex'
    justifyContent='left'
    marginBottom='20px'
    fontFamily= "'Rubik', sans-serif"
    sx={{
      background: 'rgba(255, 255, 255, 0.856)',
      color: '#735DA5',
      '&:hover': {
        background: '#735DA5',
        color: 'rgba(255, 255, 255, 0.856)',
      },
    }}
    variant='contained'
  >
            <FaWhatsapp marginRight='2px' w={9} h={6} color='#735DA5.500' />
        WhatsApp

  </Button>
  );
}
