import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavMenuModule} from '../../nav-menu/nav-menu.module';
import {UserModule} from '../users/user.module';
import {EditUserModule} from '../users/editUser/editUser.module';
import {CreateUserModule} from '../users/createUser/createUser.module';
import {ModalModule} from '../../../components/modal/modal.module';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {Registration2Component} from './registration2.component';

@NgModule({
  declarations: [
    Registration2Component,
  ],
  imports: [
    CommonModule,
    UserModule,
    ModalModule,
    ReactiveFormsModule,
  ],
  exports: [
    Registration2Component
  ],
  providers: [],
})
export class Registration2Module {

}
