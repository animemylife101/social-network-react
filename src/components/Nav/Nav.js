import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import style from './Nav.module.css';
import { login, logout } from '../../actions/auth';
import GoogleLogin, { GoogleLogout } from 'react-google-login';

const Nav = (props) => {

    const responseGoogleLogin = (Response) => {
        props.login(null, null, 'LOGIN_WITH_GOOGLE');
    }

    const responseGoogleLogout = (Response) => {
        props.logout();
    }

    return <div className={style.Nav}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/news'>News</NavLink>
        <NavLink to='/profile'>Profile</NavLink>

        {
            props.userId
                ? <GoogleLogout
                    clientId='616850661912-tfs0513h7vrh5m2ljvrtq0o952abv74k.apps.googleusercontent.com'
                    buttonText='Выйти' onLogoutSuccess={responseGoogleLogout} />
                : <GoogleLogin clientId='616850661912-tfs0513h7vrh5m2ljvrtq0o952abv74k.apps.googleusercontent.com'
                    buttonText='Войти' onSuccess={responseGoogleLogin}
                    onFailure={responseGoogleLogin} cookiePolicy={'single_host_origin'} />
        }
    </div>
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId
})

export default withRouter(connect(mapStateToProps, { logout, login })(Nav));
