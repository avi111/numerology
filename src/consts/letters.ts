const allLetters = 'אבגדהוזחטיכלמנסעפצקרשתםןץףך'.split('');
const letters = allLetters.join('');
const EHEVI_LETTERS: string[] = 'אהוי'.split('');
const SUFFIX_LETTERS: string[] = 'םןץפך'.split('');
const REGULAR_LETTERS: string[] = 'מנצפכ'.split('');

const gimatriaValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30,
    40, 50, 60, 70, 80, 90, 100, 200, 300, 400,
    40, 50, 90, 80, 20];

const contraGimatriaValues = new Map();

contraGimatriaValues.set(0, '');
contraGimatriaValues.set(1, 'א');
contraGimatriaValues.set(2, 'ב');
contraGimatriaValues.set(3, 'ג');
contraGimatriaValues.set(4, 'ד');
contraGimatriaValues.set(5, 'ה');
contraGimatriaValues.set(6, 'ו');
contraGimatriaValues.set(7, 'ז');
contraGimatriaValues.set(8, 'ח');
contraGimatriaValues.set(9, 'ט');
contraGimatriaValues.set(10, 'י');
contraGimatriaValues.set(15, 'טו');
contraGimatriaValues.set(16, 'טז');
contraGimatriaValues.set(20, 'כ');
contraGimatriaValues.set(30, 'ל');
contraGimatriaValues.set(40, 'מ');
contraGimatriaValues.set(50, 'נ');
contraGimatriaValues.set(60, 'ס');
contraGimatriaValues.set(70, 'ע');
contraGimatriaValues.set(80, 'פ');
contraGimatriaValues.set(90, 'צ');
contraGimatriaValues.set(100, 'ק');
contraGimatriaValues.set(200, 'ר');
contraGimatriaValues.set(300, 'ש');
contraGimatriaValues.set(400, 'ת');
contraGimatriaValues.set(500, 'תק');
contraGimatriaValues.set(600, 'תר');
contraGimatriaValues.set(700, 'תש');
contraGimatriaValues.set(800, 'תת');
contraGimatriaValues.set(900, 'תתק');

const smallGimatria = '123456789123456789123445982';

const bigGimatria = new Map();

bigGimatria.set('א', 1);
bigGimatria.set('ב', 2);
bigGimatria.set('ג', 3);
bigGimatria.set('ד', 4);
bigGimatria.set('ה', 5);
bigGimatria.set('ו', 6);
bigGimatria.set('ז', 7);
bigGimatria.set('ח', 8);
bigGimatria.set('ט', 9);
bigGimatria.set('י', 10);
bigGimatria.set('כ', 20);
bigGimatria.set('ל', 30);
bigGimatria.set('מ', 40);
bigGimatria.set('נ', 50);
bigGimatria.set('ס', 60);
bigGimatria.set('ע', 70);
bigGimatria.set('פ', 80);
bigGimatria.set('צ', 90);
bigGimatria.set('ק', 100);
bigGimatria.set('ר', 200);
bigGimatria.set('ש', 300);
bigGimatria.set('ת', 400);
bigGimatria.set('ם', 500);
bigGimatria.set('ן', 600);
bigGimatria.set('ץ', 700);
bigGimatria.set('ף', 800);
bigGimatria.set('ך', 900);

const gregorianMonths = new Map();
gregorianMonths.set(1, 'January');
gregorianMonths.set(2, 'February');
gregorianMonths.set(3, 'March');
gregorianMonths.set(4, 'April');
gregorianMonths.set(5, 'May');
gregorianMonths.set(6, 'June');
gregorianMonths.set(7, 'July');
gregorianMonths.set(8, 'August');
gregorianMonths.set(9, 'September');
gregorianMonths.set(10, 'October');
gregorianMonths.set(11, 'November');
gregorianMonths.set(12, 'December');

/*
getWord('January');
getWord('February');
getWord('March');
getWord('April');
getWord('May');
getWord('June');
getWord('July');
getWord('August');
getWord('September');
getWord('October');
getWord('November');
getWord('December');
 */

const months = [
    'תשרי',
    'חשוון',
    'כסלו',
    'טבת',
    'שבט',
    'אדר',
    'ניסן',
    'אייר',
    'סיוון',
    'תמוז',
    'אב',
    'אלול',
    `אדר א'`,
    `אדר ב'`,
];

const enMonths = [
    'Tishrei',
    'Cheshvan',
    'Kislev',
    'Tevet',
    'Shvat',
    'Adar',
    'Nisan',
    'Iyyar',
    'Sivan',
    'Tamuz',
    'Av',
    'Elul',
    'Adar I',
    'Adar II',
];

const mapHebMonths = new Map();
enMonths.forEach((month, index) => {
    const corresponding: number[] = [
        7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 12, 12,
    ];
    mapHebMonths.set(month, corresponding[index]);
});

const days = [
    'א',
    'ב',
    'ג',
    'ד',
    'ה',
    'ו',
    'ז',
    'ח',
    'ט',
    'י',
    'י"א',
    'י"ב',
    'י"ג',
    'י"ד',
    'ט"ו',
    'ט"ז',
    'י"ז',
    'י"ח',
    'י"ט',
    'כ',
    'כ"א',
    'כ"ב',
    'כ"ג',
    'כ"ד',
    'כ"ה',
    'כ"ו',
    'כ"ז',
    'כ"ח',
    'כ"ט',
    'ל',
];

export {
    allLetters,
    letters,
    EHEVI_LETTERS,
    SUFFIX_LETTERS,
    REGULAR_LETTERS,
    gimatriaValues,
    contraGimatriaValues,
    smallGimatria,
    bigGimatria,
    months,
    enMonths,
    days,
    mapHebMonths,
    gregorianMonths,
};
