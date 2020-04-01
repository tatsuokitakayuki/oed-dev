export class ChangeDrawerItemEvent extends CustomEvent {
    
    constructor(index, active) {
        super('Drawer:changeitem', {detail: {index: index, active: active}});
    }
}
