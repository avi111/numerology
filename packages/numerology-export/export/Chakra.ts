import IExportDoc, {ExportDocProps} from "../interfaces/IExportDoc";
import ExportDoc from "../mainTools/exportDoc";
import {Chakra,} from "@maya259/numerology-engine";

class ExportChakra implements ExportDocProps {

    data: IExportDoc;

    constructor(data: IExportDoc) {
        this.data = data;
    }

    public export = () => new ExportDoc().execute(this.prepare(), this.getFileName());


    public prepare() {
        const chakra = this.data as Chakra;
        return JSON.stringify(chakra);
    }

    getFileName(): string {
        const chakra = this.data as Chakra;
        return `${chakra.firstName} ${chakra.lastName}`;
    }
}

export default ExportChakra;
