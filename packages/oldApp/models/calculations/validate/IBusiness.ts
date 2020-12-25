export interface BusinessInput {
    'business name': string;
    'business start date': Date;
    'first name1': string;
    'family name1': string;
    'birth date1': Date;
    'first name2': string;
    'family name2': string;
    'birth date2': Date;
    'first name3': string;
    'family name3': string;
    'birth date3': Date;
}

class IBusiness implements BusinessInput {
    public 'birth date1': Date;
    public 'birth date2': Date;
    public 'birth date3': Date;
    public 'business name': string;
    public 'business start date': Date;
    public 'family name1': string;
    public 'family name2': string;
    public 'family name3': string;
    public 'first name1': string;
    public 'first name2': string;
    public 'first name3': string;

    constructor() {
        this['business name'] = '';
        this['business start date'] = new Date(Date.now());
        this['birth date1'] = new Date(Date.now());
        this['birth date2'] = new Date(Date.now());
        this['birth date3'] = new Date(Date.now());
        this['family name1'] = '';
        this['family name2'] = '';
        this['family name3'] = '';
        this['first name1'] = '';
        this['first name2'] = '';
        this['first name3'] = '';
    }
}

export default IBusiness;
