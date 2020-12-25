const langs: Language[] = [
    {
        locale: 'he',
        wpLocale: 'he_IL',
        label: 'Hebrew',
        localLabel: 'עברית',
        rtl: true,
    },
    {
        locale: 'en',
        wpLocale: 'en_US',
        label: 'English',
        localLabel: 'English',
        rtl: false,
    },
    {
        locale: 'ru',
        wpLocale: 'ru_RU',
        label: 'Russian',
        localLabel: 'Русский',
        rtl: false,
    },
];

export interface Language {
    locale: string;
    wpLocale: string;
    label: string;
    localLabel: string;
    rtl: boolean;
}

export default langs;
