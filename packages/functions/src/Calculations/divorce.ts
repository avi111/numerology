const divorce: boolean[][] = [
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

divorce[2][1] = true;
divorce[2][2] = true;
divorce[2][3] = true;
divorce[2][5] = true;
divorce[2][6] = true;
divorce[3][1] = true;
divorce[3][2] = true;
divorce[3][3] = true;
divorce[3][4] = true;
divorce[3][6] = true;
divorce[4][2] = true;
divorce[4][3] = true;
divorce[4][5] = true;
divorce[5][4] = true;
divorce[6][1] = true;
divorce[6][2] = true;
divorce[6][3] = true;
divorce[6][4] = true;
divorce[6][5] = true;
divorce[6][6] = true;
divorce[8][2] = true;

const getDivorce = (hilltop: number, challenge: number): boolean => {
    return divorce[hilltop][challenge];
};

export default getDivorce;

export {
    divorce,
};
