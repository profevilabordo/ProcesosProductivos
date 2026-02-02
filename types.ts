
export type SectionType = 'imprescindible' | 'importante' | 'profundizar' | 'informatica' | 'trampa' | 'reflexion' | 'texto' | 'tabla' | 'checklist' | 'actividad';

export interface ContentSection {
  type: SectionType;
  title?: string;
  text?: string;
  list?: string[];
  options?: string[];
  tableData?: { headers: string[], rows: string[][] };
}

export interface Block {
  id: string;
  title: string;
  description: string;
  sections: ContentSection[];
}

export interface Unit {
  id: number;
  title: string;
  blocks: Block[];
}

export interface UserProgress {
  completedBlocks: string[];
}
