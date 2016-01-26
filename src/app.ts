import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {MenuList} from './menu/menuList.component';
import {Header} from './header/header.component';
import {MenuCategory} from './menu-category/menu-category.component';

@Component({
    selector:'restaurant-app',
    directives:[Header,MenuCategory, MenuList],
    template:`
    <div class="container">
        <header></header>
        <menu-category></menu-category>
        <menu-list [heading]="'Top Menu Items'" ></menu-list>
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