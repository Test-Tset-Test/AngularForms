import {NgModule} from '@angular/core';
import {RegistrationComponent} from './registration.component';
import {UserModule} from '../users/user.module';
import {ModalModule} from '../../../components/modal/modal.module';
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
