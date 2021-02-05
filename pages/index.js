import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import Typewriter from '../components/Typewriter'
import {readDataFor} from './api/dataStore'

const Home = ({quals, title}) => {
    return (
        <Layout title={title}>
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

export async function getStaticProps(context) {
    const title = 'Home'
    const hData = await readDataFor('home').catch((e) => console.log(e))

    return {
        props: {
            title: title,
            quals: hData.data.quals
        }
    }
}

export default Home