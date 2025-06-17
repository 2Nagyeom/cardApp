import { fetch } from 'expo/fetch';

export function APIS() {
    return fetch('https://074e730910f3.ngrok.app/api/card/franchise?franchise=onepiece')
            .then((response) => response.json())
} 