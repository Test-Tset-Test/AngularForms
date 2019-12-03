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

  user = {} as UserModel;
  readonly passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,10}/;

  getIsValidPasswordRepeat(password, passwordRepeat) {
    console.log(password === passwordRepeat);
    return password === passwordRepeat;
  }

  constructor(private modalService: ModalService) {}
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
    if (form.valid && this.getIsValidPasswordRepeat(this.user.password, this.user.passwordRepeat)) {
      console.log(JSON.stringify(this.user));
    } else {
      console.log("error");
    }
  }
  ngOnInit() {

  }
}
