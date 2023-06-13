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
				}
			}
		})
	],
});
