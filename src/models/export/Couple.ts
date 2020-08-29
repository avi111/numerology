import {ExportDocProps} from '@/interfaces/IExportDoc';
import ExportDoc from '@/models/mainTools/exportDoc';
import Couple from '@/models/mainTools/couple';
// import Handlebars from 'handlebars';

class ExportCouple implements ExportDocProps {
    public export: () => void;
    public getFileName: () => string;
    public prepare: () => string;
    private data: Couple;

    constructor(data: Couple) {
        this.data = data;
        this.getFileName = () => `${data.Partner1Props.firstName} ${data.Partner2Props.familyName}`;
        this.prepare = () => {
            const html = 'Name: {{name}}';
            // const template = Handlebars.compile(html);
            // return JSON.stringify(template(this.data));
            return '';
        };

        this.export = () => new ExportDoc(this.prepare(), this.getFileName()).method2();
    }
}

export default ExportCouple;
