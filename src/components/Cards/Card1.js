import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DataThresholdingTwoToneIcon from '@mui/icons-material/DataThresholdingTwoTone';
import Fab from "@mui/material/Fab";
import '../css/Services.css'
function Card1() {
  return (
      <Card
        variant="outlined"
        className="animate__animated animate__flipInX card"
        sx={{
          flexGrow: 1,
          display: { xs: '400', md: '800' },
          backgroundColor: 'transparent',
          border:'0px',
          width: '90%',
        }}
      >
      <CardContent>
        <Fab
          style={{
            color: "#735DA5",
            marginBottom: "40px",
          }}
        >
          <DataThresholdingTwoToneIcon />
        </Fab>
        <Typography variant="body1" style={{ color: "white",   fontFamily:"'Rubik', sans-serif"}}>
        I craft engaging campaigns that drive results through data-driven insights.
        </Typography>
      
      </CardContent>
    </Card>

  );
}

export default Card1;
