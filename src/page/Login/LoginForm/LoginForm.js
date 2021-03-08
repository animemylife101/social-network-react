import React, { useEffect, useLayoutEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth';
import style from '../Login.module.css';

const LoginForm = (props) => {
    let [state, setState] = useState({
        data: {
            email: '',
            password: ''
        },
        isFetching: props.isFetching,
        error: props.error,
        inProgress: false
    })

    useLayoutEffect(() => {
        setState(prev => ({
            ...prev,
            error: '',
            isFetching: false
        }));
        // componentwillunmount alternative hook
        return () => {
            setState(prev => ({
                ...prev,
                error: '',
                isFetching: false
            }))
        }
    }, [])

    const onHandleChange = ({ target }) => {
        setState(prev => ({
            ...prev,
            data: {
                ...prev.data,
                [target.name]: target.value
            }
        }))
    }

    const onSubmitForm = async (event) => {
        event.preventDefault();
        setState(prev => ({
            ...prev,
            error: '',
            inProgress: true
        }));
        let login = props.login(state.data, props.history, 'LOGIN_DEFAULT');
        Promise.all([login]).then(Response => {
            if (Response[0]?.status === 'OK') props.history.push('/profile');
            else {
                setState(prev => ({
                    ...prev,
                    data: {
                        ...prev,
                        email: '',
                        password: ''
                    },
                    error: Response[0].error.error,
                    inProgress: false
                }));
            }
        })
    }

    const { email, password } = state.data;
    const responseGoogleLoginRequest = (Response) => {
        setState(prev => ({
            ...prev,
            error: '',
            inProgress: true
        }));
        // props.history.push('/login') 
        // this function was used when the logic was without 'React Google Login' 
    }

    const responseGoogleLoginSuccess = () => {
        props.login(null, null, 'LOGIN_WITH_GOOGLE');
        props.history.push('/profile');
    }

    return <form className={style.Form} onSubmit={onSubmitForm} >
        <input type='text' placeholder={'Email'} name={'email'} value={email} onChange={onHandleChange} />
        <input type='text' placeholder={'Password'} name={'password'} value={password} onChange={onHandleChange} />
        <GoogleLogin clientId='882151184255-cbpcg3k39jlqhp5qb3vb6u05en6la08t.apps.googleusercontent.com'
            buttonText='Войти с помощью Google' onSuccess={responseGoogleLoginSuccess}
            ookiePolicy={'single_host_origin'} onRequest={responseGoogleLoginRequest} />
        {state.error ? <span>{state.error}</span> : ''}
        <button disabled={state.inProgress ? true : false}>Login</button>
    </form>
}

const mapStateToProps = (state) => ({
    isFetching: state.preloader.isFetching,
    error: state.preloader.error
})

export default connect(mapStateToProps, { login })(LoginForm);