import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [users, setUsers] = useState([])

    const submit = () => {
        axios.post('http://localhost:3002/create',
            { name: name, email: email, password: password }).then(() => {
                console.log('Response success')
            })
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label>Name: </label>
                <input type="text" onChange={(e) => { setName(e.target.value) }} />
                <label>Email: </label>
                <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
                <label>Password: </label>
                <input type="text" onChange={(e) => { setPassword(e.target.value) }} />
                <button type='submit'>Submit</button>
            </form>
            <hr />
            <p>Users:</p>
            <button>Show Users</button>
        </div>
    )
}

export default SignUp