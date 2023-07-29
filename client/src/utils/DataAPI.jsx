import { config } from '../config';
const { HOST, API } = config;
const host = HOST.development;

class DataAPI {
    static async getAllPhoto() {
        const response = await fetch(host.concat(API.photo), {
            method: 'GET',
            headers: {
                'Content-Type': 'appplication/json',
            },
        });

        const result = await response.json();
        
        const data = result.data;

        return data;
    }

    static async createPhoto(form) {
        const response = await fetch(host.concat(API.dalle), {
            method: 'POST',
            headers: {
              'Content-Type': 'appplication/json',
            },
            body: JSON.stringify({
              prompt: form.prompt
            })
          });
    
        const data = await response.json();

        return data;
    }

    static async sharePhoto(photo) {
        const response = await fetch(host.concat(API.photo), {
            method: 'POST',
            headers: {
              'Content-Type': 'appplication/json',
            },
            signal: signal,
            body: JSON.stringify({
              ...photo
            })
          });
    }
}

export default DataAPI;