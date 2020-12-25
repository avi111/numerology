import Axios0 from 'axios';
import {Token} from '@/interfaces/token';

class Login {
    private static instance: Login;

    public static getInstance() {
        if (!Login.instance) {
            Login.instance = new Login();
        }

        return Login.instance;
    }

    public getFromLocalStorage() {
        return {token: localStorage.getItem('token') || ''};
    }

    public token() {
        return this.getFromLocalStorage().token;
    }

    public async login(username: string, password: string): Promise<string> {
        let token: Token = this.getFromLocalStorage();

        const baseURL = process.env.VUE_APP_ROOT_API;
        const response = await Axios0.post('jwt-auth/v1/token', {
                username,
                password,
            }, {
                baseURL,
            },
        );

        token = response.data;

        if (response.data.data) {
            token = response.data.data;
        }

        // if (token.token) {
        //     localStorage.setItem('token', token.token);
        // }

        return token.token;
    }
}

export default Login;
