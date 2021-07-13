
import {darken, invert, lighten, opacify, parseToRgb, rgba} from "polished";
import {RgbaColor, RgbColor} from "polished/lib/types/color";

export type IOpacity = 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;

export class Color {
    constructor(color: string) {
        this._color = color;
        this._rgb = parseToRgb(this._color)
    }

    private readonly _color: string
    private readonly _rgb: RgbColor | RgbaColor;

    get rgb(): RgbColor | RgbaColor {
        return this._rgb;
    }

    get color(): string {
        return this._color;
    }

    static hexToRgb(hex: string) {
        return rgba(hex, 1);
    }

    lighten(amt: number) {
        return lighten(amt, this._color)
    }

    darken(amt: number) {
        return darken(amt, this._color)
    }

    makeOpaque(num: IOpacity): string {
        return opacify(num as number - 1, this._color)
    }

    invert(): string {
        return invert(this._color)
    }
}