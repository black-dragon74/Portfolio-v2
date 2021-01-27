import styles from '../styles/NavBar.module.scss'

const NavBar = () => {
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
                            <li className="active"><a href="#"><i className="bx bx-home"/> <span>Home</span></a>
                            </li>
                            <li><a href="#"><i className="bx bx-user"/> <span>About</span></a></li>
                            <li><a href="#"><i className="bx bx-file-blank"/> <span>Resume</span></a></li>
                            <li><a href="#"><i className="bx bx-book-content"/> Portfolio</a></li>
                            <li><a href="#"><i className="bx bx-server"/> Services</a></li>
                            <li><a href="#"><i className="bx bx-envelope"/> Contact</a></li>
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