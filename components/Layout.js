import Header from './Header'
import NavBar from './NavBar'
import PropTypes from 'prop-types'
import ScrollToTop from './ScrollToTop'
import {useEffect} from "react";

const Layout = ({title, children}) => {

    // This is the right place for this as we wanna add listener
    // Only when the layout is rendered (it won't be rendered on 404)
    // In such cases, having it in `_app.js` will throw exception
    useEffect(() => {
        if (typeof window === "undefined")
            return

        document.getElementById('scrollToTop').hidden = true
        window.addEventListener('scroll', scrollListener)

        return () => {
            removeEventListener('scroll', scrollListener)
        }
    })

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

function scrollListener(event) {
    let sTop = document.documentElement.scrollTop
    const el = document.getElementById('scrollToTop')

    el.hidden = sTop <= 100;
}

Layout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}

export default Layout