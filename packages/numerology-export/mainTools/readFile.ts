export interface FileReaderEventTarget extends EventTarget {
    result: string;
}

const CSVParse = (csvString: string, delimiter = ','): string[][] => {
    if (!csvString || !csvString.length) {
        return [];
    }

    const pattern = new RegExp(
        ('(\\' + delimiter + '|\\r?\\n|\\r|^)' +
            '(?:"([^"]*(?:""[^"]*)*)"|' +
            '([^"\\' + delimiter + '\\r\\n]*))'
        ), 'gi',
    );

    const rows: string[][] = [[]];
    let matches: RegExpExecArray | null | boolean = false;

    // noinspection JSAssignmentUsedAsCondition,JSAssignmentUsedAsCondition
    while (matches = pattern.exec(csvString)) {

        const matchedDelimiter = matches[1];
        const matchedCellQuote = matches[2];
        const matchedCellNoQuote = matches[3];

        /*
         * Edge case: Data that starts with a delimiter
         */
        if (matches.index === 0 && matchedDelimiter) {
            rows[rows.length - 1].push('');
        }

        if (matchedDelimiter.length && matchedDelimiter !== delimiter) {
            rows.push([]);
        }

        const matchedValue = (matchedCellQuote)
            ? matchedCellQuote.replace(
                new RegExp('""', 'g'), '"',
            )
            : matchedCellNoQuote;

        rows[rows.length - 1].push(matchedValue);
    }

    return rows.filter((row) => row.join('') !== '');
};

const readFile = (file: File): Promise<string[][]> => {
    return new Promise<string[][]>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const {result} = event.target as FileReaderEventTarget;
            if (event.target) {
                resolve(CSVParse(result));
            } else {
                reject();
            }
        };
        if (file) {
            reader.readAsText(file, 'windows-1255');
        }
    });
};


export {readFile, CSVParse};

