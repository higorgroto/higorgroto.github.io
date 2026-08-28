import type { Lang } from './ui';
import { defaultLang } from './ui';

export function getLang(url: URL): Lang {
  const params = new URLSearchParams(url.search);
  const langParam = params.get('lang');
  if (langParam === 'en' || langParam === 'pt') {
    return langParam;
  }
  return defaultLang;
}

export function getLangFromPath(pathname: string): Lang {
  // For static builds, we can detect from URL or fallback
  return defaultLang;
}

export function switchLangUrl(currentUrl: URL, targetLang: Lang): string {
  const url = new URL(currentUrl);
  if (targetLang === defaultLang) {
    url.searchParams.delete('lang');
  } else {
    url.searchParams.set('lang', targetLang);
  }
  return url.pathname + url.search;
}
