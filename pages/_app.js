// React
import React, {useEffect} from 'react'

// Bootstrap and other plugins first
import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css'

// Custom global defs and overrides
import '../styles/globals.scss'

// Custom JS Plugins
import AOS from 'aos'
import 'aos/dist/aos.css'

// Lock and load
function MyApp({Component, pageProps}) {
    useEffect(() => {
        // Sad but AOS doesn't return an object on init, so can't destroy
        AOS.init({
            duration: 1000,
            easing: "ease-in-out-back",
            once: true
        });
    })

    return <Component {...pageProps} />
}

export default MyApp
