import React from 'react'
import Banner from './features/banner'
import Arrival from './features/arrival'

const Homepage = () => {
    return (
        <div>
            <div className="page_width">
                <Banner />
                <Arrival />
            </div>

        </div>
    )
}

export default Homepage