export interface CouplesInput {
    'first name1': string;
    'family name1': string;
    'birth date1': Date;
    'first name2': string;
    'family name2': string;
    'birth date2': Date;
}

class ICouple implements CouplesInput {
    public 'birth date1': Date;
    public 'birth date2': Date;
    public 'family name1': string;
    public 'family name2': string;
    public 'first name1': string;
    public 'first name2': string;

    constructor() {
        this['birth date1'] = new Date(Date.now());
        this['birth date2'] = new Date(Date.now());
        this['family name1'] = '';
        this['family name2'] = '';
        this['first name1'] = '';
        this['first name2'] = '';
    }
}

export default ICouple;
