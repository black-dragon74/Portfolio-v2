import React, {useEffect} from 'react'
import AOS from 'aos'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css'
import '../styles/globals.scss'
import 'aos/dist/aos.css'

// Lock and load
function MyApp({Component, pageProps}) {
    useEffect(() => {
        document.getElementById('scrollToTop').hidden = true
        // Sad but AOS doesn't return an object on init, so can't destroy
        AOS.init({
            duration: 1000,
            easing: "ease-in-out-back",
            once: true
        });

        window.addEventListener('scroll', scrollListener)

        return () => {
            removeEventListener('scroll', scrollListener)
        }
    })

    return <Component {...pageProps} />
}

function scrollListener(event) {
    let sTop = document.documentElement.scrollTop
    const el = document.getElementById('scrollToTop')

    el.hidden = sTop <= 100;
}

export default MyApp
