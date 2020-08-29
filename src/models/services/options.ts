import UpdatesProvider from './updatesProvider';
import SiteOptions from '@/interfaces/siteOptions';
import Axios0 from 'axios';
import Login from '@/models/services/login';

class Options {
    public static lock = 0;
    private static instance: Options;
    private hash: string | undefined;

    private _options: SiteOptions | undefined;

    get options(): SiteOptions | undefined {
        return this._options;
    }

    public static getInstance() {
        if (!Options.instance) {
            Options.instance = new Options();
            Options.getInstance().getOptions();
        }

        return Options.instance;
    }

    public async getOptions() {
        Options.lock++;
        const updatesProvider = UpdatesProvider.getInstance();

        this.hash = updatesProvider.getKey('options');
        this._options = JSON.parse(localStorage.getItem('options') || '{}');

        try {
            await updatesProvider.getUpdates();
            if (updatesProvider.compare(this.hash, 'options')) {
                if (!this._options || !Object.keys(this._options).length) {
                    throw new Error();
                }
            } else {
                this.hash = updatesProvider.getKey('options');
                throw new Error();
            }
        } catch (e) {
            try {
                if (Options.lock === 1) {
                    const options = await Axios0.get('site-options', {
                        headers: {
                            Authorization: `Bearer ${Login.getInstance().token()}`,
                        },
                    });
                    if (options) {
                        this._options = options.data;
                        localStorage.setItem('options', JSON.stringify(this._options));
                    } else {
                        throw new Error();
                    }
                }
            } catch (e) {
                this._options = undefined;
            }
        }
        Options.lock--;
    }
}

export default Options;
