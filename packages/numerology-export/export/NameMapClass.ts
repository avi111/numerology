import {ExportDocProps} from "../interfaces/IExportDoc";
import ExportDoc from "../mainTools/exportDoc";

class ExportNameMapClass implements ExportDocProps {
    public export: () => void;
    public getFileName: () => string;
    public prepare: () => string;
    private data: any;

    constructor(data: any) {
        this.data = data;
        this.getFileName = () => `${data.props.firstName} ${data.props.familyName}`;
        this.prepare = () => {
            return JSON.stringify(this.data);
        };

        this.export = () => new ExportDoc(this.prepare(), this.getFileName()).method2();
    }
}

export default ExportNameMapClass;
