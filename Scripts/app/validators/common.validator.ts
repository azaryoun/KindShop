import { FormControl } from '@angular/forms';
import {AppSettings} from './../app.setting';

export class CommonValidator {

    static cannotContainSpace(formControl: FormControl) {
        if (formControl.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    }

    static cannotselectedNotSelected(formControl: FormControl) {
        if (formControl.value === AppSettings.DROPDOWN_TEXT)
            return { cannotselectedNotSelected: true };
        return null;
    }




}