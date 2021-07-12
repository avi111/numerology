import IExportDoc, {ExportDocProps} from "../interfaces/IExportDoc";
import ExportDoc from "../mainTools/exportDoc";
import {IExportProps} from "../mainTools/PrepareDoc";
import {NameMapClass, Profile} from "@maya259/numerology-engine";

class ExportNameMapClass implements ExportDocProps {
    public export: () => void;
    public getFileName: () => string;
    public prepare: () => string;
    public data: IExportDoc;

    constructor({style, body, data}: IExportProps) {
        this.data = data;
        const nameMapClass = this.data as NameMapClass;
        this.getFileName = () => `${nameMapClass.props.firstName} ${nameMapClass.props.familyName}`;
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

export default ExportNameMapClass;
