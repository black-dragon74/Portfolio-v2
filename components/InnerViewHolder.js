//
//  Inner view holder offsets content by 300px on desktop devices
//  Meant to be used in all views except the `Hero`
//
import styles from '../styles/InnerViewHolder.module.scss'

const InnerViewHolder = ({children}) => {
    return (
        <main id={styles.main}>
            {children}
        </main>
    )
}

export default InnerViewHolder