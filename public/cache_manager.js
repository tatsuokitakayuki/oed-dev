export class CacheManager {

    constructor(core) {
        this.core = core;
    }

    async cacheListA() {
        let list = await caches.keys();
        list.sort((a, b) => {
            const lowerA = a.toLowerCase();
            const lowerB = b.toLowerCase();
            if (lowerA < lowerB) {
                return -1;
            }
            if (lowerA > lowerB) {
                return 1;
            }
            return 0;
        });
        let cacheList = [];
        list.forEach(item => {
            const parts = item.split('-v');
            if (cacheList.length === 0 || cacheList[cacheList.length - 1].name != parts[0]) {
                cacheList.push({name: parts[0], version: [parts[1]]});
            } else {
                cacheList[cacheList.length - 1].version.push(parts[1]);
            }
        });
        return cacheList;
    }

    async formattedCacheListA(type) {
        const cacheList = await this.cacheListA();
        let formattedCacheList = '';
        switch (type) {
            case 'markdown':
                formattedCacheList = this.markdownCacheList(cacheList);
                break;
            default:
                formattedCacheList = this.textCacheList(cacheList);
                break;
        }
        return formattedCacheList;
    }

    markdownCacheList(cacheList) {
        let markdown = '# TOED cache list\n\n';
        cacheList.forEach(item => {
            markdown += `## ${item.name}\n`;
            item.version.forEach(version => {
                markdown += `- Version ${version}\n`;
            });
            markdown += '\n';
        });
        return markdown;
    }

    textCacheList(cacheList) {
        let text = 'TOED cache list\n\n';
        cacheList.forEach(item => {
            text += `${item.name}\n`;
            item.version.forEach(version => {
                text += `* Version ${version}\n`;
            });
            text += '\n';
        });
        return text;
    }

    async getVersionA(cacheName, index) {
        const cacheList = await this.cacheListA();
        const item = cacheList.find(item => item.name == cacheName);
        return item ? item.version[index] : null;
    }
}
