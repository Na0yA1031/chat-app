import React, { useState } from 'react';
import firebase from '../config/firebase';

const SignUp = () => {
    // state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName: name
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    console.log({ email, password })

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">name</label>
                    <input
                        name="name"
                        type="name"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}

                    />
                </div>
                <div>
                    <label htmlFor='email2'>E-mail</label>
                    <input
                        name='email'
                        type='email'
                        id='email2'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password2'>Password</label>
                    <input
                        name='password'
                        type='password'
                        id='password2'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;