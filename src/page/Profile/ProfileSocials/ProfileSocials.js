import React from 'react';
import defineIcon from '../../../items-helper/define-icon';

const ProfileSocials = ({ profile }) => {

    return <div>
        Мои социальные сети:
        {
            profile.social.length > 1
                ? profile.social.map((a, i) => {
                    return <div key={i}>
                        <img src={defineIcon(a.label)} />
                        <a href={a.link} target='_blank' rel="noreferrer noopener" >{a.label}</a>
                        <br />
                    </div>
                })
                : <i> Не указано</i>
        }
    </div>
}

export default ProfileSocials;