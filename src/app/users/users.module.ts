import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UserSearchComponent } from './user-search.component';
import { UserListComponent } from './user-list-component';
import { UsersService } from './services/users.service';
import { MyMaterialModule } from '../my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
@NgModule({
    imports: [
        MyMaterialModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        UsersComponent,
        UserSearchComponent,
        UserListComponent
    ],
    providers: [UsersService],
})
export class UsersModule { }
