import React, { useEffect, useState } from 'react';
import firebase from './config/firebase';

const AuthContext = React.createContext();
console.log(AuthContext)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        })
    }, [])

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )

}

export {
    AuthContext,
    AuthProvider
}

