import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext } from '../AuthService';
import firebase from '../config/firebase';

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log({ email, password })

    const handleSubmit = (e) => {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/");
            })
            .catch(err => {
                console.log(err)
            })
    }

    const user = useContext(AuthContext);

    if (user) {
        return <Redirect to="/" />
    }



    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email1">E-mail</label>
                    <input
                        type="email"
                        id="email1"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password1">Password</label>
                    <input
                        type="password"
                        id="password1"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;