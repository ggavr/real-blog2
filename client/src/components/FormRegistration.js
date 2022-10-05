import React, {useState} from "react"
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

function FormRegistration() {
    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const handleChangeUser = (e) => setUser(() => (e.target.value))
    const handleChangePassword = (e) => setPassword(() => (e.target.value))
    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('user', user)
        navigate('/')
    }
    return (
        <form className='form'>
            <h3>Registration</h3>
            <input
                type="text"
                placeholder="Username"
                className="form--input"
                name="Username"
                value={user}
                onChange={handleChangeUser}
            />
            <input
                type="text"
                placeholder="Password"
                className="form--input"
                name="Password"
                value={password}
                onChange={handleChangePassword}
            />
            <button
                className="form--button"
                onClick={handleSubmit}
            >
                Submit
            </button>
            <h2><Link to="sign-in">Sign In</Link></h2>
        </form>
    )
}

export default FormRegistration