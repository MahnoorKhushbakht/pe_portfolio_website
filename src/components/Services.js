import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import 'aos/dist/aos.css';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Services() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cardStyle = {
    backgroundColor: '#a58ce0',
    border: '0px 0px 0px 0px',
    borderColor: 'transparent',
    width: '95%', 
    '@media (min-width:600px)': {
      width: '60%', 
    },
  };
  

  return (
    <div id='services' >
    <Box display="flex" data-aos="fade-down" data-aos-delay='100' justifyContent="center" alignItems="center" minHeight="100vh" marginTop='100px'  marginBottom='20px'>
      <Card
      
        variant="outlined"
        sx={cardStyle}
      >
        <CardContent>
        <Typography color={'white'} variant="h5" fontWeight='bold' marginBottom={'10px'} fontFamily="'Rubik', sans-serif">
              How can i assist?
            </Typography>
            <Typography color={'white'} variant="h8" marginBottom={'10px'} fontFamily="'Rubik', sans-serif">
            Empowering businesses with innovative digital strategies
            </Typography>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: '#735DA5' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Tabs
  value={value}
  onChange={handleChange}
  textColor="secondary"
  scrollButtons
  variant="scrollable"
  allowScrollButtonsMobile
  indicatorColor="secondary"
  aria-label="basic tabs example"
  style={{ color: 'white'}}
>
  <Tab
    label="Digital Marketing"
    {...a11yProps(0)}
    style={{ color: 'white' }}
  />
  <Tab
    label="E-commerce Solutions"
    {...a11yProps(1)}
    style={{ color: 'white' }}
  />
  <Tab
    label="Marketing Strategies"
    {...a11yProps(2)}
    style={{ color: 'white' }}
  />
</Tabs>
</div>

      </Box>
      <CustomTabPanel value={value} index={0} style={{ color: 'white' }} >
      With a keen eye for analytics and a creative flair, I excel in crafting tailored digital marketing campaigns that drive engagement and conversions. From SEO optimization to social media management, I leverage the latest tools and trends to maximize online visibility and reach target audiences effectively.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} style={{ color: 'white' }} >
      As an adept problem-solver in the e-commerce realm, I specialize in developing comprehensive solutions that streamline operations and enhance customer experiences. From optimizing product listings to implementing user-friendly checkout processes, I am dedicated to maximizing sales and revenue for online businesses.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} style={{ color: 'white' }} >
      With a strategic mindset and a thorough understanding of market dynamics, I devise innovative marketing strategies that align with business objectives and resonate with target demographics. By leveraging data-driven insights and staying abreast of industry trends, I consistently deliver impactful campaigns that drive brand awareness and foster customer loyalty.
      </CustomTabPanel>
    </Box>
    
    </CardContent>
        </Card>
        
      </Box>
      
      </div>
  );
}
