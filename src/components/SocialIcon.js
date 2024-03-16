import React, { useState } from 'react';
import { Stack, Box } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaGithub,  FaArrowUp, FaArrowDown } from 'react-icons/fa';
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
    window.open('https://instagram.com/noor_khushbakht?igshid=OGQ5ZDc2ODk2ZA==', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('http://www.linkedin.com/in/mahnoorkhushbakht', '_blank');
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:Emmaogochi140@gmail.com';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/MahnoorKhushbakht', '_blank');
  };



  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        zIndex: 1000, // Ensure it's above other content
      }}
    >
      {showIcons ? (
        <Stack spacing={4} direction='column'>
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
            aria-label='Github'
            color='#735DA5'
            backgroundColor='rgba(255, 255, 255, 0.856)'
            fontSize='20px'
            size='lg'
            icon={<FaGithub />}
            onClick={handleGithubClick}
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
          <IconButton
            variant='solid'
            isRound={true}
            aria-label='Close Icons'
            color='#735DA5'
            backgroundColor='rgba(255, 255, 255, 0.856)'
            fontSize='20px'
            size='lg'
            icon={<FaArrowDown />}
            onClick={handleIconToggle}
          />
        </Stack>
      ) : (
        <IconButton
          variant='solid'
          isRound={true}
          aria-label='Toggle Icons'
          color='#735DA5'
          backgroundColor='rgba(255, 255, 255, 0.856)'
          fontSize='20px'
          size='lg'
          icon={<FaArrowUp />}
          onClick={handleIconToggle}
        />
      )}
    </Box>
  );
}
