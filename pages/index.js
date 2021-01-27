import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

const Home = () => {
    return (
        <Layout>
            {/* This is the main page, wrapped in layout, which contains all the necessary overlays */}
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                    <h1>Alex Smith</h1>
                    <p>I'm <span className="typed"
                                 data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
                </div>
            </section>
        </Layout>
    )
}

export default Home