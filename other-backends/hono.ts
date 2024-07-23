import { Hono } from "hono";

const app = new Hono()

app.get('/', (c) => {
  return c.text('This is Hono!')
})

app.get('/:param', (c) => {
  return c.text(`This is Hono with param: ${c.req.param('param')}`)
})

export default defineEventHandler((event) => {
  event.node.req.originalUrl = '' // /api/hono/
  const webReq = toWebRequest(event)
  return app.fetch(webReq)
})