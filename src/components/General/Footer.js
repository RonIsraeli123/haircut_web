import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialMedia from './SocialMedia';

import { DEVELOP_BY, COPYRIGHT } from '../../config/general/footer/footer';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='4' className='footer-copywright'>
          <h3>{DEVELOP_BY}</h3>
        </Col>
        <Col md='4' className='footer-copywright'>
          <h3>
            {COPYRIGHT} © {year}{' '}
          </h3>
        </Col>
        <Col md='4' className='footer-body'>
          <SocialMedia />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
