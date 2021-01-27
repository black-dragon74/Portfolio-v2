import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import Typewriter from '../components/Typewriter'

const Home = () => {
    const quals = [
        "a macOS Kernel Developer",
        "an iOS/Android Mobile Engineer",
        "a Full Stack Web Developer",
        "a Human :D"
    ]

    return (
        <Layout title="Home">
            {/* This is the main page, wrapped in layout, which contains all the necessary overlays */}
            <section id={styles.hero} className="d-flex flex-column justify-content-center align-items-center">
                <div className={styles.heroContainer} data-aos="fade-in">
                    <h1>Niraj Yadav</h1>
                    <p>I'm <Typewriter sentences={quals}/></p>
                </div>
            </section>
        </Layout>
    )
}

export default Home