import React, { useLayoutEffect } from 'react';
import IsLoading from '../../tools/isLoading';

const Profile = ({ getProfile, userId, isFetching, error, data }) => {
    useLayoutEffect(() => {
        getProfile(userId);
    }, []);
    return <div>
        <IsLoading isFetching={isFetching}>
            {error === 'profile_ok' ? data : <h1>{error}</h1>}
        </IsLoading>
    </div>
}

export default Profile;