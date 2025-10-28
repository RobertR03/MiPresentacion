import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  padding: 2rem 0;
`;

const Hero = styled.section`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-active);
`;

const HeroContent = styled.div`
  flex: 1;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, var(--color-primario), var(--color-active));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-active);
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: justify;
`;

const ProjectsSection = styled.section`
  margin-top: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--color-active);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  opacity: 0.8;
`;

const ProjectLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--color-active);
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

// Datos de ejemplo para proyectos
const projectsData = [
  {
    id: 1,
    title: 'Reproductor Mp3',
    description: 'Reproductor de música estática funcionando con javascript puro. (HTML-CSS-JS)',
    image: '/PNG/paginas/ReproductorMp3.png',
    url: 'https://reproductormp3.netlify.app/index.html'
  }
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <HomeContainer>
      <Hero as={motion.section}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <ProfileImage 
          src="/JPG/foto1.jpg" 
          alt="Robert Romero" 
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 5 }}
        />
        
        <HeroContent>
          <Title variants={itemVariants}>Robert Romero</Title>
          <Subtitle variants={itemVariants}>Programador - Full Stack Developer</Subtitle>
          <Description variants={itemVariants}>
            Mi nombre es Robert Romero, un entusiasta con una 
            pasión por el fascinante mundo de la informática.
            Mi inclinación natural hacia el desarrollo de software se 
            nutre de mi habilidad para abordar desafíos con una 
            mente lógica y resolutiva, transformando problemas en 
            oportunidades de aprendizaje constante. La programación 
            se presenta ante mí como una herramienta cautivadora 
            que mezcla mis sueños y aficiones... Mi aspiración más 
            profunda es contribuir con mis conocimientos a soluciones 
            aplicadas en situaciones problemáticas del mundo 
            real, convirtiendo mis sueños en proyectos con 
            impacto significativo.
          </Description>
          <motion.div variants={itemVariants}>
            <Link to="/curriculum" style={{ 
              padding: '0.8rem 2rem',
              background: 'var(--color-active)',
              color: '#fff',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: '500',
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }}>
              Ver mi Curriculum
            </Link>
          </motion.div>
        </HeroContent>
      </Hero>
      
      <ProjectsSection>
        <SectionTitle
          as={motion.h2}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Mis Proyectos
        </SectionTitle>
        
        <ProjectsGrid>
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id}
              as={motion.div}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLink href={project.url} target="_blank">Quiero verlo 👀</ProjectLink>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsSection>
    </HomeContainer>
  );
};

export default Home;