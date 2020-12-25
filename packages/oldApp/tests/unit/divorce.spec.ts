import getdivorce, {divorce} from '@/models/calculations/divorce';

describe('divorce', () => {
    describe('return proper result', () => {
        for (let challenge = 1; challenge <= 9; challenge++) {
            for (let hilltop = 1; hilltop <= 9; hilltop++) {
                const result = getdivorce(challenge, hilltop);
                it(`${challenge}${hilltop} = ${result}`, () => {
                    expect(divorce[challenge][hilltop]).toBe(result);
                });
            }
        }
    });
});
