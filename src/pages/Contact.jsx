import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 0;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(to right, var(--color-primario), var(--color-active));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-active);
  font-size: 1.2rem;
`;

const ContactLink = styled.a`
  color: var(--color-primario);
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--color-active);
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-primario);
  
  &:focus {
    outline: none;
    border-color: var(--color-active);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-primario);
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--color-active);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  background: var(--color-active);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  align-self: flex-start;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primario);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-active);
    color: #fff;
    transform: translateY(-5px);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('¡Mensaje enviado con éxito! Te responderé pronto.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <ContactContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contáctame
      </Title>
      
      <ContactGrid>
        <ContactInfo as={motion.div} initial="hidden" animate="visible" variants={containerVariants}>
          <ContactItem variants={itemVariants}>
            <IconWrapper>
              <i className="fa fa-map-marker-alt"></i>
            </IconWrapper>
            <div>
              <h3>Ubicación</h3>
              <p>Paraguay</p>
            </div>
          </ContactItem>
          
          <ContactItem variants={itemVariants}>
            <IconWrapper>
              <i className="fa fa-envelope"></i>
            </IconWrapper>
            <div>
              <h3>Email</h3>
              <ContactLink href="mailto:rjrch3@gmail.com">rjrch3@gmail.com</ContactLink>
            </div>
          </ContactItem>
          
          <ContactItem variants={itemVariants}>
            <IconWrapper>
              <i className="fa fa-phone"></i>
            </IconWrapper>
            <div>
              <h3>Teléfono</h3>
              <ContactLink href="tel:+595976988254">+595 976 988 254</ContactLink>
            </div>
          </ContactItem>
          
          <SocialLinks>
            <SocialLink 
              href="https://wa.me/595976988254?text=Hola%20Robert!" 
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fa-brands fa-whatsapp"></i>
            </SocialLink>
            
            <SocialLink 
              href="mailto:rjrch3@gmail.com" 
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fa fa-envelope"></i>
            </SocialLink>
            
            <SocialLink 
              href="https://github.com/RobertR03" 
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fa-brands fa-github"></i>
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
        
        <ContactForm 
          name="contact" // required by Netlify
          method="POST" // required by Netlify
          data-netlify="true" // enables Netlify form handling
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Netlify honeypot and form-name fields */}
          <input type="hidden" name="form-name" value="contact" />
          <p style={{ display: 'none' }}>
            <label>
              No llenes esto si eres humano: <input name="bot-field" />
            </label>
          </p>

          <FormGroup>
            <Label htmlFor="name">Nombre</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Asunto</Label>
            <Input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Mensaje</Label>
            <TextArea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <SubmitButton 
            type="submit" 
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </SubmitButton>
          
          {submitMessage && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: 'var(--color-active)' }}
            >
              {submitMessage}
            </motion.p>
          )}
        </ContactForm>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;