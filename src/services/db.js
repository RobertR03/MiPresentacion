import { connect } from '@planetscale/database';

// Configuración de conexión a PlanetScale
const config = {
  host: import.meta.env.VITE_DATABASE_HOST,
  username: import.meta.env.VITE_DATABASE_USERNAME,
  password: import.meta.env.VITE_DATABASE_PASSWORD
};

// Crear conexión
const conn = connect(config);

// Función para ejecutar consultas
export async function executeQuery(query, params = []) {
  try {
    const results = await conn.execute(query, params);
    return results;
  } catch (error) {
    console.error('Error al ejecutar consulta:', error);
    throw error;
  }
}

// Funciones específicas para diferentes operaciones

// Obtener proyectos
export async function getProjects() {
  return executeQuery('SELECT * FROM projects ORDER BY id DESC');
}

// Obtener experiencia laboral
export async function getWorkExperience() {
  return executeQuery('SELECT * FROM work_experience ORDER BY start_date DESC');
}

// Obtener habilidades
export async function getSkills() {
  return executeQuery('SELECT * FROM skills ORDER BY category, level DESC');
}

// Obtener información de contacto
export async function getContactInfo() {
  return executeQuery('SELECT * FROM contact_info LIMIT 1');
}

export default {
  executeQuery,
  getProjects,
  getWorkExperience,
  getSkills,
  getContactInfo
};