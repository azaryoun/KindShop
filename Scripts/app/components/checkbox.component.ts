import { Component } from '@angular/core';


@Component({
    selector: 'checkbox',
    templateUrl: 'html/components/checkbox.component.html'
    
})
export class CheckboxConfigurableExample {
    checked = false;
    indeterminate = false;
    align = 'start';
    disabled = false;

    favoriteSeason: string;

    seasons = [
        'Winter',
        'Spring',
        'Summer',
        'Autumn',
    ];
}