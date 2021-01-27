import styles from '../styles/NavBar.module.scss'
import Link from 'next/link'
import {useRouter} from 'next/router'

const NavBar = () => {
    const navLinks = [
        {
            to: '/',
            name: 'Home',
            icon: 'bx-home',
        },
        {
            to: '/about',
            name: 'About',
            icon: 'bx-user',
        },
        {
            to: '/resume',
            name: 'Resume',
            icon: 'bx-file-blank',
        },
        {
            to: '/portfolio',
            name: 'Portfolio',
            icon: 'bx-book-content',
        },
        {
            to: '/services',
            name: 'Services',
            icon: 'bx-server',
        },
        {
            to: '/contact',
            name: 'Contact',
            icon: 'bx-envelope',
        },
    ]

    const router = useRouter()

    return (
        <>
            <button type="button" className={`${styles.mobileNavToggle} d-xl-none`}>
                <i className={"icofont-navigation-menu"}/>
            </button>

            <header id={styles.header}>
                <div className="d-flex flex-column">
                    <div className={styles.profile}>
                        <img src='/assets/img/profile-img.jpg' className={"rounded-circle img-fluid"} alt="Profile"/>
                        <h1 className="text-light"><a href="#">Nick</a></h1>
                        <div className={`${styles.socialLinks} mt-3 text-center`}>
                            <a href="#" className="twitter"><i className="bx bxl-twitter"/></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"/></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"/></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype"/></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"/></a>
                        </div>
                    </div>

                    <nav className={styles.navMenu}>
                        <ul>
                            {navLinks.map((navLink) => {
                                return (
                                    <li key={navLink.name}
                                        className={router.pathname === navLink.to ? styles.active : ''}>
                                        <Link href={navLink.to}>
                                            <a>
                                                <i className={`bx ${navLink.icon}`}/> <span>{navLink.name}</span>
                                            </a>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    <button type="button" className={`${styles.mobileNavToggle} d-xl-none`}><i
                        className="icofont-navigation-menu"/></button>
                </div>
            </header>
        </>
    )
}

export default NavBar