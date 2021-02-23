import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import ProfileLanguages from './ProfileLanguages/ProfileLanguages';
import ProfileSocials from './ProfileSocials/ProfileSocials';

const Profile = (props) => {
    let [state, setState] = useState({
        status: null,
        error: null
    })

    useEffect(() => {
        props.getProfile(props.userId).then((response) => {
            setState(prev => ({
                ...prev,
                status: response.status,
                error: response.error,
            }))
        });
    }, []);

    return <div>
        {
            state.error === 'ok'
                ? <div>
                    {
                        <div>
                            {
                                state.status == 'ok'
                                    ? <div>
                                        <h1>Profile</h1>
                                        <div>
                                            <p>Мой город: {props.profile.city ? props.profile.city : <i>Город не указан</i>}</p>
                                            <ProfileLanguages {...props} />
                                            <ProfileSocials {...props} />
                                        </div>
                                    </div>
                                    : <h1>{state.error}</h1>
                            }
                        </div>
                    }
                </div>
                : <h1>Wait...</h1>
        }
    </div>
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    profile: state.profile.profile
});


export default withAuthRedirect(connect(mapStateToProps, { getProfile })(Profile));