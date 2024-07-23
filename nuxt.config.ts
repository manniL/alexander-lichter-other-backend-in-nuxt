export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        style: 'background-color: #111; color: #f0f0f0'
      }
    }
  },
  future: {
    compatibilityVersion: 4
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-07-19',
  serverHandlers: [
    { 
      route: '/api/express',
      handler: '~~/other-backends/express.ts',
      middleware: true
    },
    { 
      route: '/api/fastify',
      handler: '~~/other-backends/fastify.ts',
      middleware: true
    },
    { 
      route: '/api/hono',
      handler: '~~/other-backends/hono.ts',
      middleware: true
    },
  ]
})