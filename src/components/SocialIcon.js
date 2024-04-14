import React, { useState } from 'react';
import { Stack, Box } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/react';

export default function SocialIcon() {
  const [showIcons, setShowIcons] = useState(false);

  const handleIconToggle = () => {
    setShowIcons(!showIcons);
  };

  const handleFacebookClick = () => {
    window.open('https://m.facebook.com/profile.php/?id=100083935701303', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/emaogochi/', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/promise-emmanuel-8728832a8/', '_blank');
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:emmaogochi140@gmail.com';
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        zIndex: 1000, 
      }}
    >
        <Stack spacing={4} direction='row'>
          <IconButton
            variant='solid'
            isRound={true}
            aria-label='Facebook'
            color='#735DA5'
            backgroundColor='rgba(255, 255, 255, 0.856)'
            fontSize='20px'
            size='lg'
            icon={<FaFacebook />}
            onClick={handleFacebookClick}
          />

          <IconButton
            variant='solid'
            isRound={true}
            color='#735DA5'
            backgroundColor='rgba(255, 255, 255, 0.856)'
            fontSize='20px'
            size='lg'
            icon={<FaInstagram />}
            onClick={handleInstagramClick}
          />
          <IconButton
            variant='solid'
            isRound={true}
            aria-label='LinkedIn'
            color='#735DA5'
            backgroundColor='rgba(255, 255, 255, 0.856)'
            fontSize='20px'
            size='lg'
            icon={<FaLinkedin />}
            onClick={handleLinkedinClick}
          />
          <IconButton
            variant='solid'
            isRound={true}
            aria-label='Mail'
            color='#735DA5'
            backgroundColor='rgba(255, 255, 255, 0.856)'
            fontSize='20px'
            size='lg'
            icon={<FaEnvelope />}
            onClick={handleMailClick}
          />
        </Stack>
    </Box>
  );
}
