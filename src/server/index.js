import express from 'epress'
import morgan from 'morgan'
import { json, urlencoded } from 'body-parser'

// Constants
const PORT = process.env.PORT || 1337
const HOST = process.env.HOST || '0.0.0.0'

const app = express()

// Register Middlewares
app.use(morgan('dev'))
app.use(json())
app.use(urlencoded({ extended: true }))

// Controllers e.g.:
// app.use('/foo', FooController)

// Setup server
app.listen(PORT, HOST, () =>
  console.log('Server started on ${HOST}:${PORT}...')
)