import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { profile, experiences, education, skillsKnowledge, skillsFrameworks, languages, interests, references, contact } from '../data/curriculumData.js';

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 12,
    fontFamily: 'Helvetica',
    color: '#222',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 12,
    color: '#0066cc',
    marginTop: 4,
  },
  section: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 8,
    color: '#0066cc',
  },
  line: {
    height: 2,
    backgroundColor: '#0066cc',
    width: 60,
    marginBottom: 8,
  },
  expItem: {
    marginBottom: 8,
  },
  period: {
    color: '#0066cc',
    fontSize: 10,
  },
  company: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 11,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pill: {
    fontSize: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#0066cc',
    borderRadius: 12,
    marginRight: 6,
    marginBottom: 6,
  },
  contactRow: {
    fontSize: 11,
    marginBottom: 4,
  },
  // New styles for side-by-side layout
  sideBySideContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  sideSection: {
    flex: 1,
    marginRight: 16,
  },
  sideSectionLast: {
    flex: 1,
  },
});

const CurriculumPDF = () => (
  <Document>
    <Page size="LEGAL" style={styles.page}>
      <View style={styles.header}>
        <Image style={styles.avatar} src={typeof window !== 'undefined' ? `${window.location.origin}${profile.avatar}` : profile.avatar} />
        <View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiencia Laboral</Text>
        <View style={styles.line} />
        {experiences.map((exp, idx) => (
          <View key={idx} style={styles.expItem}>
            <Text style={styles.period}>{exp.period}</Text>
            <Text style={styles.company}>{exp.company}</Text>
            <Text style={styles.description}>{exp.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Educación</Text>
        <View style={styles.line} />
        {education.map((edu, idx) => (
          <View key={idx} style={styles.expItem}>
            <Text style={styles.period}>{edu.period}</Text>
            <Text style={styles.company}>{edu.institution}</Text>
            <Text style={styles.description}>{edu.title}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conocimientos</Text>
        <View style={styles.line} />
        <View style={styles.list}>
          {skillsKnowledge.map((s, idx) => (
            <Text key={idx} style={styles.pill}>{s}</Text>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frameworks y Librerías</Text>
        <View style={styles.line} />
        <View style={styles.list}>
          {skillsFrameworks.map((s, idx) => (
            <Text key={idx} style={styles.pill}>{s}</Text>
          ))}
        </View>
      </View>

      {/* Idiomas e Intereses lado a lado */}
      <View style={styles.sideBySideContainer}>
        <View style={styles.sideSection}>
          <Text style={styles.sectionTitle}>Idiomas</Text>
          <View style={styles.line} />
          <View>
            {languages.map((lang, idx) => (
              <Text key={idx} style={styles.contactRow}>{lang.name}: {lang.level}%</Text>
            ))}
          </View>
        </View>

        <View style={styles.sideSectionLast}>
          <Text style={styles.sectionTitle}>Intereses</Text>
          <View style={styles.line} />
          <View style={styles.list}>
            {interests.map((int, idx) => (
              <View key={idx} style={{ marginRight: 8, marginBottom: 6, alignItems: 'center' }}>
                <Text style={{ fontSize: 10 }}>{int.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Referencias y Contacto lado a lado */}
      <View style={styles.sideBySideContainer}>
        <View style={styles.sideSection}>
          <Text style={styles.sectionTitle}>Referencias</Text>
          <View style={styles.line} />
          <Text style={{ fontSize: 12, marginBottom: 4 }}>Laborales</Text>
          {references.laborales.map((ref, idx) => (
            <Text key={idx} style={styles.contactRow}>{ref.name}: {ref.phone}</Text>
          ))}
          <Text style={{ fontSize: 12, marginVertical: 4 }}>Personales</Text>
          {references.personales.map((ref, idx) => (
            <Text key={idx} style={styles.contactRow}>{ref.name}: {ref.phone}</Text>
          ))}
        </View>

        <View style={styles.sideSectionLast}>
          <Text style={styles.sectionTitle}>Contacto</Text>
          <View style={styles.line} />
          <Text style={styles.contactRow}>Email: {contact.email}</Text>
          <Text style={styles.contactRow}>Tel: {contact.phone}</Text>
          <Text style={styles.contactRow}>GitHub: {contact.github}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default CurriculumPDF;