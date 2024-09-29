import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ webLinks }) => {



    return (
        <div>
            {/* header start */}
            <div className="page_width">
                <div className="header">
                    <div className="logo">
                        <h2>SHOP.CO </h2>
                    </div>

                    <div className="header_links">
                        <ul>
                            <li>
                                <Link to='/' >{webLinks?.link_one}</Link>
                            </li>
                            <li>
                                <Link to='/contact_us' >Sale</Link>
                            </li>
                            <li>
                                <Link to='/about_us' >On Arrivals</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="serch">
                        <input type="text" />
                    </div>
                </div>
            </div>
            {/* header end */}
        </div>
    )
}

export default Header