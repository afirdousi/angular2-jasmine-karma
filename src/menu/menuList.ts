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
        ul{
            list-style:none;
            margin:0px;
            padding:0px;
        }
        li{
            padding:10px 5px;
        }
        li:nth-child(odd) {
             background-color:#fff;
        }
        li:nth-child(even) {
              background-color: #daf9e1;
        }
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