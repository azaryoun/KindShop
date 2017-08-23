import { Component } from '@angular/core';

import { LoginUser } from './../models/loginUser';

@Component({
    selector: 'templateDrivenForm',
    templateUrl: 'html/modules/myForm/components/templateDrivenForm.component.html'
})
export class TemplateDrivenFormComponent {
    public loginUser = new LoginUser("Keiwan", "");
    
    public onSubmitTemplateBased() {
        console.log(this.loginUser.userName);
    }
}