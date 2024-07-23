import type { LocalePrefix, Pathnames } from 'next-intl/routing'


export const locales = ['es', 'en', "fr"] as const
export const defaultLocale = 'es' as const

export type Locales = typeof locales[number]

export const pathnames: Pathnames<typeof locales> = {
	'/': '/',
	'/capitulos': {
		es: '/capitulos',
		en: '/chapters',
		fr: '/chapitres',
	},
	'/contacto': {
		es: '/contacto',
		en: '/contact',
		fr: '/contact',
	},
	'/donaciones': {
		es: '/donaciones',
		en: '/donations',
		fr: '/donations',
	},
	'/proposito': {
		es: '/proposito',
		en: '/purpose',
		fr: '/proposition',
	},
	'/propuesta': {
		es: '/propuesta',
		en: '/proposal',
		fr: '/proposition',
	},
	'/quien-es-odalho': {
		es: '/quien-es-odalho',
		en: '/who-is-odalho',
		fr: '/qui-est-odalho',
	},
}

export const localePrefix: LocalePrefix<typeof locales> = 'always'

export const languages = [
	{
		path: 'es',
		name: 'Español',
	},
	{
		path: 'en',
		name: 'English',
	},
	{
		path: 'fr',
		name: 'Français',
	}
]