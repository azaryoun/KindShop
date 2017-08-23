import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonValidator } from './../validators/common.validator';
import { LoginService } from './../services/login.service';
import { LoginData } from './../models/loginData'

@Component({
    selector: 'login2',
    templateUrl: 'html/components/login2.component.html'
})
export class Login2Component {

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