import React, { useState } from 'react'

const ContactUS = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmial] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const formData = {
        first_name: fname,
        last_name: lname,
        email: email,
        password: password,
        phone: phone
    }

    const SubmitForm = () => {
        console.log("Form Data", formData)
    }


    return (
        <div>
            <div className=" page_width" style={{
                maxWidth: '1200px',
                margin: 'auto'
            }} >
                <h2>Contact Us</h2>

                <div className="contact_form">
                    <h2>Contact Form</h2>
                    <input type="text" placeholder='First Name' value={fname} onChange={(e) => setFname(e.target.value)} />
                    <input type="text" placeholder='Last Name' value={lname} onChange={(e) => setLname(e.target.value)} />
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmial(e.target.value)} />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="number" placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
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

export default ContactUS