import axios from "axios";

export default class Usuario {
    usuarioGetAll(data) {
        let config = {
            method: 'get',
            url: 'https://api.kannbal.com/api_crud/api/control_usuarios.php?action=fetch_all',
            headers: {
                'Authorization': 'Basic YWRtaW4uREVWLlNvZnRoZWFsdGg6czBwb3J0My1TMGZ0aDM0bDc=',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        return axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}