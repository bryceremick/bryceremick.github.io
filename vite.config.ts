import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite'


export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			iconCustomizer(collection, icon, props) {
				if (collection === 'mdi') {
					props.width = '24px'
					props.height = '24px'
				} else if (collection === 'fa6-brands') {
					props.width = '32px'
					props.height = '32px'
				}
			}
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@use './src/styles/_mixins.scss' as *;
			`
			}
		}
	}
});
