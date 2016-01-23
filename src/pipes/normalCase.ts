/**
 * Created by afirdousi on 1/22/16.
 */
import {PipeTransform, Pipe} from 'angular2/core';

@Pipe({name:'normalcaseWords'})
export class NormalCase implements PipeTransform {
    constructor() {

    }

    //TODO:This method needs refactor
    transform(text:string, args:any[]):any {
        return text.split(' ').map((str) => {
                return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
            }
        );
    }
}