import styled from 'styled-components';
import { motion } from 'framer-motion';
import { contactInfo as contact } from '../../data/mockData.js';

const StyledFooter = styled.footer`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 1rem 0;
  list-style: none;
`;

const SocialItem = styled.li`
  position: relative;
`;

const SocialLink = styled.a`
  color: var(--color-primario);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  
  &:hover {
    color: var(--color-active);
    transform: translateY(-5px);
  }
  
  &.whatsapp:hover {
    color: #25D366;
  }
  
  &.email:hover {
    color: var(--color-active);
  }
  
  &.github:hover {
    color: var(--color-primario);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin-top: 1rem;
  opacity: 0.7;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3>CONTÁCTAME</h3>
      </motion.div>
      
      <SocialLinks>
        <SocialItem>
          <SocialLink 
            href={`https://wa.me/${contact.phone.replace(/\s/g,'')}?text=Hola%20Robert!`} 
            target="_blank" 
            className="whatsapp"
            as={motion.a}
            whileHover={{ scale: 1.1 }}
          >
            <i className="fa-brands fa-whatsapp"></i>
          </SocialLink>
        </SocialItem>
        
        <SocialItem>
          <SocialLink 
            href={`mailto:${contact.email}`} 
            target="_blank" 
            className="email"
            as={motion.a}
            whileHover={{ scale: 1.1 }}
          >
            <i className="fa fa-envelope"></i>
          </SocialLink>
        </SocialItem>
        
        <SocialItem>
          <SocialLink 
            href={contact.socialMedia.github} 
            target="_blank" 
            className="github"
            as={motion.a}
            whileHover={{ scale: 1.1 }}
          >
            <i className="fa-brands fa-github"></i>
          </SocialLink>
        </SocialItem>

        <SocialItem>
          <SocialLink 
            href={contact.website} 
            target="_blank" 
            className="website"
            as={motion.a}
            whileHover={{ scale: 1.1 }}
          >
            <i className="fa fa-globe"></i>
          </SocialLink>
        </SocialItem>

      </SocialLinks>
      
      <Copyright>© {new Date().getFullYear()} Robert Romero. Todos los derechos reservados.</Copyright>
    </StyledFooter>
  );
};

export default Footer;