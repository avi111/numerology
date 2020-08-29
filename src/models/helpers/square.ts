class Square {

    public square: number[];
    public actualSquare: string[][] = [];

    constructor(square: number[]) {
        this.square = square;
    }

    public static fillSquare(input: number[], square: number[]): string[][] {
        const arr = new Array(9).fill('');
        input.forEach((num) => {
            arr[square.indexOf(num)] += '' + num;
        });

        return Square.chunk(arr.map((el) => el === '' ? '0' : el));
    }

    public static chunk(arr: string[]): string[][] {
        return arr.reduce((memo: string[][], value, index) => {
            if (index % 3 === 0 && index !== 0) {
                memo.push([]);
            }
            memo[memo.length - 1].push(value);
            return memo;
        }, [[]]);
    }
}

export default Square;
