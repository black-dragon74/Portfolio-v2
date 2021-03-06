//
//  Inner view holder offsets content by 300px on desktop devices
//  Meant to be used in all views except the `Hero`
//
import styles from '../styles/InnerViewHolder.module.scss'
import PropTypes from 'prop-types'

const InnerViewHolder = ({children}) => {
    return (
        <main id="main" className={styles.main}>
            {children}
        </main>
    )
}

InnerViewHolder.propTypes = {
    children: PropTypes.any
}

export default InnerViewHolder