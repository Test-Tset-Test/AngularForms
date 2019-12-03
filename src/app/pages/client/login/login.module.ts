import {NgModule} from '@angular/core';
import {LayoutClientComponent} from '../layoutCLient.component';
import {NavMenuModule} from '../../nav-menu/nav-menu.module';
import {UserModule} from '../users/user.module';
import {EditUserModule} from '../users/editUser/editUser.module';
import {CreateUserModule} from '../users/createUser/createUser.module';
import {RegistrationModule} from '../registration/registration.module';
import {RouterModule} from '@angular/router';
import {ModalModule} from '../../modal/modal.module';
import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [],
})
export class LoginModule {}
