import React, {useState} from "react"

function FormSignIn() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const handleChangeUser = (e) => setUser(() => (e.target.value))
    const handleChangePassword = (e) => setPassword(() => (e.target.value))
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form className='form'>
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
        </form>
    )
}

export default FormSignIn