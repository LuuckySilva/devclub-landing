import type { IconType } from 'react-icons';
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs,
  SiPostgresql, SiPython, SiMongodb, SiNestjs, SiOpenaigym,
} from 'react-icons/si';
import { FiDatabase, FiCpu, FiZap, FiMessageSquare, FiBriefcase } from 'react-icons/fi';

// Mapa tag → ícone. Tags sem logo oficial usam ícone conceitual.
// Fallback: tag sem entrada renderiza só o texto.
export const STACK_ICONS: Record<string, IconType> = {
  'HTML/CSS': SiHtml5,
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  React: SiReact,
  'Node.js': SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Python: SiPython,
  MongoDB: SiMongodb,
  NestJS: SiNestjs,
  SQL: FiDatabase,
  Dashboards: FiCpu,
  LLMs: SiOpenaigym,
  'Automação': FiZap,
  'Automações': FiZap,
  'Prompt Engineering': FiMessageSquare,
  'Engenharia de Prompt': FiMessageSquare,
  'IA para Negócios': FiBriefcase,
};