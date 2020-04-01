export class UIHelper {

    constructor() {
        this.tabindexList = [];
    }

    initialize() {
        
    }

    setTabindex() {
        this.tabindex('0');
    }

    resetTabindex() {
        this.tabindex('-1');
    }

    tabindex(value) {
        this.tabindexList.forEach(item => item.setAttribute('tabindex', value));
    }
}
