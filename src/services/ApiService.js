import axios from "axios";

let _user = {};
const _server = axios.create({
    baseURL: 'https://recycash-api2-b3svkyvpgq-uc.a.run.app/'
});

export default function ApiService() {
    return {
        server: _server,
        setUser: (user) => {
            _user = user;
        },
        getUser: () => _user,
        post: (uri, data) => _server.post(uri, data, {headers: {
            'Authorization': 'Bearer ' + _user?.token
        }}),
        get: (url) => _server.get(url, {headers: {
            'Authorization': 'Bearer ' + _user?.token
        }})
    };
}