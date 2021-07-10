interface IExportStrategy {
    setHtml: (src: string) => string;
    download: (html: string, filename: string) => void
}

class ExportDoc {
    private strategy?: IExportStrategy;

    constructor() {
        this.strategy = undefined;
        this.setStrategy(new Strategy2());
    }

    execute(src: string, filename: string) {
        if (this.strategy == undefined)
            return;
        const html = this.strategy.setHtml(src);
        this.strategy.download(html, filename);
        return html;
    }

    setStrategy(strategy: IExportStrategy) {
        this.strategy = strategy;
    }
}

export class Strategy1 implements IExportStrategy {
    public setHtml(src: string) {
        const header = '<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' ' +
            'xmlns:w=\'urn:schemas-microsoft-com:office:word\' ' +
            'xmlns=\'http://www.w3.org/TR/REC-html40\'>' +
            '<head><meta charset=\'utf-8\'><title>Export HTML to Word Document with JavaScript</title></head><body>';
        const footer = '</body></html>';
        const sourceHTML = header + src + footer;

        const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        return source;
    }


    public download(html: string, filename: string) {
        const fileDownload = document.createElement('a');
        document.body.appendChild(fileDownload);
        fileDownload.href = html;
        fileDownload.download = `${filename}.doc`;
        fileDownload.click();
        document.body.removeChild(fileDownload);
    }
}

export class Strategy2 implements IExportStrategy {
    public download(html: string, filename: string) {
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

    public setHtml(src: string) {
        const preHtml = '<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' xmlns:w=\'urn:schemas-microsoft-com:office:word\' xmlns=\'http://www.w3.org/TR/REC-html40\'><head><meta charset=\'utf-8\'><title>Export HTML To Doc</title></head><body>';
        const postHtml = '</body></html>';
        const html = preHtml + src + postHtml;
        return html;
    }
}

export default ExportDoc;