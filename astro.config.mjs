// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'LicenseChain',
			logo: {
				src: './src/assets/logo.png',
				replacesTitle: true,
      },
			social: {
				github: 'https://github.com/LicenseChain',
			},
			sidebar: [
				{
					label: 'Basics',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'basics/example' },
					],
				},
				{
					label: 'Client APIs',
					autogenerate: { directory: 'client-apis' },
				},
				{
					label: 'Examples',
					autogenerate: { directory: 'examples' },
				},
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Licensing Models',
					autogenerate: { directory: 'licensing-models' },
				},
				{
					label: 'Messaging API',
					autogenerate: { directory: 'messaging-api' },
				},
				{
					label: 'Payments',
					autogenerate: { directory: 'payments' },
				},
				{
					label: 'Price Optimization',
					autogenerate: { directory: 'price-optimization' },
				},
				{
					label: 'Reseller Dashboard',
					autogenerate: { directory: 'reseller-dashboard' },
				},
				{
					label: 'Security',
					autogenerate: { directory: 'security' },
				},
				{
					label: 'Web App',
					autogenerate: { directory: 'web-app' },
				},
			],
		}),
	],
});
