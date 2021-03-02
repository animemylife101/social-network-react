import ProfileLanguages from "./ProfileLanguages/ProfileLanguages";
import ProfileSocials from "./ProfileSocials/ProfileSocials";

const ProfileUI = (props) => {
    // console.log(props);
    return <div>
        <p>Мой город: {props.profile.city ? props.profile.city : <i>Город не указан</i>}</p>
        <ProfileLanguages {...props} />
        <ProfileSocials {...props} />
    </div>
}

export default ProfileUI;