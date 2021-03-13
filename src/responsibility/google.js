const google = {
    responseGoogleLoginRequest: () => ({ error: '', inProgress: true}),
    responseGoogleLoginFailure: () => ({ error: '', inProgress: false}),
    responseGoogleLoginSuccess: (login, history) => { login(null, null, 'LOGIN_WITH_GOOGLE'); history.push('/profile') }
}

export default google;