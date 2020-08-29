import Axios0 from 'axios';
import {Key} from '../../interfaces/dictionary';
import Login from '@/models/services/login';

// import * as queryString from 'querystring';

class Dictionary {

    get dictionary(): Promise<Key[]> | undefined {
        return this._dictionary;
    }

    get words(): { [p: string]: string } {
        return this._words || {};
    }

    private static instance: Dictionary;

    private _dictionary: Promise<Key[]> | undefined;
    private _promise: Promise<{ [key: string]: string; }> | undefined;
    private _words: { [key: string]: string; } | undefined;

    private constructor() {
        const self = this;
        // const parsed = queryString.parse(location.search);
        try {
            // throw new Error();
            const fromLocal = JSON.parse(localStorage.getItem('dictionary') || '');
            if (Object.keys(fromLocal).length) { // && !parsed.refresh) {
                // self._dictionary = Promise.resolve(fromLocal);
                self._promise = Promise.resolve(fromLocal);
            } else {
                // noinspection ExceptionCaughtLocallyJS
                throw new Error();
            }
        } catch (e) {
            // self._dictionary = Dictionary.remote();
            self._promise = Dictionary.getPromise();
        }
    }

    public static getInstance() {
        if (!Dictionary.instance) {
            Dictionary.instance = new Dictionary();
        }

        return Dictionary.instance;
    }

    private static remote = () => {
        return new Promise<Key[]>((resolve, reject) => {
            Axios0.get(`/dictionary?_fields=translations`, {
                headers: {
                    Authorization: `Bearer ${Login.getInstance().token()}`,
                },
            })
                // Axios0.get(`/dictionary`)
                .then((response) => resolve(response.data))
                .catch((error) => {
                    reject(error);
                });
        });
    }

    private static getPromise = () => {
        return new Promise<{ [key: string]: string; }>((resolve, reject) => {
            Axios0.get(`/new-dictionary`, {baseURL: process.env.VUE_APP_ROOT_API + 'wp/v2/'})
                // Axios0.get(`/dictionary`)
                .then((response) => resolve(response.data))
                .catch((error) => {
                    reject(error);
                });
        });
    }

    public async getDictionary() {
        this._words = await this._promise;
    }

    public getWord(key: string): string {
        return (this._words && this._words[key]) || key;
    }
}


export default Dictionary;
