import React from 'react';

const ProfileLanguages = ({ profile }) => {
    return <div>
        Языки, которые я знаю:
        {
            profile.languages.length
                ? profile.languages.map((a, i) => {
                    return <p key={i}>{a}</p>
                })
                : <i>Не указано</i>
        }
    </div>
}

export default ProfileLanguages;