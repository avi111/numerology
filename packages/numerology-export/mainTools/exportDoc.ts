class ExportDoc {
    private readonly html: string;
    private readonly filename: string;

    constructor(html: string, filename: string = 'document') {
        this.html = html;
        this.filename = filename;
    }

    public method1() {
        const header = '<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' ' +
            'xmlns:w=\'urn:schemas-microsoft-com:office:word\' ' +
            'xmlns=\'http://www.w3.org/TR/REC-html40\'>' +
            '<head><meta charset=\'utf-8\'><title>Export HTML to Word Document with JavaScript</title></head><body>';
        const footer = '</body></html>';
        const sourceHTML = header + this.html + footer;

        const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        const fileDownload = document.createElement('a');
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = `${this.filename}.doc`;
        fileDownload.click();
        document.body.removeChild(fileDownload);
    }

    public method2() {
        const element = this.html;
        let filename = this.filename;
        const preHtml = '<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' xmlns:w=\'urn:schemas-microsoft-com:office:word\' xmlns=\'http://www.w3.org/TR/REC-html40\'><head><meta charset=\'utf-8\'><title>Export HTML To Doc</title></head><body>';
        const postHtml = '</body></html>';
        const html = preHtml + element + postHtml;

        const blob = new Blob(['\ufeff', html], {
            type: 'application/msword',
        });

        // Specify link url
        const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

        // Specify file name
        filename = filename ? filename + '.doc' : 'document.doc';

        // Create download link element
        const downloadLink = document.createElement('a');

        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            // Create a link to the file
            downloadLink.href = url;

            // Setting the file name
            downloadLink.download = filename;

            // triggering the function
            downloadLink.click();
        }

        document.body.removeChild(downloadLink);
    }
}

export default ExportDoc;
