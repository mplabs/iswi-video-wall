import { Router } from 'express'
import TwitterController from './TwitterController'
import WeatherController from './WeatherController'

const router = Router()

router.use('/weather', WeatherController)
router.use('/twitter', TwitterController)

export default router