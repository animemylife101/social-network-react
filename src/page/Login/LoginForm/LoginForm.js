import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
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
        let login = props.login(state.data, props.history);
        Promise.all([login]).then(Response => {
            if (Response[0].status === 'OK') props.history.push('/news');
            setState(prev => ({
                ...prev,
                data: {
                    ...prev,
                    email: '',
                    password: ''
                }
            }));

        })
    }

    const { email, password } = state.data;
    return <form className={style.Form} onSubmit={onSubmitForm} >
        <input type='text' placeholder={'Email'} name={'email'} value={email} onChange={onHandleChange} />
        <input type='text' placeholder={'Password'} name={'password'} value={password} onChange={onHandleChange} />
        {props.error ? <span>{props.error}</span> : ''}
        <button disabled={props.isFetching ? true : false}>Login</button>
    </form>
}

const mapStateToProps = (state) => ({
    isFetching: state.preloader.isFetching,
    error: state.preloader.error
})

export default connect(mapStateToProps, { login })(LoginForm);