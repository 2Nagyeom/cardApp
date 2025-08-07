import { fetch } from 'expo/fetch';
import { User } from '../TYPE/userInfo';


const BASE_URL = 'https://a04cec7645fa.ngrok.app/api'

export const APIS = {

    signup: async (data: User) : Promise<any> => {
        const response = await fetch(`${BASE_URL}/accounts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status === 201) {
            return {}; // or return null;
        }     

        return response.json();
    },
} 