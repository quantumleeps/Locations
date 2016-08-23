import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import template from './home.component.html';

@Component({
    template,
    directives: [ROUTER_DIRECTIVES],
    styles: [`

    html, body {
        height: 100vh;
    }

    .wrapper {
        background-color: #25677D;
        height: 100vh;
    }

    .clickbox {
        border: 2px solid black;
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
        background-color: white;
        width: 95vw;
    }
    .clickbox a {
        display: block;
        width: 100%;
        padding: 20px;
        font-size: 100px;
        color: #009BCF;
    }

    .page-title {
        font-size: 70px;
        color: white;
    }
    `]
})

export class HomeComponent {

}