import axios from "axios"

const API = {
    login(data) {
        return axios.post(`https://mysterious-reef-29460.herokuapp.com/api/v1/validate`, {
            ...data,
            'content-type': 'application/json'
        })
    },
    profile: {
        getProfile(userId) {
            return axios.get(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${userId}`);
        }
    },
    news: {
        getNews() {
            return axios.get(`https://mysterious-reef-29460.herokuapp.com/api/v1/news`);
        }
    }
}

export default API;