import cn from 'clsx'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data.js'

const Menu = ({ isShow }) => {
	const logoutHandler = () => {}
	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						{item.title}
						{/* <Link to={item.link}>{item.title}</Link> */}
					</li>
				))}
				<li>
					<button onClick={handleLogout}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
