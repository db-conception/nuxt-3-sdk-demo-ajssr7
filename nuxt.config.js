import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: [['@storyblok/nuxt', { accessToken: '4NELKu5As2dUgbQY3rjlLQtt' }]],
  app: {
    head: {
      script: [{ src: 'https://cdn.tailwindcss.com' }],
    },
  },
});
