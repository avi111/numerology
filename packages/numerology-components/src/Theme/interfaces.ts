export enum Colors {
    PRIMARY = "#4791db",
    SECONDARY = "#e33371",
    WARNING = "#ffff00",
    BLACK = "#000000",
    INFO = "#64b5f6",
    WHITE = "#ffffff",
    SUCCESS = "#81c784",
    DANGER = "#e57373",
}

export enum themes {
    DEFAULT = "DEFAULT",
    SQ = "SQ",
    PARTY = "PARTY",
}

export interface ITheme {
    primary?: string;
    secondary?: string;
    error?: string;
    warning?: string;
    info?: string;
    success?: string;
    themeName: string;
}

export type IOpacity = 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
export type rgb = { r: number, g: number, b: number } | null

export const Palettes = new Map<themes, ITheme>();

Palettes.set(
    themes.DEFAULT, {
        primary: Colors.PRIMARY,
        secondary: Colors.SECONDARY,
        error: Colors.DANGER,
        warning: Colors.WARNING,
        info: Colors.INFO,
        success: Colors.SUCCESS,
        themeName: themes.DEFAULT
    }
)

Palettes.set(
    themes.SQ, {
        primary: Colors.SECONDARY,
        secondary: Colors.DANGER,
        error: Colors.WARNING,
        warning: Colors.INFO,
        info: Colors.SUCCESS,
        success: Colors.PRIMARY,
        themeName: themes.SQ
    }
)

Palettes.set(
    themes.PARTY, {
        error: "#FF3200",
        info: "#1111FF",
        primary: "#aa00ee",
        secondary: "#ff88cc",
        success: "#00ff00",
        themeName: themes.PARTY,
        warning: "#eeff00"

    }
)