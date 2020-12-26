import Profile from '@/models/mainTools/Profile';
import Couple from '@/models/mainTools/couple';
import Business from '@/models/mainTools/business';
import NameMapClass from '@/models/mainTools/NameMapClass';
import Chakra from '@/models/calculations/Chakra';

type IExportDoc = Profile | Couple | Business | NameMapClass | Chakra | undefined;

export default IExportDoc;

export interface ExportDocProps {
    getFileName: () => string;
    prepare: () => string;
    export: () => void;
}
