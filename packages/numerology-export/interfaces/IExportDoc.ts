import {
    Profile,
    Couple,
    Business,
    Chakra,
    NameMapClass,
} from "@maya259/numerology-engine";

export interface ExportDocProps {
    getFileName: () => string;
    prepare: () => string;
    export: () => void;
    data: IExportDoc;
}

type IExportDoc = Profile | Couple | Business | NameMapClass | Chakra;

export default IExportDoc;