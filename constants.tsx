import { Unit } from './types';
import { curriculumData } from './curriculumData';

/**
 * Normaliza los datos del currículum.
 * Si el usuario proporciona una lista plana de bloques (como en el estado actual),
 * los envuelve en una Unidad 1 virtual para mantener la compatibilidad con la UI.
 */
const normalizeCurriculum = (data: any): Unit[] => {
  if (!data || !Array.isArray(data) || data.length === 0) return [];
  
  // Detectamos si el primer elemento parece un Bloque (tiene secciones) 
  // en lugar de una Unidad (debería tener un array de blocks).
  const isFlatBlockList = data[0] && 'sections' in data[0] && !('blocks' in data[0]);
  
  if (isFlatBlockList) {
    return [{
      id: 1,
      title: "Unidad 1: Procesos Productivos",
      blocks: data
    }];
  }
  
  return data as Unit[];
};

export const CURRICULUM: Unit[] = normalizeCurriculum(curriculumData);
