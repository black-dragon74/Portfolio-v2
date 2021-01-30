import styles from '../styles/Footer.module.scss'

const Footer = () => {
    // I always hate updating the year manually on websites, like it literally takes
    // just a min to  write 1-2 lines of code that automates that shit. Be active now,
    // You get to stay lazy laters :P
    const currYear = () => {
        return new Date(Date.now()).getFullYear().toString()
    }

    return (
        <footer id="footer" className={styles.footer}>
            <div className="container">
                <div className={styles.copyright}>
                    &copy; {currYear()} - <strong><span>Nick</span></strong>
                </div>
                <div className={styles.credits}>
                    Design from <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer