import React from 'react'
import { useNavigate } from 'react-router';
import { Navbarcss, Title, Logo, Ham } from './Navbar.style'
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
  const navigate = useNavigate();
  const handleHome = () =>{
    navigate('/')
  }
  const handleAbout = () =>{
    navigate('/about')
  }
  return (
    <Navbarcss>
        <Logo>
            <h2 onClick={handleHome}>Lifeleck</h2>
        </Logo>
        <Title>
            <ul>
                <li onClick={handleHome}>Home</li>
                <li onClick={handleAbout}>About</li>
            </ul>
        </Title>
    </Navbarcss>
  )
}

export default Navbar