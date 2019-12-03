import {NgModule} from '@angular/core';
import {LayoutClientComponent} from './layoutCLient.component';
import {NavMenuComponent} from '../nav-menu/nav-menu.component';
import {NavMenuModule} from '../nav-menu/nav-menu.module';
import {RouterModule, Routes} from '@angular/router';
import {UserModel} from '../../models/user.model';
import {UserModule} from './users/user.module';
import {EditUserModule} from './users/editUser/editUser.module';
import {CreateUserModule} from './users/createUser/createUser.module';
import {ModalModule} from '../modal/modal.module';
import {RegistrationModule} from './registration/registration.module';
import {LoginComponent} from './login/login.component';
import {LoginModule} from './login/login.module';
import {ReactiveFormsModule} from '@angular/forms';
import {Registration2Module} from './registrationOnReactioveForm/registration2.module';

const clientRoute: Routes = [{
  path: '',
  component: LayoutClientComponent,
  children: [
    {path: 'login', component: LoginComponent},
  ]
}];

@NgModule({
  declarations: [
    LayoutClientComponent,
  ],
  imports: [
    NavMenuModule,
    UserModule,
    EditUserModule,
    CreateUserModule,
    RegistrationModule,
    Registration2Module,
    LoginModule,
    ReactiveFormsModule,
    RouterModule.forChild(clientRoute),
    ModalModule,
  ],
  exports: [
    LayoutClientComponent
  ],
  providers: [],
})
export class LayoutClientModule {

}
