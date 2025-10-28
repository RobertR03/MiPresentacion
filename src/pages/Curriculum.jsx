import { motion } from 'framer-motion';
import styled from 'styled-components';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CurriculumPDF from '../pdf/CurriculumPDF.jsx';
import { profile, experiences, education as eduData, skillsKnowledge, skillsFrameworks, languages, interests, references } from '../data/curriculumData.js';

const CurriculumContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const Section = styled(motion.section)`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--color-active);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--color-active);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SpecialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-active);
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: var(--color-active);
  margin-bottom: 1rem;
  font-style: italic;
`;

const Bio = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: justify;
`;

const ExperienceItem = styled(motion.div)`
  margin-bottom: 2rem;
  padding-left: 1rem;
  border-left: 2px solid var(--color-active);
`;

const Period = styled.span`
  color: var(--color-active);
  font-size: 0.9rem;
  font-weight: 500;
`;

const Company = styled.h3`
  font-size: 1.3rem;
  margin: 0.5rem 0;
`;

const JobDescription = styled.p`
  line-height: 1.6;
  opacity: 0.9;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const Skill = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--color-active);
  border-radius: 20px;
  font-size: 0.9rem;
`;

const LanguageItem = styled.div`
  margin-bottom: 1rem;
`;

const LanguageName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ProgressBar = styled.div`
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: var(--color-active);
  border-radius: 4px;
  width: ${props => props.value}%;
`;

const ContactItem = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ContactLink = styled.a`
  color: var(--color-active);
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const InterestsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

const InterestItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const InterestIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
`;

const PrintBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const PrintButton = styled.button`
  background: var(--color-active);
  color: var(--color-bg);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.2s ease;
  &:hover { opacity: 0.9; }
`;

const Curriculum = () => {
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
    <CurriculumContainer>
      <PrintBar>
        <PDFDownloadLink document={<CurriculumPDF />} fileName="curriculum-robert.pdf">
          {({ loading }) => (
            <PrintButton aria-label="Descargar Curriculum en PDF">
              <i className="fa-solid fa-file-pdf"></i>
              {loading ? 'Generando PDF...' : 'Descargar PDF'}
            </PrintButton>
          )}
        </PDFDownloadLink>
      </PrintBar>
      <ProfileSection as={motion.div} initial="hidden" animate="visible" variants={containerVariants}>
        <ProfileImage 
          src={profile.avatar} 
          alt="Robert Romero" 
          as={motion.img}
          variants={itemVariants}
        />
        <ProfileInfo>
          <Name as={motion.h1} variants={itemVariants}>{profile.name}</Name>
          <Title as={motion.h2} variants={itemVariants}>{profile.title}</Title>
          <Bio as={motion.p} variants={itemVariants}>{profile.bio}</Bio>
        </ProfileInfo>
      </ProfileSection>
      
      <Section initial="hidden" animate="visible" variants={containerVariants}>
        <SectionTitle as={motion.h2} variants={itemVariants}>Experiencia Laboral</SectionTitle>
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} variants={itemVariants}>
            <Period>{exp.period}</Period>
            <Company>{exp.company}</Company>
            <JobDescription>{exp.description}</JobDescription>
          </ExperienceItem>
        ))}
      </Section>
      
      <Section initial="hidden" animate="visible" variants={containerVariants}>
        <SectionTitle as={motion.h2} variants={itemVariants}>Educación</SectionTitle>
        {eduData.map((edu, idx) => (
          <ExperienceItem key={idx} variants={itemVariants}>
            <Period>{edu.period}</Period>
            <Company>{edu.institution}</Company>
            <JobDescription>{edu.title}</JobDescription>
          </ExperienceItem>
        ))}
      </Section>
      
      <FlexContainer>
        <Section initial="hidden" animate="visible" variants={containerVariants}>
          <SectionTitle as={motion.h2} variants={itemVariants}>Conocimientos</SectionTitle>
          <SkillsContainer>
            {skillsKnowledge.map((skill, index) => (
              <Skill 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </Skill>
            ))}
          </SkillsContainer>
        </Section>
        
        <Section initial="hidden" animate="visible" variants={containerVariants}>
          <SectionTitle as={motion.h2} variants={itemVariants}>Frameworks y Librerías</SectionTitle>
          <SkillsContainer>
            {skillsFrameworks.map((skill, index) => (
              <Skill 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </Skill>
            ))}
          </SkillsContainer>
        </Section>
      </FlexContainer>
      
      <Section initial="hidden" animate="visible" variants={containerVariants}>
        <SectionTitle as={motion.h2} variants={itemVariants}>Idiomas</SectionTitle>
        {languages.map((lang, idx) => (
          <LanguageItem as={motion.div} key={idx} variants={itemVariants}>
            <LanguageName>
              <span>{lang.name}</span>
              <span>{lang.level}%</span>
            </LanguageName>
            <ProgressBar>
              <Progress value={lang.level} />
            </ProgressBar>
          </LanguageItem>
        ))}
      </Section>
      
      <SpecialGrid as={motion.div} initial="hidden" animate="visible" variants={containerVariants}>
        <Section initial="hidden" animate="visible" variants={containerVariants}>
          <SectionTitle as={motion.h2} variants={itemVariants}>Intereses</SectionTitle>
          <InterestsFlex>
            {interests.map((int, idx) => (
              <InterestItem key={idx} variants={itemVariants}>
                <InterestIcon src={int.icon} />
                <span>{int.name}</span>
              </InterestItem>
            ))}
          </InterestsFlex>
        </Section>
        
        <Section initial="hidden" animate="visible" variants={containerVariants}>
          <SectionTitle as={motion.h2} variants={itemVariants}>Referencias</SectionTitle>
          
          <FlexContainer>
            <div as={motion.div} variants={itemVariants}>
              <h4>Laborales</h4>
              {references.laborales.map((ref, idx) => (
                <ContactItem key={idx}>
                  <span>{ref.name}:</span>
                  <ContactLink href={`tel:${ref.phone.replace(/\s/g,'')}`}>{ref.phone}</ContactLink>
                </ContactItem>
              ))}
            </div>
            
            <div as={motion.div} variants={itemVariants} style={{ marginTop: '1rem' }}>
              <h4>Personales</h4>
              {references.personales.map((ref, idx) => (
                <ContactItem key={idx}>
                  <span>{ref.name}:</span>
                  <ContactLink href={`tel:${ref.phone.replace(/\s/g,'')}`}>{ref.phone}</ContactLink>
                </ContactItem>
              ))}
            </div>
          </FlexContainer>
        </Section>
      </SpecialGrid>
      
      <Section initial="hidden" animate="visible" variants={containerVariants}>
        <SectionTitle as={motion.h2} variants={itemVariants}>Contacto</SectionTitle>
        
        <FlexContainer>
          <ContactItem as={motion.div} variants={itemVariants}>
            <i className="fa fa-phone" style={{ color: 'var(--color-active)' }}></i>
            <ContactLink href="tel:+595976988254">+595 976 988 254</ContactLink>
          </ContactItem>
          
          <ContactItem as={motion.div} variants={itemVariants}>
            <i className="fa fa-envelope" style={{ color: 'var(--color-active)' }}></i>
            <ContactLink href="mailto:rjrch3@gmail.com">rjrch3@gmail.com</ContactLink>
          </ContactItem>
          
          <ContactItem as={motion.div} variants={itemVariants}>
            <i className="fa-brands fa-github" style={{ color: 'var(--color-active)' }}></i>
            <ContactLink href="https://github.com/RobertR03" target="_blank">RobertR03</ContactLink>
          </ContactItem>
          
          <ContactItem as={motion.div} variants={itemVariants}>
            <i className="fa fa-globe" style={{ color: 'var(--color-active)' }}></i>
            <ContactLink href="https://robertromero.netlify.app" target="_blank">robertromero.netlify.app</ContactLink>
          </ContactItem>
        </FlexContainer>
      </Section>
    </CurriculumContainer>
  );
};

export default Curriculum;