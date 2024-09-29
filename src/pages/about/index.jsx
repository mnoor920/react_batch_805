import React, { useState } from 'react'

const About = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>
                About US
            </h2>

            <br />
            <br />

            <p>Count: {count} </p>

            <button onClick={() => setCount(count + 1)} >
                Add +
            </button>
            <button onClick={() => setCount(count - 1)} > Minus - </button>
        </div>
    )
}

export default About