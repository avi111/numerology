import {ExportDocProps} from '@/interfaces/IExportDoc';
import ExportDoc from '@/models/mainTools/exportDoc';
import Profile from '@/models/mainTools/Profile';

class ExportProfile implements ExportDocProps {
    public export: () => void;
    public getFileName: () => string;
    public prepare: () => string;
    private data: Profile;

    constructor(data: Profile) {
        this.data = data;
        this.getFileName = () => `${data.firstName} ${data.familyName}`;
        this.prepare = () => {
            return JSON.stringify(this.data);
        };

        this.export = () => new ExportDoc(this.prepare(), this.getFileName()).method2();
    }
}

export default ExportProfile;
