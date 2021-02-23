import React from 'react';

const ProfileLanguages = (props) => {
    return <div>
        Языки, которые я знаю:
        {
            props.profile.languages.length
                ? props.profile.languages.map((a, i) => {
                    return <p key={i}>{a}</p>
                })
                : <i>Не указано</i>
        }
    </div>
}

export default ProfileLanguages;