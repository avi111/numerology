import {IExecute} from "./PrepareDoc";

interface IExportStrategy {
    setHtml: ({style, body, filename}: IExecute) => string;
    download: (html: string, filename: string) => void
}

class ExportDoc {
    private strategy?: IExportStrategy;

    constructor() {
        this.strategy = undefined;
        this.setStrategy(new Strategy2());
    }

    execute({style, body, filename}: IExecute) {
        if (this.strategy == undefined)
            return;

        const html = this.strategy.setHtml({style, body, filename});
        this.strategy.download(html, filename);
        return html;
    }

    setStrategy(strategy: IExportStrategy) {
        this.strategy = strategy;
    }
}

export class Strategy1 implements IExportStrategy {
    public setHtml({style, body, filename}: IExecute) {
        const header = '<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' ' +
            'xmlns:w=\'urn:schemas-microsoft-com:office:word\' ' +
            'xmlns=\'http://www.w3.org/TR/REC-html40\'>' +
            `<style>${style}</style>` +
            '<head><meta charset=\'utf-8\'><title>Export HTML to Word Document with JavaScript</title></head><body>';
        const footer = '</body></html>';
        const sourceHTML = header + body + footer;

        return 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
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

    public setHtml({style, body, filename}: IExecute) {
        const preHtml = '<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' xmlns:w=\'urn:schemas-microsoft-com:office:word\' xmlns=\'http://www.w3.org/TR/REC-html40\'>' +
            '<head>' +
            '<meta charset=\'utf-8\'><title>Export HTML To Doc</title>' +
            `<style>${style}</style>` +
            '</head>' +
            '<body>';
        const postHtml = '</body></html>';
        const html = preHtml + body + postHtml;
        console.log(html)
        return html;
    }
}

export default ExportDoc;