// Bootstrap and other plugins first
import 'bootstrap/dist/css/bootstrap.min.css'
import '@icon/icofont/icofont.css'
import 'boxicons/css/boxicons.min.css'

// Custom global defs and overrides
import '../styles/globals.scss'

// Lock and load
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
