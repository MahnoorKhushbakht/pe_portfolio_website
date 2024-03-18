import Resume from '../Docs/PromiseEmmanuel_Resume.pdf';
import { Button, CircularProgress, Box } from '@chakra-ui/react';
import * as React from 'react';
import { DownloadIcon } from '@chakra-ui/icons';

export default function ResumeBtn() {
  const [loading, setLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <a href={Resume} download>
        <Button
          onClick={handleDownload}
          size='md'
          display='flex'
          justifyContent='left'
          marginBottom='20px'
          fontFamily="'Rubik', sans-serif"
          sx={{
            background: 'rgba(255, 255, 255, 0.856)',
            color: '#735DA5',
            '&:hover': {
              background: '#735DA5',
              color: 'rgba(255, 255, 255, 0.856)',
            },
          }}
          variant='contained'
          disabled={loading}
        >
          {!loading && (
            <>
              <DownloadIcon marginRight='2px' w={4} h={4} color='#735DA5.500' />
              Resume
            </>
          )}
          {loading && (
            <Box ml='2'>
              <CircularProgress size='30px' color='#735DA5.300' value={progress} thickness={6} />
            </Box>
          )}
        </Button>
      </a>
    </>
  );
}
