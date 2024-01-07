import Search from './search/seacrh'
import Sellers from './sellers/sellers'
import styles from './sidebar.module.scss'

export default function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<Search />
			<Sellers />
		</div>
	)
}
