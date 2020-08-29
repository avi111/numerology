import Info from '@/interfaces/info';
import {Promises} from '@/interfaces/promises';
import Options from '@/models/services/options';
import Dictionary from '@/models/services/dictionary';

const Loader = (): Promise<Info> => new Promise((promiseResolve) => {
    const response: Info = {} as Info;
    const load = async (promises: Promises) => {
        promises.options = await new Promise(async (resolve, reject) => {
            if (!Options.getInstance().options) {
                resolve(false);
            } else {
                await Options.getInstance().getOptions();
                response.options = Options.getInstance().options;
                resolve(true);
            }
        });

        promises.dictionary = await new Promise(async (resolve, reject) => {
            if (!Dictionary.getInstance().words) {
                resolve(false);
            } else {
                const dictionary = await Dictionary.getInstance().getDictionary();
                response.dictionary = Dictionary.getInstance();
                resolve(true);
            }
        });

        setTimeout(() => {
            if (!Object.values(promises).every((r) => r)) {
                load(promises);
            } else {
                promiseResolve(response);
            }
        }, 500);
    };


    load({
        options: false,
    } as Promises);
});

export default Loader;
