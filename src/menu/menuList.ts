import {Component,OnInit} from 'angular2/core';
import {MenuService} from '../services/menu';
import {NormalCase} from '../pipes/normalCase';

@Component({
    selector:'menu-list',
    bindings:[MenuService],
    pipes:[NormalCase],
    template:`<ul>
                <li *ngFor="#item of menuItems">
                    {{ item }}
                </li>
              </ul>`,
    styles:[`


    `]

})
export  class MenuList implements OnInit{
    menuItems:Array<string>;
    service:MenuService;

    constructor(service:MenuService){
        this.service=service;
    }

    ngOnInit(){
        this.menuItems = this.service.getMenuItems(100);
    }

}