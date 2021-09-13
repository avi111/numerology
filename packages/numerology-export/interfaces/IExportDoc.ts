import Chakra from "@maya259/numerology-engine/Calculations/Chakra";
import Profile from "@maya259/numerology-engine/MainTools/Profile";
import Business from "@maya259/numerology-engine/MainTools/Business";
import Couple from "@maya259/numerology-engine/MainTools/Couple";

export interface ExportDocProps {
    getFileName: () => string;
    prepare: () => string;
    export: (rtl?: boolean) => void;
    data: IExportDoc;
}

type IExportDoc = Profile | Couple | Business | Chakra;

export default IExportDoc;