import Header from './Header'
import NavBar from './NavBar'
import PropTypes from 'prop-types'

const Layout = ({title, children}) => {
    return (
        <>
            <Header title={title}/>
            <NavBar/>

            {/* There goes all the children */}
            {children}
        </>
    )
}

Layout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}

export default Layout