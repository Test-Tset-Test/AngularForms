import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './registration.component';
import {NavMenuModule} from '../../nav-menu/nav-menu.module';
import {UserModule} from '../users/user.module';
import {EditUserModule} from '../users/editUser/editUser.module';
import {CreateUserModule} from '../users/createUser/createUser.module';
import {ModalModule} from '../../modal/modal.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    UserModule,
    ModalModule,
    FormsModule
  ],
  exports: [
    RegistrationComponent
  ],
  providers: [],
})
export class RegistrationModule {

}
