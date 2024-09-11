import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Jumbotron>
      <h1>Images Gallery</h1>
      <p>This is a simple site to retrieve images from the Unsplash API.</p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="blank">
          Learn more
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
