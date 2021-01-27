import Header from './Header'
import NavBar from './NavBar'

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <NavBar/>

            {/* There goes all the children */}
            {children}
        </>
    )
}

export default Layout