import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside.js'
import styles from './Hamburger.module.scss'
import Menu from './Menu.jsx'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose color="white" /> : <CgMenuRight color="white" />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
