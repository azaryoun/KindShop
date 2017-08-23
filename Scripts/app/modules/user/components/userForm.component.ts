import { Component } from '@angular/core';
import { User } from './../models/user';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonValidator } from './../../../validators/common.validator';
import {AppSettings} from './../../../app.setting'

@Component({
    selector: 'userForm',
    templateUrl: 'html/modules/user/components/userForm.component.html'
})
export class UserFormComponent {
    public countries: string[] = ['United States', 'Singapore',
        'Hong Kong', 'Australia'];

    public user = new User('', '', '');
    public form: FormGroup;

    public errorMessage: string = '';
    constructor(fb: FormBuilder) {

        this.countries.unshift(AppSettings.DROPDOWN_TEXT);

        this.form = fb.group({
            firstName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            email: ['', Validators.required],
            country: [AppSettings.DROPDOWN_TEXT, CommonValidator.cannotselectedNotSelected]
        })


        this.form.setValue(this.user);

        

        this.form.valueChanges.subscribe(x => {

            if (x > 4) {
                this.errorMessage = "Enter at least 4 Charater";
            }

            if (x == "") {
            }
        })


    }

    public submitted: boolean = false;

    public onSubmit(): void {
        this.user = this.form.value;

        //  let loginData = new LoginData(this.form.controls['username'].value, this.form.controls['password'].value);



        console.log(this.user.firstName);
        console.log(this.user.country);
        console.log(this.user.email);

        alert(JSON.stringify(this.form.value));

        //if (!result) {
        //    this.form.setErrors({
        //        invalidLogin: true
        //    });


        this.submitted = true;
    }
}