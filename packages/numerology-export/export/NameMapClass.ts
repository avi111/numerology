import IExportDoc, {ExportDocProps} from "../interfaces/IExportDoc";
import ExportDoc from "../mainTools/exportDoc";
import {NameMapClass} from "@maya259/numerology-engine";

class ExportNameMapClass implements ExportDocProps {
    public export: () => void;
    public getFileName: () => string;
    public prepare: () => string;

    constructor(data: IExportDoc) {
        this.data = data;
        const nameMapClass = this.data as NameMapClass;

        this.getFileName = () => `${nameMapClass.props.firstName} ${nameMapClass.props.familyName}`;
        this.prepare = () => {
            return JSON.stringify(nameMapClass);
        };

        this.export = () => new ExportDoc().execute(this.prepare(), this.getFileName());
    }

    data: IExportDoc;
}

export default ExportNameMapClass;
