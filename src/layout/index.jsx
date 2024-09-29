import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {

    const webLinks = {
        link_one: 'Shop',
        link_two: 'Sale',
        link_three: 'About',
        link_four: 'Contact Us',
        link_five: 'Privacy',
        link_six: 'Terms and Condition',
    }

    return (
        <div>

            <Header webLinks={webLinks} />
            {children}
            <Footer webLinks={webLinks} />

        </div>
    )
}

export default Layout