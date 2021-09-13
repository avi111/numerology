import Chakra from "@maya259/numerology-engine/Calculations/Chakra";
import IExportDoc, {ExportDocProps} from "../interfaces/IExportDoc";
import ExportDoc from "../mainTools/exportDoc";
import {IExportProps} from "../mainTools/PrepareDoc";

class ExportChakra implements ExportDocProps {
    public export: (rtl?: boolean) => void;
    public getFileName: () => string;
    public prepare: () => string;
    public data: IExportDoc;

    constructor({style, body, data}: IExportProps) {
        this.data = data;
        const chakra = this.data as Chakra;
        this.getFileName = () => `${chakra.firstName} ${chakra.lastName}`;

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

export default ExportChakra;
