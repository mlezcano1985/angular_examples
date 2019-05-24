import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ngx-rut-formatter',
    templateUrl: './ngx-rut-formatter.component.html'
})

export class NgxRutFormatterComponent implements OnInit {
    modelRut: any;
    items: string[] = ['123456', '123k', '34ii33'];
    constructor() { }

    ngOnInit() { }
}
