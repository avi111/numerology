import Couple from "@maya259/numerology-engine/MainTools/Couple";
import IExportDoc, {ExportDocProps} from "../interfaces/IExportDoc";
import ExportDoc from "../mainTools/exportDoc";
import {IExportProps} from "../mainTools/PrepareDoc";

class ExportCouple implements ExportDocProps {
    public export: (rtl?: boolean) => void;
    public getFileName: () => string;
    public prepare: () => string;
    public data: IExportDoc;

    constructor({style, body, data}: IExportProps) {
        this.data = data;
        const couple = this.data as Couple;
        this.getFileName = () => `${couple.Partner1Props.firstName} ${couple.Partner2Props.familyName}`;

        this.prepare = () => {
            return body;
        };

        this.export = (rtl: boolean) => new ExportDoc().execute({
            style,
            body: this.prepare(),
            filename: this.getFileName(),
            rtl
        });
    }
}

export default ExportCouple;
