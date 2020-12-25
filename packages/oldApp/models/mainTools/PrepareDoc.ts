import Profile from '@/models/mainTools/Profile';
import Couple from '@/models/mainTools/couple';
import Business from '@/models/mainTools/business';
import NameMapClass from '@/models/mainTools/NameMapClass';
import IExportDoc, {ExportDocProps} from '@/interfaces/IExportDoc';
import Chakra from '@/models/calculations/Chakra';
import ExportChakra from '@/models/export/Chakra';
import ExportProfile from '@/models/export/Profile';
import ExportNameMapClass from '@/models/export/NameMapClass';
import ExportBusiness from '@/models/export/Business';
import ExportCouple from '@/models/export/Couple';

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
