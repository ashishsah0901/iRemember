import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const SignUp = (props) => {
    let history = useHistory();
    const [credentials, setCredentials] = useState({ email: "", password: "", name: "", cpassword: "" });
    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        })
        const json = await response.json()
        if (json.success) {
            props.showAlert("Signed up successfully", "success");
            localStorage.setItem('token', json.token)
            history.push("/");
        } else {
            props.showAlert("Please enter valid credentials", "danger");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="mt-2">
            <h2>Sign up</h2>
            <form onSubmit={handleSignup}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" value={credentials.name} onChange={onChange} className="form-control" id="name" name="name" aria-describedby="emailHelp" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address:</label>
                    <input type="email" value={credentials.email} onChange={onChange} className="form-control" id="email" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" value={credentials.password} onChange={onChange} className="form-control" name="password" id="password" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Password:</label>
                    <input type="password" value={credentials.cpassword} onChange={onChange} className="form-control" name="cpassword" id="cpassword" />
                </div>
                <button disabled={credentials.password.length < 5 || credentials.password !== credentials.cpassword} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUp
