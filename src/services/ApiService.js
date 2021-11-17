import axios from "axios";

export default function ApiService() {
    const _server = axios.create({
        baseURL: 'https://recycash-api2-b3svkyvpgq-uc.a.run.app/'
    });
    let _user = {};

    return {
        server: _server,
        setUser: (user) => {
            _user = user;
        },
        post: (uri, data) => _server.post(uri, data, {headers: {
            'Authorization': 'Bearer ' + _user?.token
        }}),
        get: (url) => _server.get(url)
    };
}