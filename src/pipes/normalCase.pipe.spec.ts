/**
 * Created by afirdousi on 1/23/16.
 */
import {it,describe,expect,beforeEach,inject} from 'angular2/testing';
import {NormalCase} from './normalCase.pipe';
import NumberFormatOptions = Intl.NumberFormatOptions;

describe('NormalCase Pipe : ',()=>{
   let pipe:NormalCase;

    beforeEach(()=>{
       pipe= new NormalCase();
    });

    it('Should convert "some pipe test" to "Some Pipe Test"',()=>{
       var result = pipe.transform('some pipe test',null);

        expect(result).toEqual('Some Pipe Test');
    });

});