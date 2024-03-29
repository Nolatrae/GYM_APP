import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from './Home.module.scss'

function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	return (
		<Layout bgImage="/images/home-bg.jpg">
			<Button
				clickHandler={() => {
					navigate(isAuth ? '/new-workout' : '/auth')
				}}
			>
				{isAuth ? 'new' : 'Sign In'}
			</Button>
			<h1 className={styles.heading}>LIGHT WEIGHT, BABY</h1>
		</Layout>
	)
}

export default Home
