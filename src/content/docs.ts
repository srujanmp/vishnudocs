export interface Question {
  id: string;
  globalIndex: number;
  sectionIndex: number;
  text: string;
  title?: string;
  details?: string[];
  code?: string;
}

export interface Section {
  id: string;
  title: string;
  icon: string;
  color: string;
  gradient: string;
  questions: Question[];
}

export interface Category {
  id: string;
  title: string;
  sections: Section[];
}

import { networkingSections } from "./networking";
import { dbmsSections } from "./dbms";
import { osSections } from "./os";
import { oopSections } from "./oop";

export const categories: Category[] = [
  {
    id: "networking",
    title: "Networking",
    sections: networkingSections,
  },
  {
    id: "dbms",
    title: "DBMS & SQL",
    sections: dbmsSections,
  },
  {
    id: "os",
    title: "Operating Systems",
    sections: osSections,
  },
  {
    id: "oop",
    title: "Object Oriented Programming",
    sections: oopSections,
  },
];

// Flattened sections for easy lookup
export const allSections = categories.flatMap(c => c.sections);

