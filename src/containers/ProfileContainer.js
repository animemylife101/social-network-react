import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getProfile } from '../actions/profile';
import withAuthRedirect from '../hoc/withAuthRedirect';
import Profile from '../page/Profile/Profile';
import ProfileLanguages from '../page/Profile/ProfileLanguages/ProfileLanguages';
import ProfileSocials from '../page/Profile/ProfileSocials/ProfileSocials';

const ProfileContainer = ({profile, ...props}) => {
    const data = <div>
        <p>Мой город: {profile.city ? profile.city : <i>Город не указан</i>}</p>
        <ProfileLanguages profile = {profile} />
        <ProfileSocials profile = {profile} />
    </div>
    return <Profile {...props} data={data} />
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    profile: state.profile.profile,
    isFetching: state.preloader.isFetching,
    error: state.preloader.error
});

export default compose(
    withAuthRedirect, connect(mapStateToProps, { getProfile })
)(ProfileContainer);