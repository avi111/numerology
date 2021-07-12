import IExportDoc, {ExportDocProps} from "../interfaces/IExportDoc";
import ExportDoc from "../mainTools/exportDoc";
import {IExportProps} from "../mainTools/PrepareDoc";
import {Chakra, Profile} from "@maya259/numerology-engine";

class ExportChakra implements ExportDocProps {
    public export: () => void;
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

        this.export = () => new ExportDoc().execute({
            style,
            body: this.prepare(),
            filename: this.getFileName()
        });
    }
}

export default ExportChakra;
