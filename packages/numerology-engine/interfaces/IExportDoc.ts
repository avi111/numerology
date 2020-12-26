export interface ExportDocProps {
    getFileName: () => string;
    prepare: () => string;
    export: () => void;
}
