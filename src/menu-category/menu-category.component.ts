import {Component,OnInit} from 'angular2/core';
import {MenuService} from '../services/menu.service';
import {MenuList} from '../menu/menuList.component';

@Component({
    selector:'menu-category',
    bindings:[MenuService,MenuList],
    template:`
       <ul>
            <li>American</li>
            <li>Italian</li>
            <li>Mexican</li>
            <li>Mediterranean</li>
            <li>Pakistani</li>
       </ul>
       <div style="clear: both"></div>
    `,
    styles:[`
    .header{
        min-height: 100px;
        background-color:#1ccacd;
        color:#fff;
        padding:10px;
    }
    ul{
      list-style:none;
      width:70%;
      padding:0px;
      margin:0px auto;
    }
    li{
        width: 20%;
        height: 100px;
        float:left;
        background-color:#d3d3d3;
        font-size:24px;
        margin:0px;
        line-height:100px;
        text-align:center;
     }
     li:hover{
        cursor:pointer;
        background-color:#000;
        color:#d3d3d3;
     }


    `]

})
export  class MenuCategory implements OnInit{
    menuItems:Array<string>;
    service:MenuService;

    constructor(service:MenuService){
        this.service=service;
    }

    ngOnInit(){
       // this.menuItems = this.service.getMenuItems(100);
    }

}