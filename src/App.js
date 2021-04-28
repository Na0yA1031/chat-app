import react from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Room from './pages/Room';
import Config from './pages/Config'
import { AuthProvider } from './AuthService';
import LoggedInRoute from './LoggedInRoute';
import './style.css';





const App = () => {

    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <LoggedInRoute exact path='/' component={Room} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/config' component={Config} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App;