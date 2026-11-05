export type HeaderThemeKey =
  | 'start-here'
  | 'not-traditional'
  | 'how-to-play'
  | 'rules'
  | 'strategies'
  | 'global-compendium'
  | 'faq'
  | 'about'
  | 'contact'
  | 'privacy';

export interface HeaderNavItem {
  id: number;
  surfaceId: number;
  name: string;
  to: string;
  hex: string;
  themeKey: HeaderThemeKey;
}

export const HEADER_NAV_ITEMS: readonly HeaderNavItem[] = [
  { id: 1, surfaceId: 1, name: 'Start Here', to: '/start-here', hex: '#ffb703', themeKey: 'start-here' },
  { id: 2, surfaceId: 6, name: 'Not Traditional Ludo', to: '/not-traditional-ludo', hex: '#ff5e00', themeKey: 'not-traditional' },
  { id: 3, surfaceId: 3, name: 'How to Play', to: '/how-to-play', hex: '#00f0ff', themeKey: 'how-to-play' },
  { id: 4, surfaceId: 4, name: '12 Rules', to: '/rules', hex: '#ff1e42', themeKey: 'rules' },
  { id: 5, surfaceId: 2, name: 'Strategies', to: '/strategies', hex: '#00ff66', themeKey: 'strategies' },
  { id: 6, surfaceId: 5, name: 'Global Compendium', to: '/global-compendium', hex: '#00a6ff', themeKey: 'global-compendium' },
  { id: 7, surfaceId: 9, name: 'FAQ', to: '/faq', hex: '#ffe600', themeKey: 'faq' },
  { id: 8, surfaceId: 10, name: 'About', to: '/about', hex: '#c026ff', themeKey: 'about' },
  { id: 9, surfaceId: 11, name: 'Contact', to: '/contact', hex: '#00f5d4', themeKey: 'contact' },
  { id: 10, surfaceId: 12, name: 'Privacy', to: '/privacy', hex: '#ff2a85', themeKey: 'privacy' },
];
