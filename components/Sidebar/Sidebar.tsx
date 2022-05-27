import Link from 'next/link'
import styles from './sidebar.module.scss'

export default function Sidebar() {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/dashboard">
                <a>About</a>
            </Link>
        </nav>
    )
}