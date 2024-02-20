export const fallbackLng = 'en'
export const languages = [fallbackLng, 'ru']
export const cookieName = 'leng'
export const defaultNS = 'ru';

export function getOptions (lng = fallbackLng, ns = defaultNS) {
    return {
      // debug: true,
      supportedLngs: languages,
      fallbackLng,
      lng,
      fallbackNS: defaultNS,
      defaultNS,
      ns
    }
  }