import twitch from '../assets/images/social-icons/twitch.png';
import twitter from '../assets/images/social-icons/twitter.png';
import internet from '../assets/images/social-icons/internet.png';
import telegram from '../assets/images/social-icons/telegram.png';
import youtube from '../assets/images/social-icons/youtube.png';
import vk from '../assets/images/social-icons/vk.png';

const defineIcon = (item) => {
    switch (item) {
        case 'twitch':
            return twitch;
        case 'vk':
            return vk;
        case 'youtube':
            return youtube;
        case 'telegram':
            return telegram;
        case 'twitter':
            return twitter;
        case 'web':
            return internet;
        default:
            break;
    }
}

export default defineIcon;