import * as React from 'react';
import { Box, ChakraProvider, Heading, Text, Button } from '@chakra-ui/react';

export default function BackgroundExp() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', height: '80%', marginLeft: '10px' }}>
      <ChakraProvider>
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <Heading fontSize={30} color={'rgba(255, 255, 255, 0.856)'} mb={4} fontFamily="'Rubik', sans-serif">
            About Me
          </Heading>
          <Text fontSize='md' color={'rgba(255, 255, 255, 0.856)'} fontFamily="'Rubik', sans-serif">
            <b>Driven freelancer adept at delivering excellence across various projects. Leveraging Fiverr and Upwork platforms to connect and create impactful solutions.</b><br/> A seasoned digital marketer with a passion for crafting compelling narratives and driving meaningful engagement in the online sphere. With 3 years of experience in the industry, brings a wealth of expertise in SEO, social media marketing, content creation, and analytics.
          </Text>
          <Button
            sx={{
              marginTop: '2px',
              background: 'rgba(255, 255, 255, 0.856)',
              color: '#735DA5',
              fontFamily: "'Rubik', sans-serif",
              '&:hover': {
                background: '#735DA5',
                color: 'rgba(255, 255, 255, 0.856)',
              },
            }}
          >
            <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>
              Contact Me
            </a>
          </Button>
        </Box>
      </ChakraProvider>
    </div>
  );
}
