import React from 'react'
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Footercss } from './Footer.style';

const Footer = () => {
  return (
    <Footercss>
        <li>
            <BsFacebook size={32}/>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/sourav-prasad-sah-18a27b1b2/'>
          <BsLinkedin size={32}/>
          </a>
            
        </li>
        <li>
            <AiFillTwitterCircle size={32}/>
        </li>
    </Footercss>
  )
}

export default Footer