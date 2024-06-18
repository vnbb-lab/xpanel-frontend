import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import type { Composer } from 'vue-i18n'
import en from './en.json'
import vi from './vi.json'
import { useThemeStore } from '@/store'

let i18n: ReturnType<typeof createI18n>

export function setupI18n(app: App) {
  const themeStore = useThemeStore()
  i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: themeStore.language,
    fallbackLocale: 'vi',
    messages: {
      en: en,
      vi: vi
    }
  })
  app.use(i18n)
}

export const trans = (key: string, attributes = {}) => {
  return (i18n.global.t as Composer['t'])(key, attributes)
}
