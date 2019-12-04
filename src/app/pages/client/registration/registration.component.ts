import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalService} from '../../../service/modal.service';
import {NgForm, NgModel} from '@angular/forms';
import {UserModel} from '../../../models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  maxBirthday: string;
  user: UserModel = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    password: '',
    passwordRepeat: '',
};
  readonly passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}/;

  constructor(private modalService: ModalService) {
    this.getMaxBirthday();

  }
  ngOnInit() {
  }

  getMaxBirthday() {
    const currentDate = new Date();
    const maxBirthday = new Date(currentDate.getFullYear() - 15, currentDate.getMonth(), currentDate.getDate());
    const year: string = String(maxBirthday.getFullYear());
    const month: string = maxBirthday.getMonth() + 1 < 10 ? `0${maxBirthday.getMonth() + 1}` : String(maxBirthday.getMonth() + 1);
    const day: string = maxBirthday.getDay() < 10 ? `0${maxBirthday.getDay()}` : String(maxBirthday.getDay());
    this.maxBirthday = `${year}-${month}-${day}`;
  }

  getIsValidPasswordRepeat(password, passwordRepeat) {
    return password === passwordRepeat;
  }

  openModal(id) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  getControlErrors(control: NgModel): string[] {
    if (control === undefined || control.errors === null) {
      return [];
    }

    const errors: string[] = Object.keys(control.errors);
    return errors;
  }

  updateChoiceEmployee(id: string) {
    this.modalService.close(id);
  }
  onSubmit(form: NgForm) {
    const controls = form.controls;


    if (form.valid && this.getIsValidPasswordRepeat(this.user.password, this.user.passwordRepeat)) {
      console.log(JSON.stringify(this.user));
    } else {
      console.log("error");
        Object.keys(controls)
          .forEach(controlName => controls[controlName].markAsTouched());

    }
  }

}
