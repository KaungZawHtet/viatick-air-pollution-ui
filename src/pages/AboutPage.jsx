import React from 'react';
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
const AboutPage = () => {

  const description = " This is a Viatick Air Pollution Test Project. For more info, check in the link below.";
  const uiLink = "https://github.com/KaungZawHtet/viatick-air-pollution-ui";
  const apiServer = "https://github.com/KaungZawHtet/viatick-air-pollution-api-server";
  return (
    <Container>
      <div className='text-center mt-5'>
        <h4>{description}</h4>
        <p className='lead text-capitalize'><a href={uiLink}> For UI Repository</a></p>
        <p className='lead text-capitalize'><a href={apiServer}> For API Server Repository</a></p>
      </div>
    </Container>
  );
}

export default AboutPage