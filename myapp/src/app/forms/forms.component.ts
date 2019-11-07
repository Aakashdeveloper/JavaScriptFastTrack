import { Component } from '@angular/core';
import { UserModel } from './user.model';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: './forms.component.html'
})

export class FormsComponent {

    user = new UserModel('John', 'eva');

    submitForm(form: NgForm): void {
        console.log(form.value);
    }
}
