// import Handlebars from 'handlebars';
import Chakra from '@/models/calculations/Chakra';
import {ExportDocProps} from '@/interfaces/IExportDoc';
import ExportDoc from '@/models/mainTools/exportDoc';

class ExportChakra implements ExportDocProps {
    public export: () => void;
    public getFileName: () => string;
    public prepare: () => string;
    private data: Chakra;

    constructor(data: Chakra) {
        this.data = data;
        this.getFileName = () => `${data.firstName} ${data.lastName}`;
        this.prepare = () => {
            const html = 'Name: {{lastName}}';
            // const template = Handlebars.compile(html);
            // const ret = JSON.stringify(template(this.data));
            const ret = '';
            return ret;
        };

        this.export = () => new ExportDoc(this.prepare(), this.getFileName()).method2();
    }
}

export default ExportChakra;
