import express from 'express'
import morgan from 'morgan'
import { json, urlencoded } from 'body-parser'
import { join } from 'path'

import ApiController from './controller/ApiController'

// Constants
const {
  PORT = 1337,
  HOST = '0.0.0.0',
  ENV = 'production'
} = process.env

const app = express()

// Register Middlewares
app.use(morgan('dev'))
app.use(json())
app.use(urlencoded({ extended: true }))

// Controllers e.g.:
// app.use('/foo', FooController)
app.use('/api', ApiController)

app.use(express.static(join(__dirname, '..', 'client')))
app.use('*', (req, res) => res.sendFile(join(__dirname, '..', 'client', 'index.html')))

// Setup server
app.listen(PORT, HOST, () =>
  console.log(`Server started in '${ENV}' mode on ${HOST}:${PORT}...`)
)