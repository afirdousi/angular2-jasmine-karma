import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {MenuList} from './menu/menuList';
import {Header} from './header/header';

@Component({
    selector:'restaurant-app',
    directives:[Header,MenuList],
    template:`
    <div class="container">
        <header></header>
        <menu-list></menu-list>
    </div>`,
    styles:[
        `
            .container{
                width:90%;
                margin: 0px auto;
            }
        `
    ]
})
class RestaurantApp{
    constructor(){
        console.log('Starting Angular 2 Restaurant App');
    }
}

bootstrap(RestaurantApp);