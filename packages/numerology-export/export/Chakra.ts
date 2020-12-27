// import Handlebars from 'handlebars';
import {ExportDocProps} from "../interfaces/IExportDoc";
import ExportDoc from "../mainTools/exportDoc";

class ExportChakra implements ExportDocProps {
    private data: any;

    constructor(data: any) {
        this.data = data;
    }

    public export = () => new ExportDoc(this.prepare(), this.getFileName()).method2();

    public getFileName = () => `${this.data.firstName} ${this.data.lastName}`;

    public prepare() {
        return JSON.stringify(this.data);
    }
}

export default ExportChakra;
