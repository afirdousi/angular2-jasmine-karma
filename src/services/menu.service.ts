/**
 * Created by afirdousi on 1/22/16.
 */
import {Injectable,EventEmitter} from 'angular2/core';
declare var _:any;

@Injectable()
export class MenuService{
    menuItems:Array<Object>; //TODO: Change this to an array of type "MenuItem"
    categorySelected:EventEmitter<MouseEvent> = new EventEmitter();


    constructor(){
        this.menuItems = [{name:'Burger',price:13.2},{name:'Fries',price:4.5},{name:'New York Cheese Cake',price:6},{name:'Pakistani Biryani',price:8},
            {name:'Chicken Nuugets',price:5},{name:'Chinese Rice',price:9}];

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


    selectCategory(item){
        console.log("Emitting event ");
        //console.log(item);
       this.categorySelected.emit(item);
    }

    getCategorySelectionChangeEmitter(){
        return this.categorySelected;
    }

}