/**
 * Created by afirdousi on 1/25/16.
 */
import {Component,Input} from 'angular2/core';
import {MenuService} from '../services/menu.service';

@Component({
    selector:'menu-item',
    bindings:[MenuService],
    template:`
              <div>
                <div class="itemname"> {{ menuItem.name }} </div>  -
                {{ '$' + menuItem.price}}
                <a class="add-bag" href="#">Add to bag</a>
              </div>


              `,
    styles:[`
        .add-bag{
                background-color: green;
                color: #fff;
                float: right;
                font-size: 12px;
                font-style: none;
                text-decoration: none;
                padding: 5px 10px;
        }
        .itemname{
        float:left;
            font-weight:bold;
            margin:0px 10px;
        }
    `]
})
export  class MenuItem {

    service:MenuService;
    @Input() menuItem;

    constructor(service:MenuService){
        this.service = service;
    }

}