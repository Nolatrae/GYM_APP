import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma'

// @desc    Create a new exercise
// @route   POST /api/exercises
// @access  Private
export const createNewExercise = asyncHandler(async (req, res) => {
	const { name, times, iconPath } = req.body

	const exercise = await prisma.exercise.create({
		data: {
			name,
			times,
			iconPath
		}
	})

	res.json(exercise)
})

//	@desc 	Get exercises
//	@route 	Get /api/exercises
//	@access Private
export const getExercises = asyncHandler(async (req, res) => {
	const exercises = await prisma.exercise.findMany()

	res.json(exercises)
})
