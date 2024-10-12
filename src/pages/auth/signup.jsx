import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmial] = useState('')

    const formData = {
        title: fname,
        body: lname,
    }

    const SubmitForm = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', formData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <div className=" page_width" style={{
                maxWidth: '1200px',
                margin: 'auto'
            }} >
                <h2>Contact Us</h2>

                <div className="contact_form">
                    <h2>Sign Up</h2>
                    <input type="text" placeholder='Title' value={fname} onChange={(e) => setFname(e.target.value)} />
                    <input type="text" placeholder='Body' value={lname} onChange={(e) => setLname(e.target.value)} />
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmial(e.target.value)} />
                    <button onClick={SubmitForm} >Submit</button>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />

            </div>
        </div>
    )
}

export default Signup