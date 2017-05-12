import { Router } from 'express'
import WeatherController from './WeatherController'

const router = Router()

router.use('/weather', WeatherController)

export default router