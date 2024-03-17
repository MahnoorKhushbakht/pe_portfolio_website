import { Heading, useBreakpointValue } from '@chakra-ui/react';

export default function HeaderText({ children }) {
    const fontSize = useBreakpointValue({ base: '8px', md: '50px' });
    return (
        <>
            <Heading
                style={{ fontSize: {fontSize}, textAlign: 'left', fontFamily: 'Rubik, Lato, sans-serif' }}
                lineHeight="tall"
                className="animate__animated animate__fadeInUp"
                color='#F6F1EE'
            >
                {children}
            </Heading>
        </>
    );
}
