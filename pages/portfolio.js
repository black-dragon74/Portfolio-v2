import Layout from '../components/Layout'
import styles from '../styles/Portfolio.module.scss'
import InnerViewHolder from '../components/InnerViewHolder'
import IsotopeReact from '../components/IsotopeReact'

const Portfolio = () => {
    const title = 'Portfolio'

    const portfolioItems = [
        {
            imgSrc: 'assets/img/portfolio/portfolio-1.jpg',
            more: '#',
            slug: 'Apps'
        },
        {
            imgSrc: 'assets/img/portfolio/portfolio-2.jpg',
            more: '#',
            slug: 'Apps'
        },
        {
            imgSrc: 'assets/img/portfolio/portfolio-3.jpg',
            more: '#',
            slug: 'Apps'
        },
        {
            imgSrc: 'assets/img/portfolio/portfolio-4.jpg',
            more: '#',
            slug: 'Website'
        },
        {
            imgSrc: 'assets/img/portfolio/portfolio-5.jpg',
            more: '#',
            slug: 'Website'
        },
        {
            imgSrc: 'assets/img/portfolio/portfolio-6.jpg',
            more: '#',
            slug: 'Website'
        },
        {
            imgSrc: 'assets/img/portfolio/portfolio-7.jpg',
            more: '#',
            slug: 'Other'
        },
        {
            imgSrc: 'assets/img/portfolio/portfolio-8.jpg',
            more: '#',
            slug: 'Other'
        },
        {
            imgSrc: 'assets/img/portfolio/portfolio-9.jpg',
            more: '#',
            slug: 'Other'
        }
    ]

    return (
        <Layout title={title}>
            <InnerViewHolder>
                <section id={styles.portfolio} className={`${styles.portfolio} sectionBg`}>
                    <div className="container">
                        <div className="sectionTitle">
                            <h2>Portfolio</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                                impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <IsotopeReact items={portfolioItems}/>
                    </div>
                </section>
            </InnerViewHolder>
        </Layout>
    )
}

export default Portfolio