import IExportDoc, {ExportDocProps} from "../interfaces/IExportDoc";
import ExportProfile from "../export/Profile";
import {Strategy} from "../interfaces/strategy";
import ExportChakra from "../export/Chakra";
import ExportNameMapClass from "../export/NameMapClass";
import ExportBusiness from "../export/Business";
import ExportCouple from "../export/Couple";

export interface IPrepareDoc {
    style: string,
    body: string,
    strategy: Strategy,
    data: IExportDoc
}

export interface IExportProps {
    style: string,
    body: string,
    data: IExportDoc
}

export interface IExecute {
    style: string,
    body: string,
    filename: string
}

class PrepareDoc {
    private strategy: Strategy;
    private exporter?: ExportDocProps;
    private body: string;
    private style: string;
    private filename: string;
    private data: IExportDoc;

    constructor({
                    style,
                    body,
                    strategy,
                    data
                }: IPrepareDoc) {
        this.style = style;
        this.body = body;
        this.strategy = strategy;
        this.data = data;
    }

    public static prepare(prepareDoc: IPrepareDoc) {
        const prep = new PrepareDoc(prepareDoc);
        prep.route();
        prep.export();
    }

    public route() {
        const {style, body, filename, data} = this;
        const payload = {style, body, filename, data};
        switch (this.strategy) {
            case Strategy.CHAKRA:
                this.exporter = new ExportChakra(payload);
                break;
            case Strategy.PROFILE:
                this.exporter = new ExportProfile(payload);
                break;
            case Strategy.NAME_MAP_CLASS:
                this.exporter = new ExportNameMapClass(payload);
                break;
            case Strategy.BUSINESS:
                this.exporter = new ExportBusiness(payload);
                break;
            case Strategy.COUPLE:
                this.exporter = new ExportCouple(payload);
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
