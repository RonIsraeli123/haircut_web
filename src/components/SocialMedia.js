import React from 'react';
import { MdEmail } from 'react-icons/md';
import { MAIL_ADDRESS } from '../config/homePage/contact';

function SocialMedia() {
  return (
    <ul className='home-about-social-links'>
      <li className='social-icons'>
        <a
          href={`mailto:${MAIL_ADDRESS}`}
          target='_blank'
          rel='noreferrer'
          className='icon-colour home-social-icons'
        >
          <MdEmail className='social-icon' />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
