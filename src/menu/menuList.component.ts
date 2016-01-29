import {Component,OnInit,EventEmitter} from 'angular2/core';
import {MenuService} from '../services/menu.service';
import {NormalCase} from '../pipes/normalCase.pipe';
import {MenuItem} from './menuItem.component';

@Component({
    selector:'menu-list',
    directives:[MenuItem],
    pipes:[NormalCase],
    inputs:['heading'],
    template:`<div class="menu-list">
                <h2>{{ heading }}</h2>
                <ul>
                    <li *ngFor="#item of menuItems">
                        <menu-item [menuItem]="item"></menu-item>
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
    subscription:any;

    constructor(service:MenuService){
        this.service=service;
    }

    ngOnInit(){
        this.subscription = this.service.getCategorySelectionChangeEmitter().subscribe(item=>this.setHeading(item));
        this.menuItems = this.service.getMenuItems(100);
    }

    setHeading(item:any){
        console.log('Setting header');
        this.heading = item.innerHTML || '';
    }

}