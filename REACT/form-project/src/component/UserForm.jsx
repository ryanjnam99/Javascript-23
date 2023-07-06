import React, { useState } from 'react'

const UserForm = (props) => {
    const [firstName, setFirstname] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastName, setLastname] = useState("");
    const [lastError, setLastError] = useState ("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const handleFirst = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length<2) {
            setFirstError("First name must be at least 2 characters!");
        }
        else {
            setFirstError("");
        }
    }
    const handleLast = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 2) {
            setLastError("Last name must be at least 2 characters!");
        }
        else {
            setLastError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        }
        else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!")
        }
        else {
            setPasswordError("");
        }
    }
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if (e.target.value !== password) {
            setConfirmError("Password must match!")
        }
        else {
            setConfirmError("");
        }
    }

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, username, email, password, confirmPassword};
        console.log("Welcome", newUser);
            setFirstname("");
            setLastname("");
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirm("");
    }

    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange = {handleFirst}/>
                {
                    firstError?
                    <p>{firstError}</p>:
                    ""
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange = {handleLast}/>
                {
                    lastError?
                    <p>{lastError}</p>:
                    ""
                }
            </div>
            <div>
                <label>Username: </label>
                <input type="text" value={username} onChange = {(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange = {handleEmail} />
                {
                    emailError?
                    <p>{emailError}</p>:
                    ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange = {handlePassword}/>
                {
                    passwordError?
                    <p>{passwordError}</p>:
                    ""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange = {handleConfirm}/>
                {
                    confirmError?
                    <p>{confirmError}</p>:
                    ""
                }
            </div>
            <input type="submit" value="Create User" />
            <h2>Your Form Data</h2>
            <p>
                First Name: {firstName}
            </p>
            <p>
                Last Name: {lastName}
            </p>
            <p>
                Email: {email}
            </p>
            <p>
                Username: {username}
            </p>
        </form>
    )
}

export default UserForm;