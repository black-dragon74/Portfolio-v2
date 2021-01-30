import {useEffect, useState, useRef} from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Portfolio.module.scss'    // Yes, this is intended
const IsoTope = process.browser ? require('isotope-layout') : undefined // Hack to prevent exceptions when running on server side
import imagesLoaded from 'imagesloaded'

const IsotopeReact = ({items}) => {
    const [filterKey, setFilterKey] = useState('*')
    const [isotope, setIsotope] = useState(null)
    const gridRef = useRef(null)

    // Get unique slugs from the list of items
    const filters = Array.from(new Set(items.map(({slug}) => slug)))

    useEffect(() => {
        imagesLoaded(gridRef.current, () =>
            setIsotope(
                new IsoTope('.portfolio-container', {
                    itemSelector: '.iso-holder',
                    layoutMode: 'fitRows'
                })
            )
        )
    }, [])   // Run this only once pls

    useEffect(() => {
        if (!isotope)
            return

        filterKey === "*" ?
            isotope.arrange({filter: `*`}) :
            isotope.arrange({filter: `.${filterKey}`})

    }, [filterKey])    // Whenever filterkey changes, it will require a re-render

    return (
        <>
            <div className="row" data-aos={"fade-up"}>
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolioFilters" className={styles.portfolioFilters}>
                        <li className={filterKey === '*' ? styles.filterActive : ''} onClick={() => setFilterKey('*')}>All</li>
                        {filters.map((filter) => {
                            return (
                                <li
                                    key={filters.indexOf(filter)}
                                    className={filterKey === filter ? styles.filterActive : ''}
                                    onClick={() => setFilterKey(filter)}
                                >
                                    {filter}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100" ref={gridRef}>
                {items.map((item) => {
                    return (
                        <div className={`col-lg-4 col-md-6 iso-holder ${styles.portfolioItem} ${item.slug}`} key={item.imgSrc}>
                            <div className={styles.portfolioWrap}>
                                <img src={item.imgSrc} className="img-fluid" alt=""/>
                                <div className={styles.portfolioLinks}>
                                    <a href={item.more} title="More Details">
                                        <i className="bx bx-right-arrow-circle"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

IsotopeReact.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        slug: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        more: PropTypes.string.isRequired,
    })).isRequired
}

export default IsotopeReact