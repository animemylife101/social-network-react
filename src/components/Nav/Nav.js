import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import style from './Nav.module.css';
import { login, logout } from '../../actions/auth';
import GoogleLogin, { GoogleLogout } from 'react-google-login';

{/* <GoogleLogin
        clientId='882151184255-cbpcg3k39jlqhp5qb3vb6u05en6la08t.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogleLogin}
        onFailure={responseGoogleLogin}
        cookiePolicy={'single_host_origin'}
        onClick = { () => { alert('login') } } /> */}

const Nav = (props) => {

    const responseGoogleLogin = (Response) => {
        // props.history.push('/login') 
        // this function was used when the logic was without 'React Google Login' 

        props.login();
        // props.history.push('/profile');
    }

    const responseGoogleLogout = (Response) => {
        props.logout();
        // props.history.push('/profile');
    }

    return <div className={style.Nav}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/news'>News</NavLink>
        <NavLink to='/profile'>Profile</NavLink>

        {
            props.userId ?

                // <button onClick={props.logout} >Выйти</button>
                <GoogleLogout
                    clientId='882151184255-cbpcg3k39jlqhp5qb3vb6u05en6la08t.apps.googleusercontent.com'
                    buttonText='Выйти'
                    onLogoutSuccess={responseGoogleLogout}
                />
                :
                <GoogleLogin
                    clientId='882151184255-cbpcg3k39jlqhp5qb3vb6u05en6la08t.apps.googleusercontent.com'
                    buttonText='Войти'
                    onSuccess={responseGoogleLogin}
                    onFailure={responseGoogleLogin}
                    cookiePolicy={'single_host_origin'}
                />
            // <button onClick = { () => { props.history.push('/login') }}>Войти</button>
        }
    </div>
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId
})

export default withRouter(connect(mapStateToProps, { logout, login })(Nav));
