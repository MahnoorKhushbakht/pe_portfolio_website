import { Highlight, Text, Box, useBreakpointValue,Stack} from '@chakra-ui/react';
import SocialIcon from '../SocialIcon';
import ResumeBtn from '../ResumeBtn';
import WhatsAppBtn from '../WhatsappBtn';
import HeaderText from './HeaderText';



export default function HeadingText() {
  const fontSize = useBreakpointValue({ base: '18px', md: '20px' });
  const marginTop = useBreakpointValue({ base: '10%', md: '6%' });
  
  return (

<Box maxW="40rem" marginStart='40px' marginEnd='10px'marginTop={marginTop} >
<Box maxW="40rem">
<HeaderText>
          Hi there, <br />
          My name is Promise Emmananuel <br />
          <Highlight
            query={['Digital Marketer', 'Nigeria']}
            styles={{ color: '#735DA5', fontStyle: 'italic' }}
            className="animate__animated animate__bounce"
          >
            A Digital Marketer from Nigeria
          </Highlight>
          </HeaderText>
        <Text
          fontSize={fontSize}
          textAlign="left"
          className="animate__animated animate__fadeInUp"
          color='rgba(255, 255, 255, 0.856)'
          fontFamily="'Rubik', sans-serif"
        >
          Where creativity meets strategy.
        </Text>
        <Stack direction='row' spacing={4}>
          <ResumeBtn />
          <WhatsAppBtn/>
          </Stack>
          <SocialIcon />
      </Box>
      </Box>
  );
}
