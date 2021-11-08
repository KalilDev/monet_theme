'use strict';
exports = {
    ThemeExporter: ThemeExporter,
}
class ThemeExporter {
    constructor(theme, name) {
        this.theme = theme;
        this.name = name;
    }
    download() {
        this.downloadZip();
    }
    async downloadZip() {
        const exportFiles = this.generate(), zip = new google3.index();
        for (const file of exportFiles)
            zip.file(file.path, file.content);
        const fileName = this.name + '.zip', blob = await zip.generateAsync({ type: 'blob' });
        await src.utils_downloadBlob(blob, fileName);
    };
};