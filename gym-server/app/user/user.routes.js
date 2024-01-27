import express from 'express'
import { getUserProfile } from './user.controller.js'

const router = express.Router()

router.route('/profile').get(protect, getUserProfile)

export default router
