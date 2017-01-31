import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'warehouses-page',
    templateUrl: 'warehouses.component.html'
})

export class WarehousesComponent {
    title: string;

    constructor() {
        this.title = "The warehouses page";
    }
}