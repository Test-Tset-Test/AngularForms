import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EditUserComponent} from './editUser.component';

@NgModule({
  declarations: [
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    EditUserComponent,
  ],
  providers: [],
  bootstrap: [EditUserComponent]
})

export class EditUserModule { }
