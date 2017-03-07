import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'eventFilter'
})

export class EventFilterPipe implements PipeTransform {
    transform(input: any[], args: string) {
        let searchString: string = args;
        if(searchString) {
            let result = input.filter(function (item) {
                return item.code.indexOf(searchString) > -1;
            });
            return result;
        } else {
            return input;
        }
    }
}