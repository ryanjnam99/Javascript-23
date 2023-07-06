import React, { useState } from 'react'

const UserForm = (props) => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirm] = useState("");

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
                <input type="text" value={firstName} onChange = {(e) => setFirstname(e.target.value)}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange = {(e) => setLastname(e.target.value)}/>
            </div>
            <div>
                <label>Username: </label>
                <input type="text" value={username} onChange = {(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange = {(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange = {(e) => setConfirm(e.target.value)}/>
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