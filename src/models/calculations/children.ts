import {getWord} from '@/mixin';

const children: string[][] = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

children[2][1] = '3/2/1';
children[2][2] = '4/2';
children[2][3] = '5/3/2';
children[2][4] = '6/4/2';
children[2][5] = '7/5/2';
children[2][6] = '8/6/2';
children[2][7] = '9/7/2';
children[6][1] = '1+';
children[6][2] = '2+';
children[6][3] = '3+';
children[6][4] = '4+';

const getChildren = (hilltop: number, challenge: number): string => {
    return children[hilltop][challenge];
};

const andUp = (str: string): string => {
    if (str && str.slice(-1) === '+') {
        return `${str.slice(0, -1)} ${getWord('and up')}`;
    } else {
        return str;
    }
};

export default getChildren;

export {
    children,
    andUp,
};
