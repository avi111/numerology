import {MeaningNormalized, MeaningsLink, MeaningsProps} from '../../interfaces/meaning';
import Axios0 from 'axios';
import Login from '@/models/services/login';

class Meanings {

    get meanings(): Promise<MeaningsProps[]> | undefined {
        return this._meanings;
    }

    private static instance: Meanings;

    private _meanings: Promise<MeaningsProps[]> | undefined;

    private constructor() {
        const self = this;
        self._meanings = Meanings.remote();
    }

    public static getInstance() {
        if (!Meanings.instance) {
            Meanings.instance = new Meanings();
        }

        return Meanings.instance;
    }

    private static remote = () => {
        return new Promise<MeaningsProps[]>((resolve, reject) => {
            Axios0.get(`/meanings?_fields=slug,title,id`, {
                baseURL: process.env.VUE_APP_ROOT_API + 'wp/v2/',
                headers: {
                    Authorization: `Bearer ${Login.getInstance().token()}`,
                },
            })
                .then((response) => resolve(response.data))
                .catch((error) => {
                    reject(error);
                });
        });
    }

    public async meaningsAdapter(): Promise<MeaningNormalized[]> {
        const meanings = await this._meanings;
        return meanings ? meanings.map((meaning) => {
            return {
                id: meaning.id,
                title: meaning.title.rendered,
            } as MeaningNormalized;
        }) : [];
    }

    public meaningList(meanings: MeaningNormalized[]): MeaningsLink[] {
        return meanings.map((meaning) => {
            return {
                title: meaning.title,
                url: (process.env.VUE_APP_MEANING_URL as string).replace('NUMBER', meaning.id + ''),
            };
        });
    }

}

export default Meanings;
