import './operators';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutes} from './app.routes';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { MyMaterialModule } from './my-material.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    UsersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
