import axios from "axios";

export default class LoginService {
    login(data) {
        let config = {
            method: 'post',
            url: 'https://lms.kannbal.com/api_crud/api/control_login.php?action=login_usu',
            headers: {
                'Authorization': 'Basic YWRtaW4uREVWLlNvZnRoZWFsdGg6czBwb3J0My1TMGZ0aDM0bDc=',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        return axios(config);
    }

    registroLogin(data) {
        var config = {
            method: 'post',
            url: 'https://lms.kannbal.com/api_crud/api/control_login.php?action=registrar_usu',
            headers: {
                'Authorization': 'Basic YWRtaW4uREVWLlNvZnRoZWFsdGg6czBwb3J0My1TMGZ0aDM0bDc=',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        return axios(config);
    }

    actualizarLogin(data) {
        let config = {
            method: 'post',
            url: 'https://lms.kannbal.com/api_crud/api/control_login.php?action=update_reg_usu',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        return axios(config);
    }
}