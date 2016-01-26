import {Component,OnInit} from 'angular2/core';
import {MenuService} from '../services/menu.service';
import {NormalCase} from '../pipes/normalCase.pipe';

@Component({
    selector:'menu-list',
    bindings:[MenuService],
    pipes:[NormalCase],
    inputs:['heading'],
    template:`
              <div class="menu-list">
                <h2>{{ heading }}</h2>
                <ul>
                    <li *ngFor="#item of menuItems">
                        {{ item }}
                    </li>
                </ul>
              </div>
              `,
    styles:[`
        .menu-list{
            width:70%;
            margin:0px auto;
        }
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
              background-color: #eaeaea;
        }
    `]

})
export  class MenuList implements OnInit{
    menuItems:Array<string>;
    service:MenuService;
    heading:string ='';
    //menuSelect = new EventEmitter<>();

    constructor(service:MenuService){
        this.service=service;
    }

    ngOnInit(){
        this.menuItems = this.service.getMenuItems(100);
    }

}