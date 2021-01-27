import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/About.module.scss'
import InnerViewHolder from '../components/InnerViewHolder'

const About = () => {
    const title = "About me"

    return (
        <Layout title={title}>
            <InnerViewHolder>
                <section id={"about"} className={styles.about}>
                    <div className={"container"}>
                        <div className="sectionTitle">
                            <h2 data-aos="fade-right">About</h2>
                            <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid earum facere illo
                                itaque nemo nulla odit quod reprehenderit sint tempora. Accusantium consequatur corporis
                                eveniet iusto minima nemo quisquam rem saepe.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-up">
                                <img src='/assets/img/profile-img.jpg' className="img-fluid" alt="Profile"/>
                            </div>

                            <div className={`col-lg-8 pt-4 pt-lg-0 ${styles.content}`} data-aos="fade-left">
                                <h3>Software Engineer &amp; Entreprenur</h3>
                                <p className="font-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorum fugiat
                                    natus possimus quo? A animi aut deleniti deserunt doloremque dolores ducimus earum,
                                    esse laboriosam minus quo veniam vero voluptatum?
                                </p>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="icofont-rounded-right"/> <strong>Birthday:</strong> 1
                                                May 1995
                                            </li>
                                            <li><i className="icofont-rounded-right"/>
                                                <strong>Website:</strong> www.example.com
                                            </li>
                                            <li><i className="icofont-rounded-right"/> <strong>Phone:</strong> +123
                                                456 7890
                                            </li>
                                            <li><i className="icofont-rounded-right"/> <strong>City:</strong> City :
                                                New York, USA
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="icofont-rounded-right"/> <strong>Age:</strong> 30</li>
                                            <li><i className="icofont-rounded-right"/>
                                                <strong>Degree:</strong> Master
                                            </li>
                                            <li><i className="icofont-rounded-right"/>
                                                <strong>PhEmailone:</strong> email@example.com
                                            </li>
                                            <li><i className="icofont-rounded-right"/>
                                                <strong>Freelance:</strong> Available
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum
                                    cupiditate est explicabo fuga illo libero modi saepe vero! Aliquam dolor ex in
                                    necessitatibus odit quasi quisquam sed tempore.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </InnerViewHolder>
        </Layout>
    )
}

export default About