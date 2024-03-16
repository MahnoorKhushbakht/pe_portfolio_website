import 'animate.css';
import React from 'react';
import {Box} from '@chakra-ui/react';
import HeadingText from './HeadingText';


export default function Heading() {
    return (
        <div>

            <Box 
            height="100vh"
            display="flex"
            textAlign="center"
            alignItems="center"     
            justifyContent="flex-start" >
    <HeadingText/>

      </Box>
        </div>
    )
}