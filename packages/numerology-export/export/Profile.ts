import IExportDoc, {ExportDocProps} from "../interfaces/IExportDoc";
import ExportDoc from "../mainTools/exportDoc";
import {Profile} from "@maya259/numerology-engine";

class ExportProfile implements ExportDocProps {
    public export: () => void;
    public getFileName: () => string;
    public prepare: () => string;
    public data: IExportDoc;

    constructor(data: IExportDoc) {
        this.data = data;
        const profile = this.data as Profile;

        this.getFileName = () => `${profile.firstName} ${profile.familyName}`;
        this.prepare = () => {
            return JSON.stringify(profile);
        };

        this.export = () => new ExportDoc().execute(this.prepare(), this.getFileName());
    }
}

export default ExportProfile;
