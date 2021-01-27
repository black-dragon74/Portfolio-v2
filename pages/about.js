import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/About.module.scss'
import InnerViewHolder from '../components/InnerViewHolder'

const About = () => {
    const title = "About me"

    const bioData = [
        {
            title: 'Birthday',
            value: '07 September 1998'
        },
        {
            title: 'Website',
            value: 'nicksuniversum.com'
        },
        {
            title: 'Phone',
            value: '+91-830271-6971'
        },
        {
            title: 'City',
            value: 'Jaipur'
        },
        {
            title: 'Age',
            value: '22'
        },
        {
            title: 'Degree',
            value: 'Bachelors'
        },
        {
            title: 'E-mail',
            value: 'nickk.2974(at)gmail.com'
        },
        {
            title: 'Freelance',
            value: 'Available'
        },
    ]

    const experiences = [
        {
            stack: 'C',
            exp: 100,
        },
        {
            stack: 'C++',
            exp: 100,
        },
        {
            stack: 'Swift',
            exp: 100,
        },
        {
            stack: 'Golang',
            exp: 100,
        },
        {
            stack: 'Kotlin',
            exp: 100,
        },
        {
            stack: 'Python',
            exp: 100,
        },
    ]

    return (
        <Layout title={title}>
            <InnerViewHolder>
                <section id={"about"} className={styles.about}>
                    <div className={"container"}>
                        <div className="sectionTitle">
                            <h2 data-aos="fade-right">About</h2>
                            <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                                earum facere illo
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
                                            {bioData.slice(0, 4).map((bio) => {
                                                return (
                                                    <li key={bio.value}>
                                                        <i className="icofont-rounded-right"/>
                                                        <strong>{`${bio.title}: `}</strong> {bio.value}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>

                                    <div className="col-lg-6">
                                        <ul>
                                            {bioData.slice(4, 8).map((bio) => {
                                                return (
                                                    <li key={bio.value}>
                                                        <i className="icofont-rounded-right"/>
                                                        <strong>{`${bio.title}: `}</strong> {bio.value}
                                                    </li>
                                                )
                                            })}
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

                {/* Begin Facts Section */}
                <section id={styles.facts} className={styles.facts}>
                    <div className={"container"}>
                        <div className="sectionTitle">
                            <h2 data-aos="fade-in">Facts</h2>
                            <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                                earum facere illo
                                itaque nemo nulla odit quod reprehenderit sint tempora. Accusantium consequatur corporis
                                eveniet iusto minima nemo quisquam rem saepe.</p>
                        </div>

                        <div className="row no-gutters">
                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                                <div className={styles.countBox}>
                                    <i className="icofont-simple-smile"/>
                                    <span data-toggle="counter-up">232</span>
                                    <p><strong>Happy Clients</strong> consequuntur quae</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up"
                                 data-aos-delay="100">
                                <div className={styles.countBox}>
                                    <i className="icofont-document-folder"/>
                                    <span data-toggle="counter-up">521</span>
                                    <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up"
                                 data-aos-delay="200">
                                <div className={styles.countBox}>
                                    <i className="icofont-live-support"/>
                                    <span data-toggle="counter-up">1,463</span>
                                    <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up"
                                 data-aos-delay="300">
                                <div className={styles.countBox}>
                                    <i className="icofont-users-alt-5"/>
                                    <span data-toggle="counter-up">15</span>
                                    <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Begin skills section */}
                <section id={styles.skills} className={`sectionBg ${styles.skills}`}>
                    <div className={"container"}>
                        <div className="sectionTitle">
                            <h2 data-aos="fade-in">Skills</h2>
                            <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                                earum facere illo
                                itaque nemo nulla odit quod reprehenderit sint tempora. Accusantium consequatur corporis
                                eveniet iusto minima nemo quisquam rem saepe.</p>
                        </div>

                        <div className="row skills-content">
                            <div className="col-lg-6" data-aos="fade-up">
                                {experiences.slice(0, 3).map((experience) => {
                                    return (
                                        <div className={styles.progress} key={experience.stack}>
                                            <span className={styles.skill}>{experience.stack} <i
                                                className={styles.val}>{experience.exp}%</i></span>
                                            <div className={styles.progressBarWrap}>
                                                <div className={styles.progressBar}
                                                     style={{width: `${experience.exp}%`}}/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                {experiences.slice(3, 6).map((experience) => {
                                    return (
                                        <div className={styles.progress} key={experience.stack}>
                                            <span className={styles.skill}>{experience.stack} <i
                                                className={styles.val}>{experience.exp}%</i></span>
                                            <div className={styles.progressBarWrap}>
                                                <div className={styles.progressBar}
                                                     style={{width: `${experience.exp}%`}}/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </InnerViewHolder>
        </Layout>
    )
}

export default About