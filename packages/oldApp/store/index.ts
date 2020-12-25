import Vue from 'vue';
import Vuex from 'vuex';
import langs, {Language} from './langs';
import Profile from '@/models/mainTools/Profile';
import Couple from '@/models/mainTools/couple';
import Business from '@/models/mainTools/business';
import Status from '@/interfaces/status';
import Props from '@/interfaces/props';
import {IProps} from '@/interfaces/store';
import Dictionary from '@/models/services/dictionary';
import NameMapClass from '@/models/mainTools/NameMapClass';
import SiteOptions from '@/interfaces/siteOptions';
import Chakra from '@/models/calculations/Chakra';

Vue.use(Vuex);

const rtlLangs: string[] = langs.filter((l) => l.rtl).map((l) => l.locale);

export interface State {
    lang: string;
    langs: Language[];
    rtl: boolean;
    dictionary: { [p: string]: string };
    profile?: Profile;
    chakra?: Chakra;
    nameMap?: NameMapClass;
    couple?: Couple;
    business?: Business;
    status?: Status;
    props: Props[];
    siteOptions?: SiteOptions;
    token?: string;
}

const stateItems: State = {
    lang: 'he',
    langs,
    rtl: true,
    dictionary: {},
    props: [],
    nameMap: undefined,
    business: undefined,
    couple: undefined,
    profile: undefined,
    chakra: undefined,
    siteOptions: undefined,
    status: undefined,
    token: undefined,
};

export default new Vuex.Store({
    state: stateItems,
    getters: {
        token(state) {
            return state.token;
        },
        lang(state) {
            return state.lang;
        },
        props(state) {
            return state.props;
        },
        status(state) {
            return state.status;
        },
        rtl(state) {
            const curreLang = state.langs.find((l) => l.locale === state.lang);
            return curreLang && curreLang.rtl;
        },
        langs(state) {
            return state.langs;
        },
        dictionary(state) {
            return state.dictionary;
        },
        couple(state) {
            return state.couple;
        },
        business(state) {
            return state.business;
        },
        nameMap(state) {
            return state.nameMap;
        },
        options(state) {
            return state.siteOptions;
        },
        chakta(state) {
            return state.chakra;
        },
    },
    mutations: {
        setToken(state, token) {
            localStorage.setItem('token', token);
            state.token = token;
        },
        setLang(state, lang) {
            localStorage.setItem('lang', lang);
            state.lang = lang;
            state.rtl = rtlLangs.findIndex((l) => l === lang) > -1;
        },
        setStatus(state, status: Status) {
            state.status = status;
        },
        setOptions(state, siteOptions: SiteOptions) {
            state.siteOptions = siteOptions;
        },
        setProps(state: State, {props, num = 0}: IProps) {
            const newProps = state.props;
            newProps[num] = props;
            state.props = newProps;
        },
        resetProps(state: State) {
            state.props = [];
        },
        setDictionary(state, dictionary: Dictionary) {
            state.dictionary = dictionary.words;
            localStorage.setItem('dictionary', JSON.stringify(dictionary.words));
        },
        setProfile(state, profile) {
            state.profile = profile;
        },
        setChakra(state, chakra) {
            state.chakra = chakra;
        },
        setNameMap(state, nameMap) {
            state.nameMap = nameMap;
        },
        setCouple(state, couple) {
            state.couple = couple;
        },
        setBusiness(state, business) {
            state.business = business;
        },
    },
    actions: {
        setToken(context, token) {
            context.commit('setToken', token);
        },
        setLang(context, lang) {
            context.commit('setLang', lang);
        },
        setOptions(context, siteOptions) {
            context.commit('setOptions', siteOptions);
        },
        setProps(context, {props, num = 0}) {
            context.commit('setProps', {props, num});
        },
        resetProps(context) {
            context.commit('resetProps');
        },
        setStatus(context, status: Status) {
            context.commit('setStatus', status);
        },
        setDictionary(context, dictionary) {
            context.commit('setDictionary', dictionary);
        },
        setProfile(context, profile) {
            context.commit('setProfile', profile);
        },
        setChakra(context, chakra) {
            context.commit('setChakra', chakra);
        },
        setNameMap(context, nameMap) {
            context.commit('setNameMap', nameMap);
        },
        setCouple(context, couple) {
            context.commit('setCouple', couple);
        },
        setBusiness(context, business) {
            context.commit('setBusiness', business);
        },
        goBack(context) {
            context.commit('setProfile', undefined);
            context.commit('setCouple', undefined);
            context.commit('setBusiness', undefined);
            context.commit('setNameMap', undefined);
        },
    },
    modules: {},
});
