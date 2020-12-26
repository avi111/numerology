import {Updates} from '../../../numerology-engine/interfaces/updates';
import Axios0 from 'axios';
import Login from '@/models/services/login';

class UpdatesProvider {
    public static updatesLock = 0;
    private static instance: UpdatesProvider;


    public static getInstance() {
        if (!UpdatesProvider.instance) {
            UpdatesProvider.instance = new UpdatesProvider();
        }

        return UpdatesProvider.instance;
    }

    public getFromLocalStorage() {
        return JSON.parse(localStorage.getItem('updates') || '{}');
    }

    public async getUpdates() {
        let updates: Updates = this.getFromLocalStorage();
        UpdatesProvider.updatesLock++;
        if (UpdatesProvider.updatesLock === 1) {
            const response = await Axios0.get('updates', {
                headers: {
                    Authorization: `Bearer ${Login.getInstance().token()}`,
                },
            });

            updates = response.data;
            localStorage.setItem('updates', JSON.stringify(updates));
        }
        UpdatesProvider.updatesLock--;
        return updates;
    }

    public compare(hash: string, key: string): boolean {
        return this.getKey(key) === hash;
    }

    public getKey(key: string): string {
        return this.getFromLocalStorage()[key];
    }
}

export default UpdatesProvider;
