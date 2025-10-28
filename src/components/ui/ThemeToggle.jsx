import { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';

const ToggleContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 100;
`;

const ToggleButton = styled(motion.button)`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: transparent;
  border: 2px solid var(--color-primario);
  color: var(--color-primario);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 10px var(--color-primario), inset 0 0 15px var(--color-primario);
  }
  
  &:active {
    box-shadow: 0 0 30px var(--color-primario);
  }
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <ToggleContainer>
      <ToggleButton 
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === 'light' ? (
          <i className="fa-solid fa-moon" aria-label="Cambiar a modo oscuro"></i>
        ) : (
          <i className="fa-solid fa-sun" aria-label="Cambiar a modo claro"></i>
        )}
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;