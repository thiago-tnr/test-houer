import express, { type Express } from 'express'

export const app: Express = express()
app.use(express.json())
