import { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const StyledHeader = styled.header`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled(motion.h1)`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: var(--color-active);
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--color-primario);
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--color-active);
    transition: width 0.3s ease;
  }
  
  &:hover, &.active {
    color: var(--color-active);
    
    &:after {
      width: 100%;
    }
  }
`;

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <StyledHeader>
      <Logo 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Robert Romero
      </Logo>
      <Nav>
        <NavLink to="/" className={currentPath === '/' ? 'active' : ''}>Inicio</NavLink>
        <NavLink to="/curriculum" className={currentPath === '/curriculum' ? 'active' : ''}>Curriculum</NavLink>
        <NavLink to="/contacto" className={currentPath === '/contacto' ? 'active' : ''}>Contacto</NavLink>
      </Nav>
    </StyledHeader>
  );
};

export default Header;