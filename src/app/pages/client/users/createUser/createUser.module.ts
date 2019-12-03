import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CreateUserComponent} from './createUser.component';

@NgModule({
  declarations: [
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CreateUserComponent,
  ],
  providers: [],
  bootstrap: [CreateUserComponent]
})
export class CreateUserModule { }
