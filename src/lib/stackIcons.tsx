import type { IconType } from 'react-icons';
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs,
  SiPostgresql, SiPython, SiMongodb, SiNestjs,
  SiIfood, SiMercadopago, SiPagseguro, SiHostinger,
} from 'react-icons/si';
import {
  FiDatabase, FiCpu, FiZap, FiMessageSquare, FiBriefcase, FiBarChart2,
} from 'react-icons/fi';

// Mapa tag → ícone. Fallback: tag sem entrada renderiza só o texto.
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
  Dashboards: FiBarChart2,
  LLMs: FiCpu,
  'Automação': FiZap,
  'Automações': FiZap,
  'Prompt Engineering': FiMessageSquare,
  'Engenharia de Prompt': FiMessageSquare,
  'IA para Negócios': FiBriefcase,
};

// Empresas do marquee: cor de marca (aproximada, ajustada p/ fundo escuro)
// e ícone quando existe nesta versão do react-icons.
interface CompanyMeta {
  icon?: IconType;
  color: string;
}

export const COMPANY_META: Record<string, CompanyMeta> = {
  Santander: { color: '#EC4A4A' },
  'BTG Pactual': { color: '#6EA8FF' },
  'Toro Investimentos': { color: '#FF8A3D' },
  iFood: { icon: SiIfood, color: '#EA4B57' },
  Stone: { color: '#00C97E' },
  PagSeguro: { icon: SiPagseguro, color: '#9BD54A' },
  Hostinger: { icon: SiHostinger, color: '#8C6CFF' },
  'Mercado Livre': { icon: SiMercadopago, color: '#FFE600' },
};