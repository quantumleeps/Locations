import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import template from './home.component.html';

@Component({
    template,
    directives: [ROUTER_DIRECTIVES],
    styles: [`

    .clickbox {
        border: 1px solid black;
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
    }
    .clickbox a {
        display: block;
        width: 100%;
        padding: 20px;
    }

    .page-title {
        font-size: 30px;
    }
    `]
})

export class HomeComponent {
    test() {
        console.log("testingthisthingfuckfuck")
    }
}