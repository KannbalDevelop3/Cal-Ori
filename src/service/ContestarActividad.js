import axios from "axios";
import { useState } from "react";
export default class ContestarActividad {
    contestarActivity(data) {
        let config = {
            method: 'post',
            url: 'https://api.kannbal.com/api_crud/api/control_contestar.php?action=update_contestar',
            headers: {
                'Authorization': 'Basic YWRtaW4uREVWLlNvZnRoZWFsdGg6czBwb3J0My1TMGZ0aDM0bDc=',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        return axios(config);
    }
    crearActivity(data) {
        let config = {
            method: 'post',
            url: 'https://api.kannbal.com/api_crud/api/control_contestar.php?action=crear_contestar',
            headers: {
                'Authorization': 'Basic YWRtaW4uREVWLlNvZnRoZWFsdGg6czBwb3J0My1TMGZ0aDM0bDc=',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        return axios(config)
    }
    async existeActivity(data) {
        let config = {
            method: 'post',
            url: 'https://api.kannbal.com/api_crud/api/control_contestar.php?action=existe_contestar',
            headers: {
                'Authorization': 'Basic YWRtaW4uREVWLlNvZnRoZWFsdGg6czBwb3J0My1TMGZ0aDM0bDc=',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        return axios(config)
            // .then(function (response) {
            //     // setDate(JSON.stringify(response.data))
            //     console.log('Hola: ', JSON.stringify(response.data));
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
    }
}

