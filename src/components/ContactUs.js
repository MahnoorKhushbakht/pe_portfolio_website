import * as React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function Ab() {
  const handleMailClick = () => {
    window.location.href = 'mailto:emmaogochi140@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+2349065956246';
  };
  
  const handleWhatsappClick = () => {
    window.open('whatsapp://send?phone=+2349065956246', '_blank');
  };

  return (
    <Row xs={3} md={3} className="g-4">
      <Col>
        <Card style={{  backgroundColor:'#735DA5' }} >
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <LocalPhoneIcon onClick={handlePhoneClick} style={{ fontSize: '30px', color: 'white'}} />
        
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{  backgroundColor:'#735DA5' }}>
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <WhatsAppIcon onClick={handleWhatsappClick} style={{ fontSize: '30px', color: 'white',backgroundColor:'#735DA5' }} />
           
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{  backgroundColor:'#735DA5' }} >
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <MailOutlineIcon onClick={handleMailClick} style={{ fontSize: '30px', color: 'white',backgroundColor:'#735DA5' }} />
          
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
