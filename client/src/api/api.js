import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru/',
    headers: {'Content-Type': 'application/json'},
})

export const terminalAPI = {
    
}