/**
 * Created by afirdousi on 1/23/16.
 */
import {it,describe,expect,beforeEach,inject} from 'angular2/testing';
import {MenuService} from './menu.service';

describe('Menu Service Tests : ',()=>{

    let service:MenuService = new MenuService();


    it('Should return an exception when count is not provided to get list of menu items',()=>{
        expect(function(){service.getMenuItems(null)}).toThrowError();
    });

    it('Should return 2 menu items',()=>{
        var items = service.getMenuItems(2);
        expect(items.length).toBe(2);
    });


    it('Should return all available menu items',()=>{
        var items = service.getMenuItems(10000000000000);
        expect(items).toEqual(['Burger','Fries','New York Cheese Cake','Pakistani Biryani','Chicken Nuugets','Chinese Rice']);
    });

});