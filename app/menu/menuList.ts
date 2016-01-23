import {Component,OnInit} from 'angular2/core';
import {MenuService} from '../services/menu';
import {NormalcaseWords} from '../pipes/normalcaseWords';

@Component({

})
export  class MenuList implements OnInit{
    menuItems:Array<string>;
    service:MenuService;

    constructor(service:MenuList){
        this.service=service;
    }

    ngOnInit(){
        this.menuItems = this.service.getMenuItems(100);
    }

}