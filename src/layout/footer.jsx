import React from 'react'

const Footer = ({ webLinks }) => {
    return (
        <div>

            <ul>
                <li>
                    <a href=""> {webLinks?.link_one} </a>
                </li>
                <li>
                    <a href=""> {webLinks?.link_two} </a>
                </li>
                <li>
                    <a href=""> {webLinks?.link_three} </a>
                </li>
                <li>
                    <a href=""> {webLinks?.link_four} </a>
                </li>
            </ul>

        </div>
    )
}

export default Footer