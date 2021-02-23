import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth';
import style from '../Login.module.css';

const LoginForm = (props) => {
    let [state, setState] = useState({
        data: {
            email: '',
            password: ''
        },
        isFetching: false,
        error: ''
    })

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
            isFetching: true,
            error: ''
        }))

        let response = await props.login(state.data);
        if (response.status === 'ok') {
            setState(prev => ({
                ...prev,
                isFetching: false,
                error: ''
            }));
            props.history.push('/profile');
        }
        if (response.status === 'err') {
            setState(prev => ({
                ...prev,
                isFetching: false,
                error: response.error,
                data: {
                    ...prev,
                    email: '',
                    password: ''
                }
            }));
        }
    }

    const { email, password } = state.data;
    return <form className={style.Form} onSubmit={onSubmitForm} >
        <input type='text' placeholder={'Email'} name={'email'} value={email} onChange={onHandleChange} />
        <input type='text' placeholder={'Password'} name={'password'} value={password} onChange={onHandleChange} />

        {state.error.length ? <span>{state.error}</span> : ''}
        {state.isFetching ? <span>loading...</span> : <button>LOGIN</button>}
    </form>
}

export default connect(null, { login })(LoginForm);