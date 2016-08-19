import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import template from './home.component.html';

@Component({
    selector: 'home',
    template,
    directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent {

}