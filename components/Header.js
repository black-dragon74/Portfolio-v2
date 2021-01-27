import Head from 'next/head'

const Header = ({title}) => {
    return (
        <Head>
            {/*title*/}
            <title>{title}</title>

            {/*Meta Tags*/}
            <meta charSet="utf-8"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <meta content="" name="description"/>
            <meta content="" name="keywords"/>

            {/* Fonts */}
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"/>
        </Head>
    )
}

Header.defaultProps = {
    title: "No Title"
}

export default Header