import {it,describe,expect,beforeEach,inject} from 'angular2/testing';
import {MenuList} from '../menu/menuList.component';
import {MenuService} from '../services/menu.service';

describe('Menu List Tests : ',()=> {

    let list:MenuList;
    let service:MenuService = new MenuService();

    beforeEach(()=>{
       list= new MenuList(service);
    });

    it('Should get more than 0 menu items',()=>{
        list.ngOnInit();
        expect(list.menuItems.length).toBeGreaterThan(0);
    });
});
