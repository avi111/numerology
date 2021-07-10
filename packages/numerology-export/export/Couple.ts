import IExportDoc, {ExportDocProps} from "../interfaces/IExportDoc";
import ExportDoc from "../mainTools/exportDoc";
import {Couple} from "@maya259/numerology-engine";

class ExportCouple implements ExportDocProps {
    public export: () => void;
    public getFileName: () => string;
    public prepare: () => string;
    data: IExportDoc;

    constructor(data: IExportDoc) {
        this.data = data;
        const couple = this.data as Couple
        this.getFileName = () => `${couple.Partner1Props.firstName} ${couple.Partner2Props.familyName}`;
        this.prepare = () => {
            return JSON.stringify(couple);
        };

        this.export = () => new ExportDoc().execute(this.prepare(), this.getFileName());
    }
}

export default ExportCouple;
