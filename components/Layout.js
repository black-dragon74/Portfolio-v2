import Header from './Header'
import NavBar from './NavBar'
import PropTypes from 'prop-types'
import ScrollToTop from './ScrollToTop'

const Layout = ({title, children}) => {
    return (
        <>
            <Header title={title}/>
            <NavBar/>

            {/* There goes all the children */}
            {children}

            {/* Shown and hidden automatically on scroll events */}
            <ScrollToTop/>
        </>
    )
}

Layout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}

export default Layout