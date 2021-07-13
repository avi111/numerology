import MButton from "./Button";
import {default as RReport, IReport as IIReport} from "./Report/Report";
import {default as SSimpleReport, ISimpleReport as IISimpleReport} from "./Report/SimpleReport";
import {default as TTitle, ITitle as IITitle} from "./Report/Title";
import {ISquare as IISquare, default as SSquare} from "./Report/Square"
import {Avatar as AAvatar, IAvatar as IIAvatar} from "./Report/Avatar";

export const Button = MButton;
export const Report = RReport;
export const SimpleReport = SSimpleReport;
export const Title = TTitle;
export type IReport = IIReport;
export type ISimpleReport = IISimpleReport;
export type ITitle = IITitle;
export type IAvatar = IIAvatar;
export type ISquare = IISquare;
export const Square = SSquare;
export const Avatar = AAvatar;
