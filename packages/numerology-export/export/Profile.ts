import Profile from "@maya259/numerology-engine/MainTools/Profile";
import IExportDoc, {ExportDocProps} from "../interfaces/IExportDoc";
import ExportDoc from "../mainTools/exportDoc";
import {IExportProps} from "../mainTools/PrepareDoc";

class ExportProfile implements ExportDocProps {
    public export: (rtl?: boolean) => void;
    public getFileName: () => string;
    public prepare: () => string;
    public data: IExportDoc;

    constructor({style, body, data}: IExportProps) {
        this.data = data;
        const profile = this.data as Profile;
        this.getFileName = () => `${profile.firstName} ${profile.familyName}`;

        this.prepare = () => {
            return body;
        };

        this.export = (rtl: boolean) => new ExportDoc().execute({
            style,
            body: this.prepare(),
            filename: this.getFileName(),
            rtl
        });
    }
}

export default ExportProfile;
