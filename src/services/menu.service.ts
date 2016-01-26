/**
 * Created by afirdousi on 1/22/16.
 */
import {Injectable} from 'angular2/core';
declare var _:any;

@Injectable()
export class MenuService{
    menuItems:Array<string>;

    constructor(){
        this.menuItems = ['Burger','Fries','New York Cheese Cake','Pakistani Biryani','Chicken Nuugets','Chinese Rice'];
    }

    getMenuItems(count:number){
        var result = [];

        if(!count){
            //return all
            throw new Error('Specify number of items required');
        }else{
            if(count>this.menuItems.length){
                count = this.menuItems.length;
            }
        }

        result = _.take(this.menuItems,count);

        return result;

    }

}