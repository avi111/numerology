import Profile from "../export/Profile";
import Couple from "../export/Couple";
import Business from "../export/Business";
import NameMapClass from "../export/NameMapClass";
import Chakra from "../export/Chakra";

export interface ExportDocProps {
    getFileName: () => string;
    prepare: () => string;
    export: () => void;
}

type IExportDoc = Profile | Couple | Business | NameMapClass | Chakra | undefined;

export default IExportDoc;