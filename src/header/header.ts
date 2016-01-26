import {Component,OnInit} from 'angular2/core';
import {MenuService} from '../services/menu';

@Component({
    selector:'header',
    bindings:[MenuService],
    template:`
        <div class="header">
            <h2>Angular Restaurant</h2>

        </div>
    `,
    styles:[`
    .header{
        min-height: 100px;
        background-color:#0074D9;
        color:#fff;
        padding:10px;
    }


    `]

})
export  class Header implements OnInit{
    menuItems:Array<string>;
    service:MenuService;

    constructor(service:MenuService){
        this.service=service;
    }

    ngOnInit(){
       // this.menuItems = this.service.getMenuItems(100);
    }

}