import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import AuthService from '../../../services/auth.service'
import Layout from '../../layout/Layout'
import Loader from '../../ui/Loader'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import styles from './Auth.module.scss'

const Auth = () => {
	const [type, setType] = useState('login')
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isLoading } = useMutation([
		'auth',
		({ email, password }) => AuthService.main(email, password, type),
		{
			onSuccess: data => {
				alert('success')
				reset()
			}
		}
	])

	const onSubmit = data => {
		mutate(data)
	}

	return (
		<>
			<Layout heading="Sign in" bgImage="/images/auth-bg.png" />
			<div className="wrapper-inner-page">
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name="email"
						register={register}
						options={{
							required: 'Email is required'
						}}
						type="text"
						placeholder="Enter email"
					/>
					<Field
						error={errors?.password?.message}
						name="password"
						register={register}
						options={{
							required: 'Password is required'
						}}
						type="text"
						placeholder="Enter password"
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign In</Button>
						<Button clickHandler={() => setType('register')}>Sign In</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
