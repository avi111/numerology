import IExportDoc, {ExportDocProps} from "../interfaces/IExportDoc";
import ExportProfile from "../export/Profile";
import ExportNameMapClass from "../export/NameMapClass";
import ExportBusiness from "../export/Business";
import ExportCouple from "../export/Couple";
import ExportChakra from "../export/Chakra";
import {Strategy} from "../interfaces/strategy";


class PrepareDoc {
    private profile: IExportDoc;
    private strategy: Strategy;
    private exporter?: ExportDocProps;

    constructor(profile: IExportDoc, strategy: Strategy) {
        this.profile = profile;
        this.strategy = strategy;
    }

    public static prepare(profile: IExportDoc, strategy: Strategy) {
        const prep = new PrepareDoc(profile, strategy);
        prep.route();
        prep.export();
    }

    public route() {
        const {profile} = this;

        switch (this.strategy) {
            case Strategy.CHAKRA:
                this.exporter = new ExportChakra(profile);
                break;
            case Strategy.PROFILE:
                this.exporter = new ExportProfile(profile);
                break;
            case Strategy.NAME_MAP_CLASS:
                this.exporter = new ExportNameMapClass(profile);
                break;
            case Strategy.BUSINESS:
                this.exporter = new ExportBusiness(profile);
                break;
            case Strategy.COUPLE:
                this.exporter = new ExportCouple(profile);
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
