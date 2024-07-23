// @ts-expect-error no types installed :(
import express, { Request, Response } from 'express'

const app = express()

app.get('/', (_req: Request, res: Response) => {
  res.send('This is Express!')
})

app.get('/:param', (req: Request, res: Response) => {
  res.send(`This is Express with param ${req.params.param}`)
})

export default fromNodeMiddleware(app)