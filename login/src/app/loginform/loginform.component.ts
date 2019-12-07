import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-loginform',
    templateUrl: './loginform.component.html',
    styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
    _loginform;
    constructor(
        private formBuilder: FormBuilder,
    ) {
        this._loginform = this.formBuilder.group({
            username: '',
            password: ''
        });
    }

    onlogin(userData) {
        window.alert('Login Button is clicked');
        // console.warn('Your order has been submitted', userData);
    }
}
