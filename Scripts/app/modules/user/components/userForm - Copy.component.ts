import { Component } from '@angular/core';
import { User } from './../models/user';

@Component({
    selector: 'userForm',
    templateUrl: 'html/modules/user/components/userForm.component.html'
})
export class UserFormComponent {
    public countries:string[] = ['United States', 'Singapore',
        'Hong Kong', 'Australia'];

    public user = new User('', '', 'Singapore');

    public submitted:boolean = false;

    public onSubmit(): void {
        console.log(this.user.firstName);

        this.submitted = true;
    }
}