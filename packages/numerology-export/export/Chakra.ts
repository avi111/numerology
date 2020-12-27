import Handlebars from 'handlebars';
import {ExportDocProps} from "../interfaces/IExportDoc";
import ExportDoc from "../mainTools/exportDoc";
import {Chakra} from "../numerologyEngine";

class ExportChakra implements ExportDocProps {
    private data: Chakra;

    constructor(data: Chakra) {
        this.data = data;
    }

    public export = () => new ExportDoc(this.prepare(), this.getFileName()).method2();

    public getFileName = () => `${this.data.firstName} ${this.data.lastName}`;

    public prepare() {
        const html = 'Name: {{lastName}}';
        const template = Handlebars.compile(html);
        return template(this.data);
    }
}

export default ExportChakra;
