import fastify from "fastify"

const app = fastify()

app.get('/', (_req, reply) => {
  reply.send('This is Fastify!')
})

app.get('/:param', (req, reply) => {
  reply.send(`This is Fastify with param ${(req.params as { param: string }).param}`)
})

export default defineEventHandler(async (event) => {
  await app.ready()
  app.server.emit('request', event.node.req, event.node.res)
})