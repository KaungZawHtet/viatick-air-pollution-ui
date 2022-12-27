import React from 'react';
import { Container } from 'react-bootstrap'

const AboutPage = () => {

  const description = " This is a Viatick Air Pollution Test Project. For more info, check in the link below.";
  const link=""
  return (
    <Container>
      <div className='text-center mt-5'>
        <h1>{description}</h1>
        <p className='lead text-capitalize'>{link}</p>
      </div>
    </Container>
  );
}

export default AboutPage