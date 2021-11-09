import { windi } from "svelte-windicss-preprocess";
import Icons from 'unplugin-icons/vite'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		windi({})
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [
				Icons({
					compiler: 'svelte',
				}),
			],
		},
	}
};

export default config;
