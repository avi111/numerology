import getChildren, {andUp, children} from "./children";
import {getWord} from "../helpers/Dictionary/dictionary";

describe('children', () => {
    describe('return proper result', () => {
        for (let challenge = 1; challenge <= 9; challenge++) {
            for (let hilltop = 1; hilltop <= 9; hilltop++) {
                const result = getChildren(challenge, hilltop);
                it(`${challenge}${hilltop} = ${result}`, () => {
                    expect(children[challenge][hilltop]).toBe(result);
                });

                const up = andUp(result);
                it(`calculates if ${result} needs to convert + to "and up"`, () => {
                    if (result && result.slice(-1) === '+') {
                        expect(up).toBe(`${result.slice(0, -1)} ${getWord('and up')}`);
                    } else {
                        expect(up).toBe(result);
                    }
                });
            }
        }
    });
});
