import type { Lang } from './ui';
import { defaultLang } from './ui';

export function getLang(url: URL): Lang {
  return url.pathname === '/en' || url.pathname.startsWith('/en/')
    ? 'en'
    : defaultLang;
}

export function langPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'en' ? `/en${clean}` : clean;
}

export function switchLangPath(pathname: string, targetLang: Lang): string {
  const base = pathname.startsWith('/en/') ? pathname.slice(3)
    : pathname === '/en' ? '/' : pathname;
  return targetLang === 'en' ? `/en${base === '/' ? '/' : base}` : base;
}
