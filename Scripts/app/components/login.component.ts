import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonValidator } from './../validators/common.validator';
import { LoginService } from './../services/login.service';
import {LoginData} from './../models/loginData'

@Component({
    selector: 'login',
    templateUrl: 'html/components/login.component.html'
})
export class LoginComponent {

    public form: FormGroup;

    constructor(private _loginService: LoginService, fb: FormBuilder) {
        this.form = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.compose([Validators.required,
                CommonValidator.cannotContainSpace])]
        })
    }

    public login(): void {
        let loginData = new LoginData(this.form.controls['username'].value, this.form.controls['password'].value);

        this._loginService.login(loginData).subscribe(
            (res) => {
               //console.log(res); // prints form values in json format
            },
            (error) => {
                this.form.setErrors({ invalidLogin: true });
            }

        )
    };


}