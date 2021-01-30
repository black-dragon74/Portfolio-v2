///
/// This file must be included dynamically with SSR disabled, else it will throw exceptions
/// As owl-carousel has jQuery dependency and jQuery doesn't work on the server side
///

import {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/TestimonialsCarousel.module.scss'

import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const TestimonialsCarousel = ({testimonials}) => {
    if (!testimonials)
        throw new Error("No Testimonials supplied to props")

    const owlRef = useRef(null)

    useEffect(() => {
        $(owlRef.current).owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                900: {
                    items: 3
                }
            }
        })

        // Destroy carousel while cleaning up
        return () => {
            $(owlRef.current).trigger('destroy.owl.carousel')
        }

    }, [])  // This is ran once to improve performance

    return (
        <div className={`${styles.testimonials} testimonials`}>
            <div className={"owl-carousel testimonials-carousel"} ref={owlRef}>
                {testimonials.map((tm) => {
                    return (
                        <div key={tm.img}>
                            <div className={styles.testimonialItem} data-aos="fade-up" data-aos-delay={testimonials.indexOf(tm) * 100}>
                                <p>
                                    <i className={`bx bxs-quote-alt-left ${styles.quoteIconLeft}`}/>
                                    {tm.msg}
                                    <i className={`bx bxs-quote-alt-right ${styles.quoteIconRight}`}/>
                                </p>
                                <img src={tm.img} className={styles.testimonialImg} alt="Profile Picture"/>
                                <h3>{tm.name}</h3>
                                <h4>{tm.designation}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

TestimonialsCarousel.propTypes = {
    testimonials: PropTypes.arrayOf(PropTypes.shape({
        msg: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        designation: PropTypes.string.isRequired
    })).isRequired
}

export default TestimonialsCarousel