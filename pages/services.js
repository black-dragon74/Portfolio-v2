import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
import InnerViewHolder from '../components/InnerViewHolder'
import styles from '../styles/Services.module.scss'

const Services = () => {
    const title = 'Services'

    const TestimonialsCarousel = dynamic(
        () => import('../components/TestimonialsCarousel'),
        {ssr: false}
    )

    const services = [
        {
            icon: 'icofont-computer',
            title: 'Lorem Ipsum',
            link: '#',
            desc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
        },
        {
            icon: 'icofont-chart-bar-graph',
            title: 'Ipsum Lorem',
            link: '#',
            desc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
        },
        {
            icon: 'icofont-earth',
            title: 'Something else',
            link: '#',
            desc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
        },
        {
            icon: 'icofont-image',
            title: 'Magni Dolores',
            link: '#',
            desc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
        },
        {
            icon: 'icofont-tasks-alt',
            title: 'Deleniti Ipsum',
            link: '#',
            desc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
        },
        {
            icon: 'icofont-settings',
            title: 'Settingso Ipsum',
            link: '#',
            desc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
        },
    ]

    const testimonials = [
        {
            msg: 'Placeholder text, will be replaced',
            img: 'assets/img/testimonials/testimonials-2.jpg',
            name: 'Name 1',
            designation: 'Designation'
        },
        {
            msg: 'Placeholder text, will be replaced',
            img: 'assets/img/testimonials/testimonials-3.jpg',
            name: 'Name 2',
            designation: 'Designation'
        },
        {
            msg: 'Placeholder text, will be replaced',
            img: 'assets/img/testimonials/testimonials-4.jpg',
            name: 'Name 3',
            designation: 'Designation'
        },
        {
            msg: 'Placeholder text, will be replaced',
            img: 'assets/img/testimonials/testimonials-1.jpg',
            name: 'Name 4',
            designation: 'Designation'
        },
    ]

    return (
        <Layout title={title}>
            <InnerViewHolder>
                <section id="services" className={styles.services}>
                    <div className="container">
                        <div className="sectionTitle">
                            <h2>Services</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae culpa eligendi fugit illo, ipsa iusto nobis odio optio, pariatur quam quisquam saepe sed veniam
                                voluptates. Cum ducimus nulla quidem.</p>
                        </div>

                        <div className="row">
                            {services.map((service) => {
                                return (
                                    <div className={`col-lg-4 col-md-6 ${styles.iconBox}`} data-aos="fade-up" key={service.title} data-aos-delay={services.indexOf(service) * 100}>
                                        <div className={styles.icon}><i className={service.icon}/></div>
                                        <h4 className={styles.title}><a href={service.link}>{service.title}</a></h4>
                                        <p className={styles.description}>{service.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <section className="testimonials sectionBg" id="testimonials">
                    <div className="container">
                        <div className="sectionTitle">
                            <h2>Testimonials</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aperiam architecto consequuntur distinctio dolor error eveniet ex hic in ipsum natus nostrum numquam
                                officia qui saepe veniam, veritatis, voluptas voluptatum.</p>
                        </div>

                        <TestimonialsCarousel testimonials={testimonials}/>
                    </div>
                </section>
            </InnerViewHolder>
        </Layout>
    )
}

export default Services