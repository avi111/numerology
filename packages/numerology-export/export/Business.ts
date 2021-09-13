import IExportDoc, {ExportDocProps} from "../interfaces/IExportDoc";
import ExportDoc from "../mainTools/exportDoc";
import {IExportProps} from "../mainTools/PrepareDoc";
import Business from "@maya259/numerology-engine/MainTools/Business";

class ExportBusiness implements ExportDocProps {
    public export: (rtl?: boolean) => void;
    public getFileName: () => string;
    public prepare: () => string;
    public data: IExportDoc;

    constructor({style, body, data}: IExportProps) {
        this.data = data;
        const business = this.data as Business;
        this.getFileName = () => `${business.selfProps.firstName} ${business.selfProps.birthDate.toDateString()}`;

        this.prepare = () => {
            return body;
        };

        this.export = (rtl) => new ExportDoc().execute({
            style,
            body: this.prepare(),
            filename: this.getFileName(),
            rtl
        });
    }
}

export default ExportBusiness;
