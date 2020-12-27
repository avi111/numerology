import IExportDoc, {ExportDocProps} from "../interfaces/IExportDoc";
import ExportChakra from "../export/Chakra";
import Chakra from "../export/Chakra";
import ExportProfile from "../export/Profile";
import Profile from "../export/Profile";
import ExportNameMapClass from "../export/NameMapClass";
import NameMapClass from "../export/NameMapClass";
import ExportBusiness from "../export/Business";
import Business from "../export/Business";
import ExportCouple from "../export/Couple";
import Couple from "../export/Couple";

class PrepareDoc {
    private profile: IExportDoc;
    private filename?: string;
    private exporter?: ExportDocProps;

    constructor(profile: IExportDoc) {
        this.profile = profile;
    }

    public static prepare(profile: IExportDoc) {
        const prep = new PrepareDoc(profile);
        prep.route();
        prep.export();
    }

    public route() {
        const {profile} = this;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const type = profile.constructor.name;

        switch (type) {
            case 'Chakra':
                this.exporter = new ExportChakra(profile as Chakra);
                break;
            case 'Profile':
                this.exporter = new ExportProfile(profile as Profile);
                break;
            case 'NameMapClass':
                this.exporter = new ExportNameMapClass(profile as NameMapClass);
                break;
            case 'Business':
                this.exporter = new ExportBusiness(profile as Business);
                break;
            case 'Couple':
                this.exporter = new ExportCouple(profile as Couple);
                break;
        }
    }

    public prepare() {
        if (this.exporter) {
            return this.exporter.prepare();
        }
    }

    public export() {
        if (this.exporter) {
            this.exporter.export();
        }
    }
}

export default PrepareDoc;
