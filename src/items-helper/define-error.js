const defineError = (error) => {
    switch (error) {
        case 'wrong_email_or_password':
            return 'Проверьте логин или пароль';
        case 'user_not_found':
            return 'Пользователь не найден';
        case 'not_connected_to_network':
            return 'Подключитесь к сети';
        default:
            return 'Проблема с сервером';
    }
}

export default defineError;