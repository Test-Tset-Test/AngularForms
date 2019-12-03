import {Component, Input, OnInit} from '@angular/core';
import {ModalModule} from '../../modal/modal.module';
import {UserService} from '../../../service/user.service';
import {ModalService} from '../../../service/modal.service';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {getLiteralValue} from 'codelyzer/util/getLiteralValue';

@Component({
  selector: 'app-registration2',
  templateUrl: './registration2.component.html',
  styleUrls: ['./registration2.component.scss']
})
export class Registration2Component implements OnInit {

  userForm: FormGroup;
  constructor(private modalService: ModalService,
              private fb: FormBuilder) {}

  openModal(id) {
    this.initForm();
    this.modalService.open(id);
  }
  initForm() {
    this.userForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.pattern(/[a-z]/),
        Validators.maxLength(5),
        ]
      ],
      lastName: ['', [
        Validators.required,
        Validators.pattern(/[a-z]/)
      ]
      ],
      email: ['', [
        Validators.required,
        Validators.email
        ]
      ],
      password: [null, [
        Validators.required,
        Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,10}/),
      ]
      ],
      passwordRepeat: [null, [
        Validators.required,
        passwordRepeat => {
          if (this.userForm !== undefined) {
            return this.passwordValidator(this.userForm.controls.password.value, passwordRepeat.value);
          }
        }
      ]],
    });
  }

  getControlErrors(controlName: string): string[] {
    const control = this.userForm.controls[controlName];
    if (control === undefined || control.errors === null) {
      return [];
    }

    const errors: string[] = Object.keys(control.errors);
    return errors;
  }
  isControlInvalid(controlName: string): boolean {
    const control = this.userForm.controls[controlName];
    const result = control.invalid && control.touched;

    return result;
  }

  passwordValidator(password: string, passwordRepeat: string): ValidationErrors {
      if (password !== passwordRepeat) {
        return { passwordValidator: true };
      }
      return null;
  }

  onSubmit() {
    const controls = this.userForm.controls;

    if (this.userForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }

    console.log(JSON.stringify(this.userForm.value));
  }

  get checked() {
    return false;
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  updateChoiceEmployee(id: string) {
    this.modalService.close(id);
  }
  ngOnInit() {
    this.initForm();
  }
}
