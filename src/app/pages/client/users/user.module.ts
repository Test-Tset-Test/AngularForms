import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserComponent} from './user.component';
import {EditUserComponent} from './editUser/editUser.component';
import {EditUserModule} from './editUser/editUser.module';
// import {EmployeePagePaginationModule} from './page-pagination-employee/employeePagePagination.module';



@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserComponent,
  ],
  providers: [

  ],
})
export class UserModule {
}
