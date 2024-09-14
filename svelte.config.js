import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === 'development';

const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/Svelte-Elegant-Docs'  // Укажите здесь базовый путь
		  }
	},
};

export default config;
