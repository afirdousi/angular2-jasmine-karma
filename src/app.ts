import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {MenuList} from "./menu/menuList";


@Component({
    selector:'restaurant-app',
    template:`
    <h3>Angular Restaurant</h3> <hr/>
    <menu-list></menu-list>`,
    directives:[MenuList]
})
class RestaurantApp{
    constructor(){
        console.log('Starting Angular 2 Restaurant App');
    }
}

bootstrap(RestaurantApp);