const allLetters = 'אבגדהוזחטיכלמנסעפצקרשתםןץףך'.split('');
const letters = allLetters.join('');
const EHEVI_LETTERS: string[] = 'אהוי'.split('');
const SUFFIX_LETTERS: string[] = 'םןץףך'.split('');
const REGULAR_LETTERS: string[] = 'מנצפכ'.split('');

const gematriaValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30,
    40, 50, 60, 70, 80, 90, 100, 200, 300, 400,
    40, 50, 90, 80, 20];

const contraGematriaValues = new Map();

contraGematriaValues.set(0, '');
contraGematriaValues.set(1, 'א');
contraGematriaValues.set(2, 'ב');
contraGematriaValues.set(3, 'ג');
contraGematriaValues.set(4, 'ד');
contraGematriaValues.set(5, 'ה');
contraGematriaValues.set(6, 'ו');
contraGematriaValues.set(7, 'ז');
contraGematriaValues.set(8, 'ח');
contraGematriaValues.set(9, 'ט');
contraGematriaValues.set(10, 'י');
contraGematriaValues.set(15, 'טו');
contraGematriaValues.set(16, 'טז');
contraGematriaValues.set(20, 'כ');
contraGematriaValues.set(30, 'ל');
contraGematriaValues.set(40, 'מ');
contraGematriaValues.set(50, 'נ');
contraGematriaValues.set(60, 'ס');
contraGematriaValues.set(70, 'ע');
contraGematriaValues.set(80, 'פ');
contraGematriaValues.set(90, 'צ');
contraGematriaValues.set(100, 'ק');
contraGematriaValues.set(200, 'ר');
contraGematriaValues.set(300, 'ש');
contraGematriaValues.set(400, 'ת');
contraGematriaValues.set(500, 'תק');
contraGematriaValues.set(600, 'תר');
contraGematriaValues.set(700, 'תש');
contraGematriaValues.set(800, 'תת');
contraGematriaValues.set(900, 'תתק');

const smallGematria = '123456789123456789123445982';

const bigGematria = new Map();

bigGematria.set('א', 1);
bigGematria.set('ב', 2);
bigGematria.set('ג', 3);
bigGematria.set('ד', 4);
bigGematria.set('ה', 5);
bigGematria.set('ו', 6);
bigGematria.set('ז', 7);
bigGematria.set('ח', 8);
bigGematria.set('ט', 9);
bigGematria.set('י', 10);
bigGematria.set('כ', 20);
bigGematria.set('ל', 30);
bigGematria.set('מ', 40);
bigGematria.set('נ', 50);
bigGematria.set('ס', 60);
bigGematria.set('ע', 70);
bigGematria.set('פ', 80);
bigGematria.set('צ', 90);
bigGematria.set('ק', 100);
bigGematria.set('ר', 200);
bigGematria.set('ש', 300);
bigGematria.set('ת', 400);
bigGematria.set('ם', 500);
bigGematria.set('ן', 600);
bigGematria.set('ץ', 700);
bigGematria.set('ף', 800);
bigGematria.set('ך', 900);

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
    gematriaValues,
    contraGematriaValues,
    smallGematria,
    bigGematria,
    months,
    enMonths,
    days,
    mapHebMonths,
    gregorianMonths,
};
