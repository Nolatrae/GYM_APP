import 'colors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import authRoutes from './app/auth/auth.routes.js'
import { errorHandler, notFound } from './app/middleware/error.middleware.js'
import { prisma } from './app/prisma.js'
import userRoutes from './app/user/user.routes.js'

dotenv.config()
/*
TODO:
1. [] - async error handling
2. [] - app.use notFound error handler
*/

const app = express()

async function main() {
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'))
	}

	app.use(express.json())
	app.use('/api/auth', authRoutes)
	app.use('/api/users', userRoutes)

	app.use(notFound)
	app.use(errorHandler)

	const PORT = process.env.PORT || 5000

	app.listen(
		PORT,
		console.log(
			`Server is running in ${process.env.NODE_ENV} on port ${PORT}`.white
		)
	)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
