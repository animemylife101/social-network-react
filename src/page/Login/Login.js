import React, { useLayoutEffect } from 'react';
import GoogleLogin from 'react-google-login';
import Error from '../../components/Error/Error';
import style from './Login.module.css';

const Login = (props) => {

    useLayoutEffect( () => {
        props.changeState({ error: '', isFetching: false });
        return () => {props.changeState({ error: '', isFetching: false }) }
    }, [] );

    const onHandleChange = ({ target }) => { props.onHandleChange(target) }
    const onSubmitForm = (event) => { props.onSubmitForm(event) }
    const responseGoogleLoginRequest = () => { props.googleRequest() };
    const responseGoogleLoginSuccess = () => { props.googleSucess() };
    const responseGoogleLoginFailure = () => { props.googleFailure() };

    return <form className={style.Form} onSubmit={onSubmitForm} >
        <input type='text' placeholder={'Email'} name={'email'} value={props.state.data.email} onChange={onHandleChange} />
        <input type='password' placeholder={'Password'} name={'password'} value={props.state.data.password} onChange={onHandleChange} />

        <GoogleLogin clientId='882151184255-cbpcg3k39jlqhp5qb3vb6u05en6la08t.apps.googleusercontent.com'
            buttonText='Войти с помощью Google' onSuccess={responseGoogleLoginSuccess}
            cookiePolicy={'single_host_origin'} onRequest={responseGoogleLoginRequest} onFailure={responseGoogleLoginFailure} />

        <Error error = {props.state.error } />
        <button disabled={props.state.inProgress ? true : false}>Login</button>
    </form>
}

export default Login;