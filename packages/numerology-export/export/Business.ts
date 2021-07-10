import IExportDoc, {ExportDocProps} from "../interfaces/IExportDoc";
import ExportDoc from "../mainTools/exportDoc";
import {Business} from "@maya259/numerology-engine";

class ExportBusiness implements ExportDocProps {
    constructor(data: IExportDoc) {
        this.data = data;
    }

    data: IExportDoc;

    export() {
        return new ExportDoc().execute(this.prepare(), this.getFileName());
    }

    getFileName(): string {
        const business = this.data as Business;

        return `${business.selfProps.firstName} ${business.selfProps.birthDate.toDateString()}`;
    }

    prepare(): string {
        const business = this.data as Business;
        return JSON.stringify(business);
    }
}

export default ExportBusiness;
