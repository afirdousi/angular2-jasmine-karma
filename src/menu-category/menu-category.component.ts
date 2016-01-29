import {Component,OnInit,EventEmitter} from 'angular2/core';
import {MenuService} from '../services/menu.service';


@Component({
    selector:'menu-category',
    template:`
       <ul (click)="selectCategory($event.target)">
            <li>Top</li>
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
        width: 19.8%;
        height: 100px;
        float:left;
        background-color:#d3d3d3;
        font-size:24px;
        margin:0px;
        line-height:100px;
        text-align:center;
        border-right:1px solid black;
     }
     li:hover{
        cursor:pointer;
        background-color:#000;
        color:#d3d3d3;
     }
     li:last-child{
        border:none;
     }

    `]

})
export  class MenuCategory implements OnInit{
    service:MenuService;

    constructor(service:MenuService){
        this.service=service;
    }

    ngOnInit(){
        //Do something at initializtion
    }

    selectCategory(category){
        this.service.selectCategory(category);
    }
}